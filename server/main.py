from fastapi import FastAPI

from board.controllers import router as board_router
from hello.controllers import router as hello_router


def create_app() -> FastAPI:
    app = FastAPI()

    app.include_router(hello_router)
    app.include_router(board_router)

    return app


app = create_app()
