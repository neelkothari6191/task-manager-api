const sgMail = require("@sendgrid/mail");



sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'neelkothari6191@gmail.com',
        subject:'Thanks for joining in',
        text:`Welcome to the app,${name}.Let me know how you get along with the app`
        
    })
}

const sendCancelationEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'neelkothari6191@gmail.com',
        subject:'Sorry to see you leave',
        text:`Goodbye ${name},I hope to see you back sometime soon`
    })

}

// sgMail.send({
//   to: "neelkothari6191@gmail.com",
//   from: "neelkothari6191@gmail.com",
//   subject: "This is my creation",
//   text: "I hope this one actually gets to you",
// });

module.exports={
    sendWelcomeEmail,
    sendCancelationEmail
}
