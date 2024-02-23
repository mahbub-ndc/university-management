import mongoose from "mongoose";
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import config from './index'
import userInfo from '../src/app/modules/users.service'
import usersRouter from '../src/app/modules/users.route'
import { logger, errorlogger } from "./shared/logger";

const app: Application = express()

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1/users/', usersRouter )

async function main() {
    try {
        await mongoose.connect(config.database_url as string);
        logger.info(`database is connected successfully`)
    } catch (error) {
        errorlogger.error(error)
    }

    app.get('/', async (req: Request, res: Response) => {
        
        res.send('University management server is running')
    })

    app.listen(config.port, () => {
        logger.info(`Application is listening on port ${config.port}`)
    })

}
main();