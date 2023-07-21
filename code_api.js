const nodemailer = require("nodemailer");
const crypto = require("crypto");

// Créer un transporteur SMTP pour l'envoi d'e-mails
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "yourbendo@gmail.com",
    pass: "@Joylife2021",
  },
});

//https://healthysoutenance.000webhostapp.com/

// Générer un code de confirmation aléatoire
const generateConfirmationCode = () => {
  return crypto.randomBytes(4).toString("hex").toUpperCase();
};

// Fonction pour envoyer un e-mail de confirmation
const sendConfirmationEmail = (email) => {
  const confirmationCode = generateConfirmationCode();
  const mailOptions = {
    from: "HEALTHY APPLICATION",
    to: email,
    subject: "Code de confirmation",
    text: `Votre code de confirmation est : ${confirmationCode}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("E-mail de confirmation envoyé : " + info.response);
    }
  });

  return confirmationCode;
};

// Exemple d'utilisation
/* const email = "exemple@gmail.com";
const confirmationCode = sendConfirmationEmail(email);
console.log(`Le code de confirmation ${confirmationCode} a été envoyé à ${email}.`);
 */