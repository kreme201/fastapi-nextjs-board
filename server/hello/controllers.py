from fastapi import APIRouter, Depends
from fastapi_utils.cbv import cbv

from .dtos import HelloResponse
from .services import HelloService

router = APIRouter(
    prefix="/hello",
)


@cbv(router)
class HelloController:
    hello_service: HelloService = Depends(HelloService)

    @router.get("/")
    def hello(self) -> HelloResponse:
        return HelloResponse(message=self.hello_service.hello())

    @router.get("/{name}")
    def hello_name(self, name: str) -> HelloResponse:
        return HelloResponse(message=self.hello_service.hello(name))
