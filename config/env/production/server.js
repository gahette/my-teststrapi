module.exports = ({ env }) => ({
  host: env('https://my-teststrapi.herokuapp.com/'),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["9774378880630cfa", "96774521510b1506"]),
  },
});

