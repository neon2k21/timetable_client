const Router = require('express')
const router = new Router()
const timetableController = require('../controller/timetable.controller')



//post
router.post('/createUser', timetableController.createUser)
router.post('/getUser', timetableController.getUser)
router.post('/getUserData',timetableController.getUserData)
router.post('/getTotalUserPoints', timetableController.getTotalUserPoints)
router.post('/getAllStatisticsForUserByTracks', timetableController.getAllStatisticsForUserByTracks)
router.post('/getAllStatisticsForUser', timetableController.getAllStatisticsForUser)
router.post('/getAllUsersDataByGrp', timetableController.getAllUsersDataByGrp)
router.get('/getAllUsersData', timetableController.getAllUsersData)
//put
router.put('/setUserToken',timetableController.setUserToken)
router.put('/setUserGrp', timetableController.setUserGrp)
router.put('/setUserAvatar', timetableController.setUserAvatar)
router.put('/setIndividualUserCompleteTasks', timetableController.setIndividualUserCompleteTasks)
router.put('/setGroupUserCompleteTasks', timetableController.setGroupUserCompleteTasks)
router.put('/setUserIndividualPoints', timetableController.setUserIndividualPoints)
router.put('/setUserGroupPoints', timetableController.setUserGroupPoints)

//delete
router.delete('/deleteUser',timetableController.deleteUser)


module.exports = router