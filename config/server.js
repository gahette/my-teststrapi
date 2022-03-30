module.exports = ({ env }) => ({
  host: env('https://my-teststrapi.herokuapp.com/'),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});
});
