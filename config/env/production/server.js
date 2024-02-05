module.exports = ({ env }) => ({
    url: env("RENDER_EXTERNAL_URL"),
    dirs: {
      filename: env('DATABASE_FILENAME', env(__dirname, '..', '.tmp/data.db')),
    },
  });