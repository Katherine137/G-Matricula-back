import dotenv from "dotenv";
dotenv.config();
import app from "./server.js";
import connection from "./database.js";

const startServer = async () => {
  try {
    await connection()
    app.listen(app.get('port'), () => {
      console.log(`Server ok on port ${app.get('port')}`)
    })
  } catch (error) {
    console.log("Error starting server:", error)
  }
}

startServer()