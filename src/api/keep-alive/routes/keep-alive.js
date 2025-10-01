module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/keep-alive',
      handler: 'keep-alive.ping',
      config: {
        auth: false,
      },
    },
  ],
};
