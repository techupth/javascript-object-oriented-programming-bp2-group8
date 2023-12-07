class EmailNotification {
  constructor(notificationId, createdTime, content, email) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.email = email;
  }

  send() {
    console.log(`Notification has been sent to ${this.email}`);
  }
}

class SMSNotification {
  constructor(notificationId, createdTime, content, phone) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.phone = phone;
  }

  send() {
    console.log(`Notification has been sent to ${this.phone}`);
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
