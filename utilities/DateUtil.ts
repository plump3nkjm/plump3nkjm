import dayjs, {Dayjs} from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(isBetween)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault("Asia/Tokyo")

export const now = () => dayjs().tz();

export const createDate = (date: string) => dayjs(date);

export const formatDate = (date: string | Dayjs, format: string = 'YYYY-MM-DD HH:mm:ss') => {
    date = typeof date === 'object' ? date : createDate(date)
    return date.format(format)
}

export const DateToUnix = (date: string, second: boolean = false) => {
    return second ? dayjs(date).unix() : dayjs(date).valueOf()
}

export const unixToDate = (str: number) => {
    return dayjs.unix(str)
}

export const between = (targetDate: string, beginDate: string, endDate: string) => {
    return createDate(targetDate).isBetween(beginDate, endDate, null, '[]')
}

export const isAfter = (date1: string | Dayjs, date2: string | Dayjs) => {
    date1 = typeof date1 === 'object' ? date1 : createDate(date1)
    date2 = typeof date2 === 'object' ? date2 : createDate(date2)

    return date1.isSameOrAfter(date2)
}

export const isBefore = (date1: string | Dayjs, date2: string | Dayjs) => {
    date1 = typeof date1 === 'object' ? date1 : createDate(date1)
    date2 = typeof date2 === 'object' ? date2 : createDate(date2)

    return date1.isSameOrBefore(date2)
}

export const isBeforeCount = (targetDate: string, dayCount: number) => {
    const begin = now().subtract(dayCount, 'd')
    const end = now().add(1, 'd')

    return createDate(targetDate).isBetween(begin, end, null, '[]')
}