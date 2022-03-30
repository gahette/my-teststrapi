module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dc35de74925065643cc50967338e0ece'),
  },
});
