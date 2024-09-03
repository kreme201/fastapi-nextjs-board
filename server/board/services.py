from fastapi import Depends
from sqlalchemy.orm import Session

from _config.database import get_db
from board.dtos import QuestionForm
from board.models import Question


class QuestionService:
    def __init__(self, session: Session = Depends(get_db)):
        self.session = session

    def search(self):
        return self.session.query(Question).order_by(Question.created_at.desc()).all()

    def get(self, question_id: int) -> Question | None:
        return self.session.get(Question, question_id)

    def create(self, data: QuestionForm) -> Question:
        question = Question(
            subject=data.subject,
            content=data.content,
        )
        self.session.add(question)
        self.session.commit()

        return question

    def update(self, question: Question, data: QuestionForm):
        question.subject = data.subject
        question.content = data.content

        self.session.add(question)
        self.session.commit()

        return question

    def delete(self, question: Question) -> None:
        self.session.delete(question)
        self.session.commit()
