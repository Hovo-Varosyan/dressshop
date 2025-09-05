const checkDiskSpace = require("check-disk-space").default
const router = require("express").Router()

router.get("/", (req, res) => {
    checkDiskSpace(`C:/`).then((diskSpace) => {
        res.json({
            free: (diskSpace.free / 1024 / 1024 / 1024).toFixed(2),
            size: (diskSpace.size / 1024 / 1024 / 1024).toFixed(2)
        })
    })
})
module.exports = router