const express = require("express");
const apiMoviesCtrl = require("../../controllers/api/movies");
const router = express.Router();

router.get("/", apiMoviesCtrl.index);
router.post("/", apiMoviesCtrl.create);
router.get("/:id", apiMoviesCtrl.show);
router.delete("/:id", apiMoviesCtrl.del);
router.get("/:id", apiMoviesCtrl.editComment);
router.put("/:id", apiMoviesCtrl.edit);

module.exports = router;
