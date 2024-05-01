const statusCtrl = {};

statusCtrl.getStatus = (req, res) => {
    res.status(200).json({ status: "On" });
}

module.exports = statusCtrl;
