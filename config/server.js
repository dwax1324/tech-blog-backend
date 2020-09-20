module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'cff66e22169a044099ad4f63a355b5fb'),
    },
  },
});

const http = require("http");
setInterval(function() {
    http.get("http://frozen-lake-89335.herokuapp.com");
}, 600000); // every 5 minutes (300000)