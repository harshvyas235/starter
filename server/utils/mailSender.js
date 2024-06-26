const nodemailer= require("nodemailer")

const mailSender= async(email,title,body)=>{
    try{
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user: process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            }
        })

        let info = await transporter.sendMail({
            from:'studynotion || alphatech- by harsh vyas',
            to:`${email}`,
            subject: `${title}`,
            html: `${body}`,
        })
        console.log("mail send ho gya info dekho")
        console.log(info);
        return info;

    }
    catch(err){
        console.log("error in mail sending ")
        console.log(err.message);
    }
}
module.exports = mailSender;