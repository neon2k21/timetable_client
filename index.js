const express = require('express')
const studentRouter = require('./routes/students.routes')
const groupRouter = require('./routes/groups.routes')
const teacherRouter = require('./routes/teachers.routes')
const subjectRouter = require('./routes/subjects.routes')
const timetableRouter = require('./routes/timetable.routes')

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080

const app = express()

app.use(bodyParser.json({limit: '500mb'}))
app.use('/api',studentRouter)
app.use('/api',groupRouter)
app.use('/api',teacherRouter)
app.use('/api',subjectRouter)
app.use('/api',timetableRouter)


//var admin = require("firebase-admin");

//var serviceAccount = require("./vuzappcursovaya-firebase-adminsdk-e8ymi-e9acde380f.json");

//admin.initializeApp({credential: admin.credential.cert(serviceAccount)});



app.listen(PORT, () => console.log(`Сервер запущен с портом: ${PORT}`))


