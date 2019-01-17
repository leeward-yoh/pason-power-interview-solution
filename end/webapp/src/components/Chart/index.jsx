import React from 'react'
import {Segment, Loader} from 'semantic-ui-react'
import ChartistChart from 'react-chartist'
import Chartist from 'chartist'
import 'chartist-plugin-tooltips'
import format from 'date-fns/format'
import { TimespanMonthly } from '../../utils'

class Chart extends React.Component {
  renderChart(opts) {
    const { data } = this.props
    if (data.series.length > 0) {
      return (
        <ChartistChart
          type="Line"
          options={opts}
          data={data}
        />
      )
    }
    return <div><h1>No Data Available</h1></div>
  }

  render() {
    const { timespan, isLoading } = this.props
    const opts = {
      low: 0,
      axisX: {
        labelInterpolationFnc: value => timespan === TimespanMonthly
          ? value.getDate()
          : format(value, 'M/D'),
        showGrid: false,
      },
      plugins: [
        Chartist.plugins.tooltip(),
      ],
    }

    return (
      <Segment>
        <div className="ct-octave">
          <Loader active={isLoading} />
          {!isLoading && this.renderChart(opts)}
        </div>
      </Segment>
    )
  }
}

export default Chart
