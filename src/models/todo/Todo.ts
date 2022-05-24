import { Resource } from "../resource/Resource"


export class Todo extends Resource {
    id: BigInt | any
    title: String | any
    description: String | any 
    complete: Boolean | any
}