import {container} from "tsyringe";
import {Hello, HelloService} from "@/services/HelloService";

export default async function Home({searchParams}: { searchParams: { hello?: string } }) {
    const helloService: HelloService = container.resolve(HelloService);
    const data: Hello = await helloService.getMessage(searchParams?.hello);

    return (
        <form>
            <h2>{data.message}</h2>

            <input type="text" name="hello" />
            <input type="submit" />
        </form>
    );
}
