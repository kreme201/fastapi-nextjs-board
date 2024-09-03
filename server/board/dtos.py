from datetime import datetime

from pydantic import BaseModel, field_validator


class QuestionResponse(BaseModel):
    id: int
    subject: str
    content: str
    created_at: datetime
    updated_at: datetime


class QuestionForm(BaseModel):
    subject: str
    content: str

    @field_validator("subject", "content")
    def not_empty(cls, v):
        if not v or not v.strip():
            raise ValueError("빈값은 허용되지 않습니다.")

        return v
