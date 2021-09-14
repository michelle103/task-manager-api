const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
})

const sendWelcomeEmail = (email, name) => {
  const mailOptions = {
    from: 'mischi103@outlook.com',
    to: email,
    subject: 'Thanks for joining in!',
    text: `Welcome, ${name}! Let me know how you get along with the app.`,
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(`Error: ${err}`)
    }
    console.log(`Sent: ${info.response}`)
  })
}

const sendCancelationEmail = (email, name) => {
  const mailOptions = {
    from: 'mischi103@outlook.com',
    to: email,
    subject: "We're sad to see you go!",
    text: `Goodbye, ${name}! Is there anything we could have done to have kept you on board?`,
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(`Error: ${err}`)
    }
    console.log(`Sent successfully: ${info.response}`)
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
}
