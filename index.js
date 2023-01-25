import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());


const people = ['Danny', 'Joe']

app.get('/', (req,res) => {     // '/' refers to main page 
    const uri = ("/Users/andrewlinnell/boca-code/week3/express-again/hello.html")
    res.sendFile(uri)

})


app.get('/people', (req, res) => {
    res.send(people)
})


app.post('/newpeople', (req,res) => {
    const newPerson = req.body;
    console.log(newPerson);
})


app.listen(process.env.PORT, () => {
    console.log(`Listening on localhost port: ${process.env.PORT}`)
});