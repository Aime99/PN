var push= require('web-push')
let vapidKeys={
    publicKey: 'BFHSpH8xiBfJQyScs96Rqpd9V_vz_FWHCFYDb_BHEI5NUdJ-JG8NYdCRs4KzgPjvuWm68trYrkRerG_mzWtV1gE',      
    privateKey: 'nndwN_jxZk9I03yVwFEi7RXQFinsOJVhRlYsikEd7oA'
  }

  push.setVapidDetails('mailto:aimegupta@gmail.com',vapidKeys.publicKey,vapidKeys.privateKey)
  let sub={};
  push.sendNotification(sub,'test message')
