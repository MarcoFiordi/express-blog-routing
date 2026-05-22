import express from 'express';

const app = express();
const port = process.env.SERVER_PORT;



app.listen(port, (error)=> {
    if (error){
        console.error('errore del server');
        
    } else {
        console.log('server in ascolto sulla porta 3000');
        
    }
})