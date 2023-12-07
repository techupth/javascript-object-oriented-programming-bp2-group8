import fs from "fs/promises";
import { jest } from "@jest/globals";
describe("exercise 2: OOP tests cases", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test("เมื่อ Execute ตัว Method send จาก EmailNotification Object และ SMSNotification Object จะแสดงผลลัพธ์ตามที่โจทย์กำหนด", async () => {
    const data = await fs.readFile("./ex-2.js");
    const code = `${data} 
    const smsNotificationTest = new SMSNotification(
      "001",
      new Date(),
      "This is sms noti message",
      "0923232332"
    );
    
    const emailNotificationTest = new EmailNotification(
      "001",
      new Date(),
      "This is email noti message.",
      "knot@gmail.com"
    ); 
    
    return { smsNotificationTest, emailNotificationTest }`;

    const func = new Function(code);
    const { smsNotificationTest, emailNotificationTest } = func();
    expect(console.log.mock.calls[0][0] && console.log.mock.calls[1][0]).toMatch(/Notification has been sent to/);
    expect(typeof smsNotificationTest.send).toBe("function");
    expect(typeof emailNotificationTest.send).toBe("function");

  });
});
