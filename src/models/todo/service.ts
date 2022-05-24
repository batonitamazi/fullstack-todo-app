import { Todo } from "./Todo";
import { TodoSerializer } from "./serializer";
import { ResourceProvider } from "../../providers/resource.provider";

export class TodoProvider extends ResourceProvider<Todo> {
    constructor(){
        super("todos/", new TodoSerializer())
    }
}


export const todoService = new TodoProvider()