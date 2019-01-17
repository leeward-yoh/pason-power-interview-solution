export const CHANGE_USAGE_TIMESPAN = 'changeUsageTimespan'
export const LOAD_USAGE = 'loadUsage'
export const LOAD_USAGE_SUCCESS = 'loadUsageSuccess'
export const LOAD_USAGE_FAILURE = 'loadUsageFailure'
export const CHANGE_CHART_FORWARD = 'changeChartForward'
export const CHANGE_CHART_BACK = 'changeChartBackward'

function realData(date, timespan) {
  const data = {
    labels: [],
    series: [],
    avg: '',
    max: '',
    min: '',
  }
  const db = 'power'
  const start = new Date(date.start.toISOString().split('T')[0]).toISOString()
  const end = new Date(date.end.toISOString().split('T')[0]).toISOString()

  const agQuery = `SELECT mean(USAGE_KWH), max(USAGE_KWH), min(USAGE_KWH) \
   from data where time >= '${start}' AND time < '${end}'`
  const query = `SELECT mean(USAGE_KWH) \
   from data where time >= '${start}' AND time < '${end}' \
   group by time(${timespan === 'monthly' ? '1d' : '2w'})`

  const q1 = fetch(encodeURI(`http://localhost:8086/query?db=${db}&q=${query}`))
    .then(resp => (resp.json()))
    .then((json) => {
      const results = json.results[0]
      if (!results.series) return
      data.labels = results.series[0].values.map((e) => {
        const d = new Date(e[0])
        return new Date(d.getTime() + d.getTimezoneOffset() * 60 * 1000)
      })
      const series = results.series[0].values.map(e => e[1])
      data.series.push(series)
    })
  const q2 = fetch(encodeURI(`http://localhost:8086/query?db=${db}&q=${agQuery}`))
    .then(resp => (resp.json()))
    .then((json) => {
      const results = json.results[0]
      if (!results.series) return
      // eslint-disable-next-line prefer-destructuring
      data.avg = results.series[0].values[0][1]
      // eslint-disable-next-line prefer-destructuring
      data.max = results.series[0].values[0][2]
      // eslint-disable-next-line prefer-destructuring
      data.min = results.series[0].values[0][3]
    })

  return new Promise((resolve) => {
    Promise.all([q1, q2]).then(() => resolve(data)).catch(() => resolve({error: 'Error'}))
  })
}

export const fetchUsage = (date, timespan) => (dispatch) => {
  dispatch({type: LOAD_USAGE})
  return realData(date, timespan)
    .then((data) => {
      const SimulateLatencyMS = 0
      setTimeout(() => {
        dispatch({data, type: LOAD_USAGE_SUCCESS})
        return data
      }, SimulateLatencyMS)
    })
    .catch((err) => {
      dispatch({err, type: LOAD_USAGE_FAILURE})
    })
}
