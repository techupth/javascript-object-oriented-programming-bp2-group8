class Notification {
    constructor (notificationID,createdTime,content){
        this.notificationID = notificationID;
        this.createdTime = createdTime;
        this.content = content;
    }
    send(receiver){
        console.log(`Notification has been sent to ${receiver}`);
    }
};

class EmailNotification extends Notification{
    constructor(notificationID,createdTime,content,receiver){
        super (notificationID,createdTime,content)
        this.receiver = receiver;
    }
    
};

class SMSNotification extends Notification{
    constructor (notificationID,createdTime,content,phoneNumber){
        super (notificationID,createdTime,content);
        this.phoneNumber = phoneNumber;
    }
    
};
 
const testInheritance = new Notification("1","12:00","lorems");
const testEmailNotification = new EmailNotification("1","12:00","lorems","test@email.com");
const testSMSNotification = new SMSNotification("1","12:00","Lorem","0987654321");
testEmailNotification.send(testEmailNotification.receiver);
testSMSNotification.send(testSMSNotification.phoneNumber)
