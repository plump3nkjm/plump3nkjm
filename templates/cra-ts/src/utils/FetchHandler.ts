import axios, {AxiosRequestConfig} from 'axios';
import {getSession} from "@/utils/SessionUtil";

axios.interceptors.response.use(
    response => response,
    async error => {
        switch (error.response?.status) {
            case 500:
                console.log('500 error.')
                return Promise.reject(error)

            default:
                console.log('other error.')
                return Promise.reject(error)
        }
    }
)

axios.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getSession('token');
    if(token && config) {
        const {headers} = config
        if(headers && 'Authorization' in config) headers.Authorization = `Bearer ${token}`;
    }
    return config
})


export class FetchHandler {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    async get(path: string, params: Object): Promise<any>  {
        return await axios.get(this._joinPath(path), {params: params}).then(res => res).then(data => data.data);
    }

    async post(path: string, params: Object): Promise<any> {
        return await axios.post(this._joinPath(path), params).then(res => res).then(data => data.data)
    }

    async delete(path: string, params: Object): Promise<any> {
        return await axios.delete(this._joinPath(path), params).then(res => res).then(data => data.data)
    }

    async put(path: string, params: Object): Promise<any> {
        return await axios.put(this._joinPath(path), params).then(res => res).then(data => data.data)
    }

    async patch(path: string, params: Object): Promise<any> {
        return await axios.patch(this._joinPath(path), params).then(res => res).then(data => data.data)
    }

    _joinPath(path: string): string {
        return [this.endpoint, path].join('/');
    }

}
