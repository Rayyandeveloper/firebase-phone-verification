import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "./firebase.js";

let confirmationResult;

const phoneInput = document.getElementById("phone");
const otpInput = document.getElementById("otp");
const sendBtn = document.getElementById("sendBtn");
const verifyBtn = document.getElementById("verifyBtn");

Swal.fire({
  text: `Enter Phone number : +92 300 1234567 `,
  icon: 'info', 
  confirmButtonText: 'OK'
});

window.recaptchaVerifier = new RecaptchaVerifier(
  "recaptcha-container",
  {
    size: "normal",
    callback: () => console.log("reCAPTCHA solved")
  },
  auth
);

sendBtn.addEventListener("click", () => {
  const phone = phoneInput.value;

  signInWithPhoneNumber(auth, phone, window.recaptchaVerifier)
    .then(result => {
      confirmationResult = result;
      alert("OTP Sent");
      Swal.fire({
  text: `Enter Verification code : 112233`,
  icon: 'info', 
  confirmButtonText: 'OK'

  
});
document.getElementById("recaptcha-container").style.display = "none";
    })
    .catch(err => alert(err.message));
});

verifyBtn.addEventListener("click", () => {
  const code = otpInput.value;
  
  confirmationResult.confirm(code)
    .then(() => Swal.fire({text : "Login Successful", icon: 'success'}))
    .catch(() => alert("Invalid OTP"));
    phoneInput.value = "";
    otpInput.value = "";
});

