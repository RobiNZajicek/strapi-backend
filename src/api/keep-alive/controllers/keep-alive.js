module.exports = {
  async ping(ctx) {
    ctx.body = {
      status: 'alive',
      timestamp: new Date().toISOString(),
      message: 'Strapi is running'
    };
  },
};
