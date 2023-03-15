module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: "nodemailer",
        providerOptions: {
          host: env('SMTP_HOST'),
          port: env('SMTP_PORT'),
          auth: {
            user: env('SMTP_USERNAME'),
            pass: env('SMTP_PASSWORD'),
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: 'allexamss24@gmail.com',
          defaultReplyTo: 'allexamss24@gmail.com',
        },
      },
    },
  
    // ...
  });
  