module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5eacf6c51ee12436f69c986033f91cc2'),
  },
});
