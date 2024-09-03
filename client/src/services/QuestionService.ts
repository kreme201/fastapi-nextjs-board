import {inject, injectable} from "tsyringe";
import {AxiosService} from "@/services/AxiosService";

export interface Question {
    id: number;
    subject: string;
    content: string;
    created_at: Date;
    updated_at: Date;
}

export interface QuestionRequest {
    subject: string;
    content: string;
}

@injectable()
export class QuestionService {
    constructor(
        @inject(AxiosService) private axios: AxiosService,
    ) {
    }

    async search(): Promise<Question[]> {
        const response = await this.axios.get<Question[]>("board/list");
        return response.data;
    }

    async create(data: QuestionRequest) {
        const response = await this.axios.post<Question>("board/create", data);
        return response.data;
    }

    async get(id: number) {
        const response = await this.axios.get<Question>(`board/${id}`);
        return response.data;
    }
}
