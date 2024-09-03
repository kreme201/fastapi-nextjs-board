from fastapi import FastAPI, Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from starlette.middleware.cors import CORSMiddleware

from board.controllers import router as board_router
from hello.controllers import router as hello_router


def create_app() -> FastAPI:
    app = FastAPI()

    app.add_middleware(
        CORSMiddleware,
        allow_origins=['*'],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    @app.exception_handler(RequestValidationError)
    async def validation_exception_handler(request: Request, exc: RequestValidationError):
        errors = {}
        for error in exc.errors():
            errors[error["loc"][-1]] = error["msg"]

        return JSONResponse(status_code=422, content=errors)

    app.include_router(hello_router)
    app.include_router(board_router)

    return app


app = create_app()
