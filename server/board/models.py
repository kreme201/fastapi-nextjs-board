from sqlalchemy import Column, Integer, String, Text, DateTime, func

from _config.database import Base


class Question(Base):
    __tablename__ = "board_questions"

    id = Column(Integer, primary_key=True)
    subject = Column(String, nullable=False)
    content = Column(Text, nullable=False)
    created_at = Column(DateTime, default=func.now())
    updated_at = Column(DateTime, default=func.now(), onupdate=func.now())
