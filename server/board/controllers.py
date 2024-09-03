from fastapi import APIRouter, Depends, HTTPException
from fastapi_utils.cbv import cbv
from starlette import status

from .dtos import QuestionResponse, QuestionForm
from .models import Question
from .services import QuestionService

router = APIRouter(
    prefix="/board",
    tags=["Board"],
)


@cbv(router)
class BoardController:
    question_service: QuestionService = Depends(QuestionService)

    @router.get("/list", response_model=list[QuestionResponse])
    def list(self):
        return self.question_service.search()

    @router.post("/create", response_model=QuestionResponse)
    def create(self, dto: QuestionForm):
        return self.question_service.create(dto)

    @router.get("/{question_id}", response_model=QuestionResponse)
    def get(self, question_id: int):
        return self.find_question(question_id)

    @router.put("/{question_id}", response_model=QuestionResponse)
    def update(self, question_id: int, dto: QuestionForm):
        return self.question_service.update(self.find_question(question_id), dto)

    @router.delete("/{question_id}", status_code=status.HTTP_204_NO_CONTENT)
    def delete(self, question_id: int):
        self.question_service.delete(self.find_question(question_id))

    def find_question(self, question_id: int) -> Question:
        question = self.question_service.get(question_id)

        if not question:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="데이터를 찾을 수 없습니다."
            )

        return question
