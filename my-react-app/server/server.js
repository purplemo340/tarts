import express from "express";
import "dotenv/config";
import {
  ApiError,
  CheckoutPaymentIntent,
  Client,
  Environment,
  LogLevel,
  OrdersController,
} from "@paypal/paypal-server-sdk";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());

const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PORT = 8080 } = process.env;
////////////my code/////////////
let y=[];
import { MongoClient, ServerApiVersion  } from "mongodb";
const mongo_pass = process.env.mongo_pass
let url = `mongodb+srv://admin:${mongo_pass}@cluster0.l57al2s.mongodb.net/?appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client1= new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
      }
});
///////////////////////
const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: PAYPAL_CLIENT_ID,
    oAuthClientSecret: PAYPAL_CLIENT_SECRET,
  },
  timeout: 0,
  environment: Environment.Sandbox,
  logging: {
    logLevel: LogLevel.Info,
    logRequest: {
      logBody: true,
    },
    logResponse: {
      logHeaders: true,
    },
  },
});

const ordersController = new OrdersController(client);

/**
 * Create an order to start the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_create
 */
const createOrder = async (cart) => {
  const collect = {
    body: {
      intent: CheckoutPaymentIntent.Capture,
       purchaseUnits: cart
    },
    prefer: "return=minimal",
  };
  try {
    const { body, ...httpResponse } = await ordersController.createOrder(
      collect
    );
    // Get more response info...
    // const { statusCode, headers } = httpResponse;
    return {
      jsonResponse: JSON.parse(body),
      httpStatusCode: httpResponse.statusCode,
    };
  } catch (error) {
    if (error instanceof ApiError) {
      // const { statusCode, headers } = error;
      throw new Error(error.message);
    }
  }
  
};

/**
 * Capture payment for the created order to complete the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_capture
 */
const captureOrder = async (orderID) => {
  const collect = {
    id: orderID,
    prefer: "return=minimal",
  };

  try {
    const { body, ...httpResponse } = await ordersController.captureOrder(
      collect
    );
    // Get more response info...
    // const { statusCode, headers } = httpResponse;
    return {
      jsonResponse: JSON.parse(body),
      httpStatusCode: httpResponse.statusCode,
    };
  } catch (error) {
    if (error instanceof ApiError) {
      // const { statusCode, headers } = error;
      throw new Error(error.message);
    }
  }
};

app.post("/api/orders", async (req, res) => {
  try {
    // use the cart information passed from the front-end to calculate the order amount details
   
    const { cart, customer } = req.body;
    console.log(customer)
    const { jsonResponse, httpStatusCode } = await createOrder(cart);
    res.status(httpStatusCode).json(jsonResponse);
    
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to create order." });
  }
});

app.post("/api/orders/:orderID/capture", async (req, res) => {
  try {
    const { orderID } = req.params;
    const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to capture order." });
  }
});

app.post("/api/test", async (req, res) => {

  try {
    y.push(req.body.firstName);
    console.log(req.body.firstName, ' ', req.body.lastName, ' ', req.body.date);
    await client1.connect();
    // Send a ping to confirm a successful connection
    let myobj = { firstName: req.body.firstName, lastName: req.body.lastName, address: req.body.address };
    await client1.db("orders").collection('tarts').insertOne(myobj);
    console.log("Added 1 document");
   
  } catch (error) {
    console.log('error')
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client1.close();
  }
});

app.get("/api/test1",(req, res)=>{
  console.log(req.body)
} )

app.listen(PORT, () => {
  console.log(`Node server listening at http://localhost:${PORT}/`);
});
