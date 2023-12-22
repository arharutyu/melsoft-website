import axios from "axios";

export default async function handler(req, res) {
  const { recaptchaResponse } = req.body;

  // Verify reCAPTCHA response
  const recaptchaSecretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;
  const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${recaptchaResponse}`;

  try {
    const verificationResult = await axios.post(verificationURL);
    const { success } = verificationResult.data;

    if (success) {
      // reCAPTCHA verification successful, process the form data
      res.status(200).json({ success: true });
    } else {
      // reCAPTCHA verification failed
      res.status(400).json({ success: false, error: "reCAPTCHA verification failed" });
    }
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}