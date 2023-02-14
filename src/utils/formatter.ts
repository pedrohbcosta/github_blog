import moment from 'moment'

export function relativeDateFromNow(date: string) {
  return moment(date).fromNow()
}
