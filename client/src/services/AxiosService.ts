import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {injectable} from "tsyringe";

@injectable()
export class AxiosService {
    private readonly axios: AxiosInstance;

    constructor() {
        this.axios = axios.create({
            baseURL: process.env.API_HOST,
            timeout: 5000,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    public async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axios.get<T>(url, config).catch((error) => {
            throw error.response.data;
        });
    }

    public async post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axios.post<T>(url, data, config).catch((error) => {
            throw error.response.data;
        });
    }

    public async put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axios.put<T>(url, data, config).catch((error) => {
            throw error.response.data;
        });
    }

    public async patch<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axios.patch<T>(url, data, config).catch((error) => {
            throw error.response.data;
        });
    }

    public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axios.delete<T>(url, config).catch((error) => {
            throw error.response.data;
        });
    }
}
