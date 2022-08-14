function generateScript() {
    var version = document.getElementById('osversion').value;
    var edition = document.getElementById('osedition').value;
    var installKMS = `slmgr /ipk ${edition}\n`;
    var setServer = "slmgr /skms kms8.msguides.com \n";
    var atoScript = "slmgr /ato \n";
    var final = installKMS + setServer + atoScript;
    var blob = new Blob([final], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "activate.bat");
}