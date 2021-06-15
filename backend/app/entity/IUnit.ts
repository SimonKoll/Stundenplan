import { ISchoolclass } from "./ISchoolclass";
import { ITeacher } from "./ITeacher";

export interface IUnit {
    id: number;
    day: number;
    unit: number;
    subject: string;
    teacherID: number;
    schoolclassID: string;
}
