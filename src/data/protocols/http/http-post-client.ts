import { HttpResponse } from "./http-response"

export type HttpPostParams<T> = {
    url: string
    body?: T
    params?: object
}

export interface HttpPostClient<T, R> {
    postUrl(params: HttpPostParams<T>): Promise<HttpResponse<R>>
}
