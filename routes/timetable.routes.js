const Router = require('express')
const router = new Router()
const timetableController = require('../controller/timetable.controller')



//post
router.post('/createTimetable', timetableController.createTimetable)
router.post('/getTimetable', timetableController.getTimetable)
//put
router.put('/updateTimetable',timetableController.updateTimetable)
//delete
router.delete('/deleteTimetable',timetableController.deleteTimetable)


module.exports = router