import express from "express";

let router = express.Router();

router.get("/", (req, resp) => {
    resp.send("index homepage");
});

router.get("/:msg", (req, resp) => {
    resp.send(`index message: ${req.params.msg}`);
});

export default router;
