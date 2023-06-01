const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const PORT = 4000;

// Swagger options
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Login API',
      version: '1.0.0',
      description: 'API for user login',
    },
  },
  apis: ['path/to/login.js'], // "/login" yo'lga tegishli faylning manzili
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// "/login" yo'ligi uchun GET so'rovini qabul qilish
app.get('/login', (req, res) => {
  // Do something
  res.send('Login endpoint');
});

// Serverni ishga tushirish
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

