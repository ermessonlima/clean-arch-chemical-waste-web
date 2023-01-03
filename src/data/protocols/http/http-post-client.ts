import { HttpResponse } from "./http-response"

export type HttpPostParams = {
    url: string
    body?: object
    params?: object
}

export interface HttpPostClient {
    postUrl(params: HttpPostParams): Promise<HttpResponse>
}
