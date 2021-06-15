import { RequestHandler, Router } from "express";
import { ITeacher } from "../entity/ITeacher";
import {Repository} from "../repository/repository";
import {Websocket} from "../ws/websocket";

export class Controller {
    static handler(): RequestHandler {
        Websocket.getInstance();
        const repo = new Repository();
        let router: Router = Router();

        router.get('/message', (req: any, res: { send: (arg0: string) => void; }) => {
            res.send('REST Service - USERS')
        })

        router.get('/init', async function (req, res) {
            try {
                await repo.initDB();
                res.send("init ok")
            } catch (error) {
                console.log("initDB error");
                res.send("init error");
            }
        })

        router.get('/teacher/findAll', async (req, res) => {
            try {
                let data = await repo.findAllTeachers();
                res.send(data)
            } catch (error) {
                console.log("findAllTeachers error");
                res.send("findAllTeachers error");
            }
        })

        router.get('/class/findAll', async (req, res) => {
            try {
                let data = await repo.findAllSchoolclasses();
                res.send(data)
            } catch (error) {
                console.log("findAllSchoolclasses error");
                res.send("findAllSchoolclasses error");
            }
        })

        router.get('/unit/findbyclass/:className', async (req, res) => {
            try {
                let data = await repo.findByClass(req.params.className);
                res.send(data)
            } catch (error) {
                console.log("findByClass error");
                res.send("findByClass error");
            }
        })
        router.put('/unit/save', async(req,res)=>{
            try {
                console.log("bin im put")
                console.log(req.body)
                let data = await repo.saveUnit(req.body)
                res.send(data)
            } catch (error) {
                console.log("saving error");
                res.send("saving error");
            }
        })



        return router;
    }
}
