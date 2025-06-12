const express = require("express");
const app = express();
app.use(express.json());

app.post("/pay", (req, res) => {
    // Simulate payment processing (integrate actual gateway here)
    console.log("Payment request received");
    res.send({ status: "Payment processing..." });
});

app.listen(3000, () => console.log("Server running on port 3000"));
