module.exports = ({ env }) => ({
  url: env("RENDER_EXTERNAL_URL"),
  dirs: {
    public: "public"
  },
  app: {
    keys: env.array('APP_KEYS'),
  },
});