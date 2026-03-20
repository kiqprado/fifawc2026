import { format } from 'date-fns'
import { toZonedTime} from 'date-fns-tz'

export function FormattedDate(datetime: string) {
  return format(new Date(datetime), 'dd/MM')
}

export function FormattedTimedZoneSP(datetime: string) {
  return format(toZonedTime(datetime, 'America/Sao_Paulo'), 'HH:mm')
}
