const { Router } = require("express")
const artistController = require("../controllers/artist")
const albumController = require("../controllers/album")

const router = Router()

router.post("/", artistController.create)
router.post('/:artistId/album', albumController.create)
router.get("/", artistController.read)
router.get("/:artistId", artistController.readOne)
router.patch("/:artistId", artistController.updateOne)
router.delete("/:artistId", artistController.deleteOne)

module.exports = router
