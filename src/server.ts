import express from "express"
import { Request, Response } from "express"
import {Server} from "http";
import {initializeDB} from "./database";
import { Event } from "./entity/Event";

const sleep = (ms: number): Promise<void> => new Promise((res) => setTimeout(res, ms))

export const start = async (): Promise<Server> => new Promise(async (resolve, reject) => {
    try {
        const port = 4040
        const app = express()
        const db = await initializeDB()
        if( !db) {
            reject("Database not connected")
        }
        app.get('/events', async (req:Request, res:Response) => {
            const events = await db?.getRepository(Event).find({
                relations: {
                    location: true,
                    organizer: true
                }
            })
            res.json({ results: events })
        })
        app.get('/events/:eventId', async (req:Request, res:Response) => {
            const event = await db?.getRepository(Event).findOne({
                where : {
                    id: parseInt(req.params.eventId),
                },
                relations: {
                    location: true,
                    organizer: true
                }
            })

            res.json(event)
        })

        const server = app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
            resolve(server)
        })
    } catch (err) {
        reject(err)
    }
})
