const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/careers", upload.single('resume'), async (req, res) => {
    const { role, domain, fullName, email, phoneNumber, location, linkedin, github, coverLetter } = req.body;
    const resumeFile = req.file;

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'austin16@ethereal.email',
                pass: 'uSfr98eyRRFSJ1vWkw'
            }
        });
        const mailOptions = {
            from: `${fullName} <${email}>`,
            to: "kiel.rodriguez@ethereal.email",
            subject: `Career Application for ${role}`,
            text: `Application from ${fullName}, email: ${email}`,
            html: `
                <p><b>Role:</b> ${role}</p>
                <p><b>Domain:</b> ${domain}</p>
                <p><b>Phone Number:</b> ${phoneNumber}</p>
                <p><b>Location:</b> ${location}</p>
                <p><b>LinkedIn:</b> ${linkedin}</p>
                <p><b>GitHub:</b> ${github}</p>
                <p><b>Cover Letter:</b> ${coverLetter}</p>
            `,
            attachments: [
                {
                    filename: resumeFile.originalname,
                    content: resumeFile.buffer
                }
            ]
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Application submitted successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
});

module.exports = router;
