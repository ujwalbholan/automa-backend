import nodemailer from "nodemailer";

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: "ujwalbholan@gmail.com",
        pass: "jn7jnAPss4f63QBp6D",
    },
});

// Wrap in an async IIFE so we can use await.
(async () => {
    const info = await transporter.sendMail({
        from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
        to: "bar@example.com, baz@example.com",
        subject: "Reset Password OTP",
        text: "Hello the opt which we have sent to you only last for 6 minute.", // plain‑text body
        html: "<b>Hello world?</b>", // HTML body
    });

    console.log("Message sent:", info.messageId);
})();

export { transporter }