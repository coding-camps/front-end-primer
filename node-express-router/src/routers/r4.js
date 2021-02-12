import express from "express";

let router = express.Router();


router.get("/", (req, resp) => {
    console.log("module /r4");
    resp.send("r4 homepage");
})


let fun1 = (req, resp, next) => {
    console.log("r4-fun1");
    next();
}

let fun2 = (req, resp) => {
    console.log("r4-fun2");
    resp.json({k1:"v1", 'k2': "v2"});
}

router.get("/fun", fun1, fun2);

export default router;
