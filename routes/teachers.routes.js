const Router = require('express')
const router = new Router()
const teacherController = require('../controller/teacher.controller')



//post
router.post('/createUser', teacherController.createUser)
router.post('/getUser', teacherController.getUser)
router.post('/getUserData',teacherController.getUserData)
router.post('/getTotalUserPoints', teacherController.getTotalUserPoints)
router.post('/getAllStatisticsForUserByTracks', teacherController.getAllStatisticsForUserByTracks)
router.post('/getAllStatisticsForUser', teacherController.getAllStatisticsForUser)
router.post('/getAllUsersDataByGrp', teacherController.getAllUsersDataByGrp)
router.get('/getAllUsersData', teacherController.getAllUsersData)
//put
router.put('/setUserToken',teacherController.setUserToken)
router.put('/setUserGrp', teacherController.setUserGrp)
router.put('/setUserAvatar', teacherController.setUserAvatar)
router.put('/setIndividualUserCompleteTasks', teacherController.setIndividualUserCompleteTasks)
router.put('/setGroupUserCompleteTasks', teacherController.setGroupUserCompleteTasks)
router.put('/setUserIndividualPoints', teacherController.setUserIndividualPoints)
router.put('/setUserGroupPoints', teacherController.setUserGroupPoints)

//delete
router.delete('/deleteUser',teacherController.deleteUser)


module.exports = router