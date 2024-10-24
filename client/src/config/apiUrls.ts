export const gateway = process.env.API_GATEWAY_URL;
export const authSlug = "/user/auth";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  gateway,
  user: {
    auth: {
      login: `${authSlug}/login`,
      logout: `${authSlug}/logout`,
    },
  },
};
