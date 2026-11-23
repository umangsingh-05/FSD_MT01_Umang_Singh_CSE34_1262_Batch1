const express = require("express");
const app = express();

app.use(express.json());

let products = [
    {
        id: 301,
        name: "Wireless Mouse",
        category: "Electronics",
        price: 799,
        quantity: 25,
        inStock: true
    },
    {
        id: 302,
        name: "Notebook",
        category: "Stationery",
        price: 60,
        quantity: 100,
        inStock: true
    },
    {
        id: 303,
        name: "USB Keyboard",
        category: "Electronics",
        price: 999,
        quantity: 0,
        inStock: false
    }
];


let nextId = 304;

app.get("/api/products", (req, res) => {
    res.status(200).json(products);
});


app.post("/api/products", (req, res) => {
    const { name, category, price, quantity, inStock } = req.body;

    if (
        typeof name !== "string" || name.trim() === "" ||
        typeof category !== "string" || category.trim() === "" ||
        typeof price !== "number" || price < 0 ||
        typeof quantity !== "number" || quantity < 0 ||
        typeof inStock !== "boolean"
    ) {
        return res.status(400).json({
            message: "Invalid product data"
        });
    }

    const newProduct = {
        id: nextId++,
        name,
        category,
        price,
        quantity,
        inStock
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
});

app.get("/api/products/filter", (req, res) => {
    const category = req.query.category;

    if (!category) {
        return res.status(400).json({
            message: "Category query parameter is required"
        });
    }

    const filteredProducts = products.filter(product =>
        product.category.toLowerCase() === category.toLowerCase()
    );

    res.status(200).json(filteredProducts);
});

app.get("/api/products/:id", (req, res) => {
    const id = Number(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.status(200).json(product);
});

app.put("/api/products/:id", (req, res) => {
    const id = Number(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const { name, category, price, quantity, inStock } = req.body;

    if (
        typeof name !== "string" || name.trim() === "" ||
        typeof category !== "string" || category.trim() === "" ||
        typeof price !== "number" || price < 0 ||
        typeof quantity !== "number" || quantity < 0 ||
        typeof inStock !== "boolean"
    ) {
        return res.status(400).json({
            message: "Invalid product data"
        });
    }

    product.name = name;
    product.category = category;
    product.price = price;
    product.quantity = quantity;
    product.inStock = inStock;

    res.status(200).json(product);
});

app.delete("/api/products/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    products.splice(index, 1);

    res.status(200).json({
        message: "Product deleted successfully"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});