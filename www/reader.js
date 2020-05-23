module.exports = {
    perm: function () {
        return new Promise((resolve, reject) => {
            cordova.exec(resolve, reject, "Reader", "permission", []);
        });
    }
}
