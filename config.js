const config = {
  port: process.env.PORT || 5000,
  jwt_secret_key: "ngocanh",
  jwt_expire_access_token: 10, // 10 second
  jwt_expire_refresh_token: "1h", // 1 hour
  initialDatabase: {
    access_tokens: [],
    refresh_tokens: [],
    users: {
      email: "admin999@gmail.com",
      password: "admin999",
    },

    products: [
      {
        id: 1,
        name: "Iphone",
      },
      {
        id: 2,
        name: "Samsung",
      },
    ],
  },
};
export default config;
