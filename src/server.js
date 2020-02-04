import dotenv from 'dotenv';
dotenv.config();
import app from "./app";


console.log('server listening on port: ', process.env.PORT)
app.listen(process.env.PORT);
