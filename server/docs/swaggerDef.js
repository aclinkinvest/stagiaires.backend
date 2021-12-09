const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'stagiaires-tg API documentation',
    version : '1.0.0',
    license: {
      name: 'MIT',
      url: 'https://github.com/khafrica/api.backend.git',
    },
  },
  servers: [
    {
      url: `http://localhost:5000`,
    },
  ],
};

export default swaggerDef;
