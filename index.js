const express = require('express');
const app = express();


app.get('/', async (req, res) => {
    res.status(200).json({
        data: [
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
        ]
    })
})
app.get('/user', async (req, res) => {
    res.status(200).json({
        data: [
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
            { name: "abc", email: "abc@gmail.com", phone: 1234567894 },
        ]
    })
})


app.listen(5000, () => {
    console.log("port listen of 5000")
})