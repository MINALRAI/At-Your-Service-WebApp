const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51My4zFSJiKskmhCBTWYh3yLvOYYskKp6ocTM8NFGYrg78E5bwFOVQgjSfh588SrFtM37Ex2mtl0pjlisnW8WWCqI00zkh585zx')

//-API

//-App config
const app = express();

//-Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//ApI routes
app.get('/', (request, response) => response.status(200).send
('hello world'));
// app.get('/minal', (request, response) => response.status(200).send
// ('hello minal'))
app.post('/payment/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved :) for this amount>>>', total );

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_Secret,
    })
})

//-Listen command
exports.api = functions.https.onRequest(app)


//Example endpoint
//http://127.0.0.1:5001/at-your-service-eee7d/us-central1/api