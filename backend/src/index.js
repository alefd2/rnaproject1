const express = require('express');

const app = express();

// medde
app.use(express.json)



app.get("/", (request, response) => {
    return response.json({})
})




//porta do serviço
app.listen(3032);