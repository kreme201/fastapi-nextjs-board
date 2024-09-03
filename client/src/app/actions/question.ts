import "reflect-metadata";
import {container} from "tsyringe";

import {QuestionRequest, QuestionService} from "@/services/QuestionService";

export async function create(prevState: any, formData: FormData): Promise<any> {
    try {
        await container.resolve(QuestionService).create(<QuestionRequest>{
            subject: formData.get("subject") as string,
            content: formData.get("content") as string,
        });

        location.href = "/";
    } catch (e) {
        return e;
    }
}
