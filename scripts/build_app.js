const exec = require('child_process').exec;

module.exports = function (context) {
    exec("yarn install && yarn build", {
        cwd: context.opts.plugin.dir
    }, function (error, out, err) {
        console.log(error, out, err);
    });
}
