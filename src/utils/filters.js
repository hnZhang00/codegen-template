import moment from 'moment'

export const momentFormat = (value, format) => {
  if (!format) format = ''
  return moment(value).format(format)
}
