import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './db/index.js'

const app = express();

app.use(cors({
    origin: 'process.env.CORS_ORIGIN',
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// routes import
import userRouter from './routes/user.route.js'

// routes declaration
const initiateServer = async () => {
    try{
    const db= await connectDB();
    console.log("MongoDB connected"); 
    app.use("/api/v1/users", userRouter) // routes => http://localhost:8080/api/v1/users

    } catch(err){
        console.log('Error connecting to database', err);
    }
}

initiateServer()


export { app }