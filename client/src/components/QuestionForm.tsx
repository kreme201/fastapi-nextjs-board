"use client";

import {useMemo, useState} from "react";
import {useFormState} from "react-dom";
import {Question, QuestionRequest} from "@/services/QuestionService";
import {create} from "@/app/actions/question";

export default function QuestionForm({question}: { question?: Question }) {
    const [data, setData] = useState<QuestionRequest>({
        subject: question?.subject || "",
        content: question?.content || "",
    });
    const [state, formAction] = useFormState(create, {});
    const errors = useMemo(() => {
        return {
            subject: state?.subject as string,
            content: state?.content as string,
        };
    }, [state]);

    return (
        <div className={"container"}>
            <h5 className={"my-3 border-bottom pb-2"}>질문 등록</h5>
            <form className={"my-3"} action={formAction}>
                <div className={"mb-3"}>
                    <label htmlFor={"subject"}>제목</label>
                    <input
                        type={"text"}
                        name={"subject"}
                        className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                        value={data.subject}
                        onChange={e => setData({...data, subject: e.target.value})}
                    />
                    {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                </div>

                <div className={"mb-3"}>
                    <label htmlFor={"content"}>내용</label>
                    <textarea
                        name={"content"}
                        className={`form-control ${errors.content ? "is-invalid" : ""}`}
                        rows={10}
                        value={data.content}
                        onChange={e => setData({...data, content: e.target.value})}
                    ></textarea>
                    {errors.content && <div className="invalid-feedback">{errors.content}</div>}
                </div>
                <button type={"submit"} className={"btn btn-primary"}>저장하기</button>
            </form>
        </div>
    );
}
