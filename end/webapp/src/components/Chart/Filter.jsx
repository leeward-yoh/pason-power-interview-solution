import React from 'react'
import { connect } from 'react-redux'
import { Dropdown, Button, Segment } from 'semantic-ui-react'
import {
  CHANGE_USAGE_TIMESPAN,
  CHANGE_CHART_FORWARD,
  CHANGE_CHART_BACK,
} from '../../actions/chart'
import {
  getCleanTextForTimespan,
} from '../../utils'

class Filter extends React.Component {
  handleChange = ($this, {value}) => {
    this.props.changeReportTimespan(value)
    setTimeout(() => this.props.fetchUsage(this.props.date, value), 0)
  }

  handleChangeBackwards = () => {
    this.props.moveReportDateBackwards()
    setTimeout(() => this.props.fetchUsage(this.props.date, this.props.timespan), 0)
  }

  handleChangeForewards = () => {
    this.props.moveReportDateForwards()
    setTimeout(() => this.props.fetchUsage(this.props.date, this.props.timespan), 0)
  }

  render() {
    const { isLoading, timespanText, timespanOpts } = this.props
    return (
      <Segment>
        <Button.Group basic>
          <Button
            icon="left chevron"
            onClick={this.handleChangeBackwards}
            disabled={isLoading}
          />
          <Dropdown
            button
            text={timespanText}
            options={timespanOpts}
            onChange={this.handleChange}
            disabled={isLoading}
          />
          <Button
            icon="right chevron"
            onClick={this.handleChangeForewards}
            disabled={isLoading}
          />
        </Button.Group>
      </Segment>
    )
  }
}

const mapStateToProps = state => (
  {
    timespanOpts: state.chart.timespanOpts,
    timespanText: getCleanTextForTimespan(state.chart.date.end, state.chart.timespan),
  }
)

const mapDispatchToProps = dispatch => (
  {
    moveReportDateForwards: () => {
      dispatch({ type: CHANGE_CHART_FORWARD })
    },
    moveReportDateBackwards: () => {
      dispatch({type: CHANGE_CHART_BACK })
    },
    changeReportTimespan: (value) => {
      dispatch({type: CHANGE_USAGE_TIMESPAN, timespan: value })
    },
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter)
