var fs = require('fs');
var exec = require('child_process').exec;

describe("#put", function() {
    it("do put file", function(done) {
        fs.writeFileSync("config.json", JSON.stringify({
            put: [
                {
                    localpath: "/etc/issue",
                    hpsspath: "_test/issue/issue.txt"
                }
            ],
            auth: {
                username: process.env.USER,
                keytab: "soichi-hsi.keytab",
            } 
        }));
        process.env.HPSS_BEHIND_FIREWALL = "true";
        exec("node hpss.js", {env: process.env}, function(err, stdout, stderr) {
            console.log("stdout");
            console.dir(stdout);
            console.log("stderr");
            console.dir(stderr);
            console.log("err");
            console.dir(err);
            done(err);
        });
    });
});
