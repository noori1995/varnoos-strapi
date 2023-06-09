const crypto = require("crypto");

module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.example.com"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
        secure: true,
      },
      settings: {
        defaultFrom: "mohamad10.noori@gmail.com",
        defaultReplyTo: "mohamad10.noori@gmail.com",
      },
    },
  },
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET") || crypto.randomBytes(16).toString("base64"),
    },
  },
});

