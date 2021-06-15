import {Teacher} from "./Teacher";
import {Schoolclass} from "./Schoolclass";


export class Unit{
  constructor(public id:number,
              public day:number,
              public unit:number,
              public subject:string,
              public teacherID:number,
              public schoolclassID:string,
              public hasChanged: boolean) {
  }
}
