const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3000;


// Middleware to parse JSON bodies
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.SHEET}?row=1&col=1`
      };
      
      axios.request(config)
      .then((response) => {
       res.send(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  
});


app.get('/update/:row/:col/:txt', (req, res) => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.SHEET}`,
        data: {
            row: req.params.row,
            col: req.params.col,
            txt: req.params.txt
        }
      };
      
      axios.request(config)
      .then((response) => {
       res.send(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
