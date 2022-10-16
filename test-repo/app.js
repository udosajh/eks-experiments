const express = require("express");
const process = require("process");
const axios = require("axios");
const app = express();



app.all("/*", async (req, res) => {
    try {
        console.log(req.headers, req.url);
        const response = await axios.get("http://testeks2service:10011/").catch(err => {
            console.log(err);
            return { body: "api failed" };
        })
        console.log(response);
        res.send("test " + process.env.TEST_SNO + response.body);
    } catch (err) {
        console.log(err);
        res.send("err");
    }

});

app.listen(process.env.PORT, () => {
    console.log("server started at PORT " + process.env.PORT);
})

