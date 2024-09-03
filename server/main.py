from fastapi import FastAPI

from hello.controllers import router as hello_router


def create_app() -> FastAPI:
    app = FastAPI()

    app.include_router(hello_router)

    return app


app = create_app()
