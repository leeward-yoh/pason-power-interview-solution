import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import Chart from '../../components/Chart'
import Filter from '../../components/Chart/Filter'
import Aggregate from '../../components/Chart/Aggregate'
import { fetchUsage } from '../../actions/chart'

class Charts extends React.Component {
  componentWillMount() {
    // eslint-disable-next-line no-shadow
    const { fetchUsage, date, timespan } = this.props
    fetchUsage(date, timespan)
  }

  render() {
    return (
      <Container>
        <Aggregate {...this.props} />
        <Filter {...this.props} />
        <Chart {...this.props} />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.chart.isLoading,
  data: state.chart.data,
  date: state.chart.date,
  timespan: state.chart.timespan,
})

export default connect(
  mapStateToProps,
  { fetchUsage },
)(Charts)
