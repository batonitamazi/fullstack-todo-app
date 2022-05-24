import { Resource } from './Resource'

export interface Serializer {
	fromJson(json: any): Resource
	toJson(resource: Resource): any
}
