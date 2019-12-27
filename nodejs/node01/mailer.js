"use strict";
const nodemailer = require("nodemailer");

//创建发送邮箱的对象
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",   //发送方邮箱 qq,在 node_modules/lib/well-known/servies.json可以查询
    port: 465, //端口号
    secure: true, // true for 465, false for other ports
    auth: {
      user: '2836608480@qq.com',  //发送方的邮箱地址
      pass: testAccount.pass  //在设置中找
    }
  });

  //邮件信息
  let mailobj={
    from: '"Fred Foo 👻" <2836608480@qq.com>', // sender address
    to: "940926162@qq.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  }
  // send mail with defined transport object
transporter.sendMail(mailobj,(err,data)=>{
    console.log(err)
    console.log(data)
});


main().catch(console.error);