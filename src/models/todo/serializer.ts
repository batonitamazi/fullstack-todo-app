import { Resource } from '../resource/Resource'
import { Serializer } from '../resource/serializer'
import { Todo } from '../todo/Todo'


export class TodoSerializer implements Serializer {
    fromJson(json: any) {
        const todo = new Todo()
        todo.id = json.id
        todo.title = json.title
        todo.description = json.description
        todo.complete = json.complete
        return todo
    }

    toJson(item: Todo) {
        const obj: any = {}
        return obj
    }
}