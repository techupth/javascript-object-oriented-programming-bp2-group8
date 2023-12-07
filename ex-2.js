class Notification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }

  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class EmailNotification extends Notification {
  constructor(notificationId, createdTime, content, email) {
    super(notificationId, createdTime, content, email);
    this.email = email;
  }
}

class SMSNotification extends Notification {
  constructor(notificationId, createdTime, content, phone) {
    super(notificationId, createdTime, content, phone);
    this.phone = phone;
  }
}

const smsNotification = new SMSNotification(
  "001",
  new Date(),
  "This is sms noti message",
  "0923232332"
);

const emailNotification = new EmailNotification(
  "001",
  new Date(),
  "This is email noti message.",
  "knot@gmail.com"
);

smsNotification.send();
emailNotification.send();
