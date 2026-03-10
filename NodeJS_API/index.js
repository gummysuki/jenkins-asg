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

app.post('/orders', (req, res) => {
    const { item } = req.body;
    if (!item || !menuItems.includes(item)) {
        return res.status(400).json({ message: "Invalid item" });
    }
    const newOrder = { id: orders.length + 1, item };
    orders.push(newOrder);
    res.status(201).json(newOrder);
});

app.put('/orders/:id', (req, res) => {
    const orderId = parseInt(req.params.id);
    const { item } = req.body;
    const order = orders.find(o => o.id === orderId);
    if (!order) {
        return res.status(404).json({ message: "Order not found" });
    }
    if (!item || !menuItems.includes(item)) {
        return res.status(400).json({ message: "Invalid item" });
    }
    order.item = item;
    res.json(order);
});

app.delete('/orders/:id', (req, res) => {
    const orderId = parseInt(req.params.id);
    const index = orders.findIndex(o => o.id === orderId);
    if (index === -1) {
        return res.status(404).json({ message: "Order not found" });
    }
    const deletedOrder = orders.splice(index, 1);
    res.json(deletedOrder[0]);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});