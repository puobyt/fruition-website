import express from "express";
import { sendMail } from "../utils/mailer.js";
import { validate } from "../middleware/validate.js";

const router = express.Router();

router.post(
  "/",
  validate({
    name: { required: true, min: 2, max: 100 },
    email: { required: true, email: true },
    message: { required: true, min: 10, max: 2000 },
    company: { required: false, max: 150 },
    phone: { required: false, max: 50 },
  }),
  async (req, res) => {
    const { name, email, message, company, phone } = req.body;

    try {
      // Send email
      const sent = await sendMail({
        to: "fruitionerpapp@gmail.com", // your inbox
        subject: `New Contact from ${name}`,
        text: `Message from: ${name}\nEmail: ${email}\nCompany: ${
          company || "N/A"
        }\nPhone: ${phone || "N/A"}\n\n${message}`,
        html: `<h3>Contact Form Submission</h3>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Company:</strong> ${company || "N/A"}</p>
             <p><strong>Phone:</strong> ${phone || "N/A"}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
      });

      if (sent) {
        res
          .status(200)
          .json({ success: true, message: `Thanks, ${name}. We'll be in touch!` });
      } else {
        res
          .status(500)
          .json({ success: false, message: "Failed to send email" });
      }
    } catch (err) {
      console.error("Error in contact route:", err);
      res
        .status(500)
        .json({ success: false, message: "Something went wrong on our end." });
    }
  }
);

export default router;
