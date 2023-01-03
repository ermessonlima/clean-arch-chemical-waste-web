import { HttpPostClient } from "@/data/protocols/http/http-post-client";
import { AuthenticationParams } from "@/domain/usecases/authentication";

export  class RemoteAuthentication {
    constructor(private readonly url: string,
        private readonly httpPostClient: HttpPostClient) { }

    async auth(params: AuthenticationParams): Promise<void> {
        await this.httpPostClient.postUrl({url:this.url, body:params})
    }
}
