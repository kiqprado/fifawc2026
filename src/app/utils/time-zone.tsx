import { format } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'

export function NewTimeZone(datetime: string) {
  return format(toZonedTime(datetime, 'America/Sao_Paulo'), 'HH:mm')
}