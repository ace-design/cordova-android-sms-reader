const exec = require('child_process').exec;

module.exports = function (context) {
    console.log("After cordova-android-sms-reader install");
    exec("yarn install && yarn build", {
        cwd: context.opts.plugin.dir
    }, function (error, out, err) {
        console.log("-----------")
        console.log("-----------")
        console.log(error, out, err);
        console.log("-----------")
        console.log("-----------")
    });
    console.log("End of js generation file");
}
