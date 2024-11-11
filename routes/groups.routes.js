const Router = require('express')
const router = new Router()
const groupController = require('../controller/group.controller')



//post
router.post('/createUser', groupController.createUser)
router.post('/getUser', groupController.getUser)
router.post('/getUserData',groupController.getUserData)
router.post('/getTotalUserPoints', groupController.getTotalUserPoints)
router.post('/getAllStatisticsForUserByTracks', groupController.getAllStatisticsForUserByTracks)
router.post('/getAllStatisticsForUser', groupController.getAllStatisticsForUser)
router.post('/getAllUsersDataByGrp', groupController.getAllUsersDataByGrp)
router.get('/getAllUsersData', groupController.getAllUsersData)
//put
router.put('/setUserToken',groupController.setUserToken)
router.put('/setUserGrp', groupController.setUserGrp)
router.put('/setUserAvatar', groupController.setUserAvatar)
router.put('/setIndividualUserCompleteTasks', groupController.setIndividualUserCompleteTasks)
router.put('/setGroupUserCompleteTasks', groupController.setGroupUserCompleteTasks)
router.put('/setUserIndividualPoints', groupController.setUserIndividualPoints)
router.put('/setUserGroupPoints', groupController.setUserGroupPoints)

//delete
router.delete('/deleteUser',groupController.deleteUser)


module.exports = router