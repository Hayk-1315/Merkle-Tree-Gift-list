const express = require('express');
const verifyProof = require('../utils/verifyProof');
const port = 1225;
const app = express();
app.use(express.json());

 
const MERKLE_ROOT = "54f906b71768597e70fa05859d9e0659be84255784e087c1ab1fd9492b9d6636";

app.post('/gift', (req, res) => {
  const body = req.body;
  const { name, proof } = body;

  const isInTheList = verifyProof(proof, name, MERKLE_ROOT);
  if(isInTheList) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :(");
  }
  console.log(isInTheList); 
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
