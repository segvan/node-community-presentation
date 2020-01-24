const express = require("express");
const router = express.Router();

const blockThread = require("./routeHandlers/1_block_thread");
const async = require("./routeHandlers/2_async");
const cryptoLibuv = require("./routeHandlers/3_crypto_libuv");

router.get("/block-thread", blockThread);
router.get("/async", async);
router.get("/crypto-libuv", cryptoLibuv);

module.exports = router;
