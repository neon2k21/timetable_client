const Router = require('express')
const router = new Router()
const studentsController = require('../controller/students.controller')



//post
router.post('/createUser', studentsController.createUser)
router.post('/getUser', studentsController.getUser)
router.post('/getUserData',studentsController.getUserData)
router.post('/getTotalUserPoints', studentsController.getTotalUserPoints)
router.post('/getAllStatisticsForUserByTracks', studentsController.getAllStatisticsForUserByTracks)
router.post('/getAllStatisticsForUser', studentsController.getAllStatisticsForUser)
router.post('/getAllUsersDataByGrp', studentsController.getAllUsersDataByGrp)
router.get('/getAllUsersData', studentsController.getAllUsersData)
//put
router.put('/setUserToken',studentsController.setUserToken)
router.put('/setUserGrp', studentsController.setUserGrp)
router.put('/setUserAvatar', studentsController.setUserAvatar)
router.put('/setIndividualUserCompleteTasks', studentsController.setIndividualUserCompleteTasks)
router.put('/setGroupUserCompleteTasks', studentsController.setGroupUserCompleteTasks)
router.put('/setUserIndividualPoints', studentsController.setUserIndividualPoints)
router.put('/setUserGroupPoints', studentsController.setUserGroupPoints)

//delete
router.delete('/deleteUser',studentsController.deleteUser)


module.exports = router