const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')



//post
router.post('/createUser', userController.createUser)
router.post('/getUser', userController.getUser)
router.post('/getUserData',userController.getUserData)
router.post('/getTotalUserPoints', userController.getTotalUserPoints)
router.post('/getAllStatisticsForUserByTracks', userController.getAllStatisticsForUserByTracks)
router.post('/getAllStatisticsForUser', userController.getAllStatisticsForUser)
router.post('/getAllUsersDataByGrp', userController.getAllUsersDataByGrp)
router.get('/getAllUsersData', userController.getAllUsersData)
//put
router.put('/setUserToken',userController.setUserToken)
router.put('/setUserGrp', userController.setUserGrp)
router.put('/setUserAvatar', userController.setUserAvatar)
router.put('/setIndividualUserCompleteTasks', userController.setIndividualUserCompleteTasks)
router.put('/setGroupUserCompleteTasks', userController.setGroupUserCompleteTasks)
router.put('/setUserIndividualPoints', userController.setUserIndividualPoints)
router.put('/setUserGroupPoints', userController.setUserGroupPoints)

//delete
router.delete('/deleteUser',userController.deleteUser)


module.exports = router