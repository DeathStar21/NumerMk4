const Express = require("express")
const Cors = require("cors")
const App = Express()
const swaggerUi = require('swagger-ui-express');
const swaggerjsdoc = require('swagger-jsdoc');
const doc = require('./swagger.json');
const jwt = require('jsonwebtoken');
App.use(Cors())
const secretKeys = '12345'
var mysql = require('mysql');

var con = mysql.createPool({
    host: process.env.DB_HOST || "127.0.0.1",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "QlerOrder66",
    database: process.env.DB_NAME || "numer",
    port: process.env.DB_PORT || "3306"
});

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

// function authenToken(req, res, next) {
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]

//     if (token === undefined){
//         return res.sendStatus(401)
//     } 


//   }

function authorToken(req, res, next) {
    let token = req.headers["authorization"];
    if (token === undefined) {
        res.send("Please Authorize!!");
    } else {
        try {
            token = token.split(" ")[1];
            console.log(token);
            let decode = jwt.verify(token, secretKeys);
            console.log(decode);
            if (decode.admin === "Qler") {
                next();
            } else {
                res.send("Authorize is incorrect");
            }
        } catch {
            
            res.send("Authorize is incorrect");
        }
    }
}
App.get("/",(req, res) => {
    res.send("Hello Qler");
})

App.get("/createToken/:admin", (req, res) => {

    let token = jwt.sign({ admin: req.params.admin }, secretKeys);
    res.send(token)

})
//Bisection
App.get("/bisection", (req, res) => {
    console.log("axios success");
    con.query("SELECT * FROM bisection", (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
})
App.get("/bisection-doc", authorToken, (req, res) => {
    console.log("axios success");
    con.query("SELECT * FROM bisection", (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
})

//FalsePosition
App.get("/falseposition", (req, res) => {
    console.log("axios success");
    con.query("SELECT * FROM falseposition", (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
})
App.get("/falseposition-doc", authorToken, (req, res) => {
    console.log("axios success");
    con.query("SELECT * FROM falseposition", (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
})

//LinearRegression
App.get("/linearregression", (req, res) => {
    console.log("axios success");
    con.query("SELECT * FROM linearregression", (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
})
App.get("/linearregression-doc", authorToken, (req, res) => {
    console.log("axios success");
    con.query("SELECT * FROM linearregression", (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
})


const swaggerDocument = swaggerjsdoc(doc)
App.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

App.listen(7258, () => {
    console.log("7258 success!");
});
module.exports = App;