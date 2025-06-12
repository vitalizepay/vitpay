const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Simulated database of transactions
let transactions = [];

app.post("/pay", (req, res) => {
    const { userId, amount, currency, method } = req.body;
    
    if (!userId || !amount || !currency || !method) {
        return res.status(400).json({ error: "Missing payment details" });
    }

    // Simulate payment processing
    const transactionId = "TXN" + Math.floor(Math.random() * 1000000);
    transactions.push({ transactionId, userId, amount, currency, method, status: "Processing" });

    res.json({
        transactionId,
        status: "Payment request received",
        message: "Your transaction is being processed."
    });
});

app.get("/transactions", (req, res) => {
    res.json({ transactions });
});

app.listen(3000, () => console.log("ViralizePay server running on port 3000"));
