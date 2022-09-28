import axios, {AxiosRequestConfig} from 'axios';
import {getSession, purgeLoginSession} from "@/utils/SessionUtil";

axios.interceptors.response.use(
    response => response,
    async error => {
        switch (error.response?.status) {
            case 500:
                console.log('500 error.')
                return Promise.reject(error)

            case 401:
                console.log('401 error.')
                purgeLoginSession()
                return Promise.reject(error)

            default:
                console.log('other error.')
                return Promise.reject(error)
        }
    }
)

axios.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getSession('token');
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config
})


export class FetchUtil {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    async get<T>(path: string, params: Object, headers?: Object): Promise<T>  {
        return await axios.get(this._joinPath(path), {params: params, headers: headers}).then(res => res).then(data => data.data);
    }

    async post<T>(path: string, params: Object, headers?: Object): Promise<T> {
        return await axios.post(this._joinPath(path), params).then(res => res).then(data => data.data)
    }

    async delete<T>(path: string, params: Object, headers?: Object): Promise<T> {
        return await axios.delete(this._joinPath(path), params).then(res => res).then(data => data.data)
    }

    async put<T>(path: string, params: Object, headers?: Object): Promise<T> {
        return await axios.put(this._joinPath(path), params).then(res => res).then(data => data.data)
    }

    async patch<T>(path: string, params: Object, headers?: Object): Promise<T> {
        return await axios.patch(this._joinPath(path), params).then(res => res).then(data => data.data)
    }

    _joinPath(path: string): string {
        return [this.endpoint, path].join('/');
    }

}
