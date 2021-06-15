import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Schoolclass} from "./Schoolclass";
import {Unit} from "./Unit";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  public path: String ="http://localhost:8080/server/api/rest/";

  constructor(private http: HttpClient) { }

  public getAllSchoolclasses():Observable<any>{
    return this.http.get(this.path + "class/findAll", {responseType:"json"});
  }

  public getAllTeachers():Observable<any>{
    return this.http.get(this.path + "teacher/findAll",{responseType:"json"});
  }

  public getUnitsOfClass(classname:String):Observable<any>{
    return this.http.get(this.path + "unit/findbyclass/" + classname,{responseType:"json"});
  }

  public saveUnit(unit:Unit):Observable<any>{
    return this.http.put(this.path + "unit/save",unit,{responseType:"json"});
  }
}
