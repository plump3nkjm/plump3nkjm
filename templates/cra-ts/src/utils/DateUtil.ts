import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween)

export const now = () => dayjs();

export const createDate = (date: string) => dayjs(date);

export const formatDate = (date: any, format: string = 'YYYY-MM-DD HH:mm:ss') => {
    return createDate(date).format(format)
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
