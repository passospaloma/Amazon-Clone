const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Hcd3KCn4UipUuD3hA4CsH9owkmlRe9JRQ5ddnAHmdBXcGaJneHx2pSMy1rbgx63cozJ2Ycfk09OLW4Y1u5czVIm00cd9U3O4o"
);

//API
//app config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//Api routes
app.get("/", (request, response) => response.status(200).send("hello world "));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunit of the currency
    currency: "usd",
  });

  //ok - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);
