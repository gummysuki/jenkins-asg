const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send("FoodExpress API is running");
});

app.get('/menu', (req, res) => {
    res.json({
        items: ["Burger", "Pizza", "Sushi"]
    });
});

app.get('/orders', (req, res) => {
    res.json({
        orders: [
            {id:1, item:"Burger"},
            {id:2, item:"Pizza"}
        ]
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});