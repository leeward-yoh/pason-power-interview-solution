import startMonth from 'date-fns/start_of_month'
import endMonth from 'date-fns/end_of_month'
import startYear from 'date-fns/start_of_year'
import endYear from 'date-fns/end_of_year'
import addMonth from 'date-fns/add_months'
import addYear from 'date-fns/add_years'
import subMonth from 'date-fns/sub_months'
import subYear from 'date-fns/sub_years'
import format from 'date-fns/format'

export const TimespanYearly = 'yearly'

export const TimespanMonthly = 'monthly'

export const getDateRange = (date, timespan = TimespanYearly) => {
  const startFn = timespan === TimespanYearly ? startYear : startMonth
  const endFn = timespan === TimespanYearly ? endYear : endMonth

  return {
    start: startFn(date),
    end: endFn(date),
  }
}

export const getDefaultDateRange = timespan => getDateRange(new Date(), timespan)

const getRangeFromDate = (date, timespan, type) => {
  const fn = timespan === TimespanYearly
    ? type === 'add' ? addYear : subYear
    : type === 'add' ? addMonth : subMonth

  return getDateRange(fn(date, 1), timespan)
}

export const getDateRangeMinusOne = (range, timespan) => getRangeFromDate(range.start, timespan, 'sub')

export const getDateRangePlusOne = (range, timespan) => getRangeFromDate(range.start, timespan, 'add')

export const getTimespaning = (() => ({
  opts: [
    {text: 'Monthly', value: TimespanMonthly},
    {text: 'Yearly', value: TimespanYearly},
  ],
  defaultOpt: TimespanMonthly,
}))()

export const getCleanTextForTimespan = (date, timespan) => {
  const fmt = timespan === TimespanMonthly ? 'MMM, YYYY' : 'YYYY'
  return format(date, fmt)
}
