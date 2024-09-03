import {container} from "tsyringe";

import dayjs from "@/libs/dayjs";
import {Question, QuestionService} from "@/services/QuestionService";

export default async function Home() {
    const questionService: QuestionService = container.resolve(QuestionService);
    const questions: Question[] = await questionService.search();

    return (
        <div className={"container my-3"}>
            <table className={"table"}>
                <thead>
                <tr className={"text-center table-dark"}>
                    <th style={{width: "100px"}}>번호</th>
                    <th>제목</th>
                    <th style={{width: "200px"}}>작성일</th>
                </tr>
                </thead>
                <tbody>
                {questions.map((question: Question) => (
                    <tr key={question.id} className={"text-center"}>
                        <td>{question.id}</td>
                        <td className={"text-start"}><a href={`/${question.id}`}>{question.subject}</a></td>
                        <td>{dayjs(question.created_at).fromNow()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <a href={"/create"} className={"btn btn-primary"}>질문 등록하기</a>
        </div>
    );
}
