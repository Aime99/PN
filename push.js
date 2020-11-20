var push= require('web-push')
let vapidKeys={
    publicKey: 'BFHSpH8xiBfJQyScs96Rqpd9V_vz_FWHCFYDb_BHEI5NUdJ-JG8NYdCRs4KzgPjvuWm68trYrkRerG_mzWtV1gE',      
    privateKey: 'nndwN_jxZk9I03yVwFEi7RXQFinsOJVhRlYsikEd7oA'
  }

  push.setVapidDetails('mailto:aimegupta@gmail.com',vapidKeys.publicKey,vapidKeys.privateKey)
  let sub={"endpoint":"https://fcm.googleapis.com/fcm/send/d1YjLdJDphI:APA91bHkVt2j7Z7a7sMbZKB_on1bCiKxjhnEKU0xB9NpFzWzVolxLssJRoBvVyOMt5d6S--ERrWmerEkRP11xnNIzdkQpQEPobIFj9doEnWISA071N7TBQXvVGp1WPZzr1GiNX4GEDW4","expirationTime":null,"keys":{"p256dh":"BDhhqUonK-RM1Gxx33vB3yHeb_g2hoqRIBy1gF3kff0j2sjBodPezesAVQ7ImpaFp3mETdgQ7ZWsRCxARW0Jg6g","auth":"fYOn7GJKzH1nBxV_JnpJkw"}};
  push.sendNotification(sub,'test message')
