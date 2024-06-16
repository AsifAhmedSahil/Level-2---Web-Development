import nodemailer from 'nodemailer';
import config from '../app/config';

export const sendEmail = async(to:string , html:string) =>{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: config.node_env === 'production', // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "asifahmedsahil.007@gmail.com",
          pass: "rnon ollb hqjz usre",
        },
      });

      await transporter.sendMail({
        from: 'asifahmedsahil.007@gmail.com', // sender address
        to, // list of receivers
        subject: "Please change your password", // Subject line
        text: "hello, change your password", // plain text body
        html, // html body
      });
}