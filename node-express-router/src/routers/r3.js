import express from "express";

const router = express.Router();

router.get("/", (req, resp) => {
    console.log("module /r3");
    resp.send("r3 homepage");
})

const fun1 = function(req, resp, next) {
    console.log("r3-f1");
    next();
}

const fun2 = function(req, resp, next) {
    console.log("r3-f2");
    next();
}

const fun3 = function(req, resp) {
    console.log("r3-f3");
    resp.send("Hello from r3-3")
}


router.get("/fun", [fun1, fun2, fun3]);


export default router;
