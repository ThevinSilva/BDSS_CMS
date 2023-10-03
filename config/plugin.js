module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
    },
    config: {
        deployHook: "https://api.vercel.com/v1/integrations/deploy/prj_<deploy-hook>",
        apiToken: "<vercel-api-token>",
    }
  });