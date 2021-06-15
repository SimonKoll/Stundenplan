import {Component, OnInit} from '@angular/core';
import {Unit} from "./Unit";
import {HttpClientService} from "./http-client.service";
import {Schoolclass} from "./Schoolclass";
import {Teacher} from "./Teacher";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'frontend-stundenplan';

  days:Array<string> = ["Mo", "Di", "Mi", "Do", "Fr"];
  hours: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  schoolclasses:Array<Schoolclass> = [];
  // @ts-ignore
  currentSchoolclass: Schoolclass ;
  teachers:Teacher[] = [];
  units:Unit[] = [];
  // @ts-ignore
  ws: WebSocket;
  wsUri: string = "ws://localhost:3000"

  constructor(private httpClientService: HttpClientService) {}


  ngOnInit(): void {
    this.getAll();
    this.wsDoConnect();
  }

  getAll(){
    this.httpClientService.getAllTeachers().subscribe((data)=>{
      this.teachers = data;
    });
    this.httpClientService.getAllSchoolclasses().subscribe((data)=>{
      this.schoolclasses = data;
      this.getStringOfTimetable(this.currentSchoolclass != undefined ? this.currentSchoolclass.id: this.schoolclasses[0].id)
    });
  }

  public getNewTimetable(event: Event ):void{
    // @ts-ignore
    this.getStringOfTimetable(event.target.value);
  }

  public getSchoolclassByID(id: string): Schoolclass {
    for(let schoolclass of this.schoolclasses){
      if(schoolclass.id == id){
        return schoolclass;
      }
    }
    //@ts-ignore
    return undefined;
  }

  public getStringOfTimetable(event: string):void{
    // @ts-ignore
    this.httpClientService.getUnitsOfClass(event).subscribe((data:Unit[])=>{
      this.units = data;
        this.currentSchoolclass = this.getSchoolclassByID(event);
    })
  }

  public getUnit(i:number, j:number):Unit{
    //@ts-ignore
    let displayUnit: Unit;
    for(let unit of this.units){
      if(unit.unit == i && unit.day == j + 1){
        displayUnit = unit;
      }
    }
    // @ts-ignore
    if(displayUnit == undefined){
      // @ts-ignore
      displayUnit = new Unit(0, j + 1, i, "frei", 0, null, false);
      this.units.push(displayUnit);
    }
    return displayUnit;
  }

  public save():void{
    for(let unit of this.units){
      if(unit.hasChanged){
        if(unit.schoolclassID == null){
          unit.schoolclassID = this.currentSchoolclass != null ? this.currentSchoolclass.id : this.schoolclasses[0].id;
        }
        // @ts-ignore
        this.httpClientService.saveUnit(unit).subscribe();
      }
    }
    this.ws.send("something has changed");
  }

  wsDoConnect(): void{
    this.ws = new WebSocket(this.wsUri);
    this.ws.onopen = (evt) => {
      console.log('Websocket connected');
    };

    this.ws.onmessage = (evt) => {
        this.getAll();
    };

    this.ws.onerror = (evt) => {
      console.error('Websocket error');
    };

    this.ws.onclose = (evt) => console.log('Websocket closed');
  }
}
