import {inject, injectable} from "tsyringe";
import {AxiosService} from "@/services/AxiosService";

export type Hello = {
    message: string;
};

@injectable()
export class HelloService {
    constructor(
        @inject(AxiosService) private axios: AxiosService,
    ) {
    }

    async getMessage(name?: string): Promise<Hello> {
        try {
            const response = await this.axios.get<Hello>(`/hello/${name}`);
            return response.data;
        } catch (error) {
            console.log("Error", error);
            throw error;
        }
    }
}
