import {
  CHANGE_USAGE_TIMESPAN,
  LOAD_USAGE_FAILURE,
  LOAD_USAGE,
  LOAD_USAGE_SUCCESS,
  CHANGE_CHART_BACK,
  CHANGE_CHART_FORWARD,
} from '../actions/chart'
import {
  getTimespaning,
  getDefaultDateRange,
  getDateRangePlusOne,
  getDateRangeMinusOne,
} from '../utils'

const initial = {
  isLoading: false,
  data: {
    labels: [],
    series: [],
    avg: '',
    max: '',
    min: '',
  },
  timespanOpts: getTimespaning.opts,
  timespan: getTimespaning.defaultOpt,
  date: getDefaultDateRange(getTimespaning.defaultOpt),
}

export default (state = initial, action) => {
  switch (action.type) {
    case LOAD_USAGE_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: {},
      }
    case CHANGE_USAGE_TIMESPAN:
      return {
        ...state,
        timespan: action.timespan,
        date: getDefaultDateRange(action.timespan),
      }
    case LOAD_USAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data,
      }
    case LOAD_USAGE:
      return {
        ...state,
        isLoading: true,
      }
    case CHANGE_CHART_BACK:
      return {
        ...state,
        date: getDateRangeMinusOne(state.date, state.timespan),
      }
    case CHANGE_CHART_FORWARD:
      return {
        ...state,
        date: getDateRangePlusOne(state.date, state.timespan),
      }
    default:
      return state
  }
}
