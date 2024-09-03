import {container} from "tsyringe";
import {notFound} from "next/navigation";

import dayjs from "@/libs/dayjs";
import {QuestionService} from "@/services/QuestionService";

export default async function Page({params}: { params: { id: number } }) {
    try {
        const questionService: QuestionService = container.resolve(QuestionService);
        const question = await questionService.get(params.id);

        return (
            <div className={"container my-3"}>
                <h2 className={"border-bottom py-2"}>{question.subject}</h2>
                <div className={"card my-3"}>
                    <div className={"card-body"}>
                        <div className={"card-text"} style={{whiteSpace: "pre-line"}}>{question.content}</div>
                        <div className={"d-flex justify-content-end"}>
                            <div className={"badge bg-light text-dark p-2"}>{dayjs(question.created_at).fromNow()}</div>
                        </div>
                    </div>
                </div>

                <h5 className={"border-bottom my-3 py-2"}>1개의 답변이 있습니다.</h5>
                <div className={"card my-3"}>
                    <div className={"card-body"}>
                        <div className={"card-text"} style={{whiteSpace: "pre-line"}}>CONTENT</div>
                        <div className={"d-flex justify-content-end"}>
                            <div className={"badge bg-light text-dark p-2"}>2024-01-01 00:00:00</div>
                        </div>
                    </div>
                </div>

                <form method={"post"} className={"my-3"}>
                    <div className={"mb-3"}>
                        <textarea rows={10} className={"form-control"}></textarea>
                    </div>
                    <input type={"submit"} value={"답변등록"} className={"btn btn-primary"} />
                </form>
            </div>
        );
    } catch (e) {
        return notFound();
    }
}
