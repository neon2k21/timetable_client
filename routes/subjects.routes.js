const Router = require('express')
const router = new Router()
const subjectsController = require('../controller/subjects.controller')



//post
router.post('/createUser', subjectsController.createUser)
router.post('/getUser', subjectsController.getUser)
router.post('/getUserData',subjectsController.getUserData)
router.post('/getTotalUserPoints', subjectsController.getTotalUserPoints)
router.post('/getAllStatisticsForUserByTracks', subjectsController.getAllStatisticsForUserByTracks)
router.post('/getAllStatisticsForUser', subjectsController.getAllStatisticsForUser)
router.post('/getAllUsersDataByGrp', subjectsController.getAllUsersDataByGrp)
router.get('/getAllUsersData', subjectsController.getAllUsersData)
//put
router.put('/setUserToken',subjectsController.setUserToken)
router.put('/setUserGrp', subjectsController.setUserGrp)
router.put('/setUserAvatar', subjectsController.setUserAvatar)
router.put('/setIndividualUserCompleteTasks', subjectsController.setIndividualUserCompleteTasks)
router.put('/setGroupUserCompleteTasks', subjectsController.setGroupUserCompleteTasks)
router.put('/setUserIndividualPoints', subjectsController.setUserIndividualPoints)
router.put('/setUserGroupPoints', subjectsController.setUserGroupPoints)

//delete
router.delete('/deleteUser',subjectsController.deleteUser)


module.exports = router