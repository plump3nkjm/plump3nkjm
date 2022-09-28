import lsCache from 'lscache'

const expireTime = 1440;

export const setLoginSession = (token: string, userData: Object) => {
    lsCache.set('token', token, expireTime);
    lsCache.set('userData', userData, expireTime);
}

export const purgeLoginSession = () => {
    lsCache.remove('token');
    lsCache.remove('userData')
}

export const setSession = (key: string, value: any) => {
    lsCache.set(key, value, expireTime);
}

export const getSession = (key: string) => {
    return lsCache.get(key)
}