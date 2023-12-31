import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
dotenv.config()

const MongoClient = mongodb.MongoClient
const port = process.env.PORT || 8000

MongoClient.connect(
  process.env.MONGO_DB_URL,
  {
    wtimeout: 2500,
  }
)
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
  .then(async client => {
    app.listen(port, ()=> {
      console.log(`Port is listening ${port}`)
    })
  })
