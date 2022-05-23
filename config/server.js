module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "b670117dc9923e04de07782c2d3ae238"),
    },
  },
  vercel: {
    // Required
    token: env("VERCEL_TOKEN"),
    // Required
    projectId: env("VERCEL_PROJECT_ID"),
    // Optional (required if you use teams)
    teamId: env("VERCEL_TEAM_ID"),
    // Required (hooks)
    triggers: {
      production: env("VERCEL_TRIGGER_PRODUCTION"),
    },
    // Optional
    config: {
      // Number of latest deployments
      deployments: 10,
    },
  },
});
