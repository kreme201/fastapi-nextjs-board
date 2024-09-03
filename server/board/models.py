from datetime import datetime

from sqlalchemy import Column, Integer, String, Text, DateTime

from _config.database import Base


class Question(Base):
    __tablename__ = "board_questions"

    id = Column(Integer, primary_key=True)
    subject = Column(String, nullable=False)
    content = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.now())
    updated_at = Column(DateTime, default=datetime.now(), onupdate=datetime.now())
