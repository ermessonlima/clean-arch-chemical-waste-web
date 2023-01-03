export interface HttpPostClient {
    postUrl(url: string): Promise<void>
}
