const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to : email,
        from : 'e.arkorful3@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendDeleteEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'e.arkorful3@gmail.com',
        subject: 'Goodbye bitch',
        text: `${name}. You dey delete your account. Be there!`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendDeleteEmail
}