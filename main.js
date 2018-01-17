var ipfsAPI = require("ipfs-api")
var ipfs = ipfsAPI({host: 'localhost', port: '5001', protocol: 'http'})
window.testIPFSUpload = function() {
    function randomArray(num) {
        return Array.from(Array(num)).map((a) => Math.random())
    }
    var ipfsFiles = [
            { path: "testdir/nasty" },
            { path: "testdir/a", content: new Buffer([1,2,3,4]) },
            { path: "testdir/b" },
    ]
    ipfsFiles = ipfsFiles.concat(randomArray(20).map((a) => { return { path: "x" + a, content: new Buffer(randomArray(10)) } }))
    console.log("for saving into IPFS")
    console.log(ipfsFiles)
    ipfs.files.add(ipfsFiles, (err,res) => {
        if (err) {
            console.log("error!")
            console.log(err)
        } else {
            console.log("uploaded to IPFS!")
            console.log(res)
        }
    })
}
