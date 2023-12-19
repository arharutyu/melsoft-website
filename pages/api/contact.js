import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

const transporter = {
  auth: {
    api_key: process.env.NEXT_PUBLIC_SENDGRID_API_KEY,
  },
};

const mailer = nodemailer.createTransport(sgTransport(transporter));

export default async (req, res) => {
  'use server'
  
  const { name, email, number, subject, text } = req.body;

  const data = {
    to: "info@melsoft.com.au",
    from: "info@melsoft.com.au",
    subject: "Melsoft Equiry",
    text: text,
    html: `
        <b>From:</b> ${name} <br /> 
        <b>Number:</b> ${number} <br /> 
        <b>Email:</b> ${email} <br /> 
        <b>Subject:</b> ${subject} <br /> 
        <b>Message:</b> ${text} 
    `,
  };
  try {
    const response = await mailer.sendMail(data);
    console.log(response);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error proccessing charge");
  }
};
