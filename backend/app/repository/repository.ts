import * as mariadb from 'mariadb';
import { ITeacher } from '../entity/ITeacher';
import { ISchoolclass } from '../entity/ISchoolclass';
import { IUnit } from '../entity/IUnit';
import {Websocket} from "../ws/websocket";

export class Repository {
    public pool: mariadb.Pool = mariadb.createPool({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'school',
        connectionLimit: 5
    })

    public async initDB(): Promise<void> {
        try {

            await this.pool.query("DELETE FROM unit");
            await this.pool.query("DELETE FROM schoolclass");
            await this.pool.query("DELETE FROM teacher");

            await this.pool.query("INSERT INTO teacher VALUES (?,?,?,?)",[1, "Gerald", "Aistleitner", "U12"]);
            await this.pool.query("INSERT INTO teacher VALUES (?,?,?,?)",[2, "Herbert", "Lackinger", "221"]);
            await this.pool.query("INSERT INTO teacher VALUES (?,?,?,?)",[3, "Johannes", "Tumfahrt", "E42"]);

            await this.pool.query("INSERT INTO schoolclass VALUES (?,?)", ["5BHITM", "135"]);
            await this.pool.query("INSERT INTO schoolclass VALUES (?,?)", ["4BHITM", "136"]);
            await this.pool.query("INSERT INTO schoolclass VALUES (?,?)", ["3BHITM", "137"]);

            await this.pool.query("INSERT INTO unit VALUES (?,?,?,?,?,?)", [null, 1, 1, "SEW", 1, "3BHITM"]);
            await this.pool.query("INSERT INTO unit VALUES (?,?,?,?,?,?)", [null, 1, 2, "SEW", 2, "4BHITM"]);
            await this.pool.query("INSERT INTO unit VALUES (?,?,?,?,?,?)", [null, 1, 3, "INSY", 3, "5BHITM"]);

        } catch (ex) {
            console.log(ex);
        }
    }

    public async findAllTeachers(): Promise<Array<ITeacher>> {
        try {
            return await this.pool.query("SELECT id, firstname, lastname, room FROM teacher")
        } catch (ex) {
            return [];
        }
    }

    public async findAllSchoolclasses(): Promise<Array<ISchoolclass>> {
        try {
            return await this.pool.query("SELECT * FROM schoolclass")
        } catch (ex) {
            return [];
        }
    }

    public async findByClass(className: string): Promise<Array<IUnit>> {
        try {
            return await this.pool.query("SELECT * FROM unit WHERE unit.schoolclassID = ?", [className])
        } catch (ex) {
            return [];
        }
    }

   public async saveUnit(unitForDatabase: IUnit) {
        try {
            if (unitForDatabase.id == 0) {
                await this.pool.query("INSERT INTO unit VALUES (?,?,?,?,?,?)",
                    [0,unitForDatabase.day, unitForDatabase.unit, unitForDatabase.subject, unitForDatabase.teacherID, unitForDatabase.schoolclassID]);
            }
            else{
                await this.pool.query("update unit set subject=?, teacherID=? where id=?",
                    [unitForDatabase.subject, unitForDatabase.teacherID, unitForDatabase.id]);
            }
        } catch (ex) {
        }
    }
}
