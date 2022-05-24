import { Resource } from "../models/resource/Resource";
import { Serializer } from "../models/resource/serializer";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
// import { environment } from "../environment/environment";
import { from } from "rxjs";
import axios from "axios";
import { environment } from "../environment/environment";
const API_BASE_URL = environment.basePath;


export class ResourceProvider<T extends Resource> {
    constructor(public endpoint: string, public serializer: Serializer) { }


    async listWithCounter(queryOptions?: any) {
        const headers: any = { Accept: "*/*", "Content-Type": "application/json" };
        const url = `${API_BASE_URL}/${this.endpoint
        }`;
        return ajax({ url: url, method: "GET", headers })
            .pipe(
                map((data: any) =>
                    this.convertList(data.response, this.endpoint)
                ),
                catchError((error) => {
                    return of(error);   
                })
            )
            .toPromise();
    }
    private convertList(data: any, endpoint = ""): any {
        console.log(data)
        return {
            results: data.map((item: any) => this.serializer.fromJson(item)),
        };
    }

    // private convertListWithCounter(data: any, endpoint = ""): any {
    //     return {
    //         count: data.count,
    //         current: data.current.map((item: any) => this.serializer.fromJson(item)),
    //         next: data.next.map((item: any) => this.serializer.fromJson(item)),
    //         hasNext: data.has_next,
    //     };
    // }
}