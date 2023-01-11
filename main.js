function generateScript() {
    var version = document.getElementById('osversion').value;
    var edition = document.getElementById('osedition').value;
    if (version = 10) {
        switch (edition) {
            case "pro":
                var edition = "W269N-WFGWX-YVC9B-4J6C9-T83GX"
            break;

            case "pron":
                var edition = "MH37W-N47XK-V7XM9-C7227-GCQG9"
            break;

            case "home":
                var edition = "TX9XD-98N7V-6WMQ6-BX7FG-H8Q99"
            break;

            case "homen":
                var edition = "3KHY7-WNT83-DGQKR-F7HPR-844BM"
            break;

            case "homes":
                var edition = "7HNRX-D7KGG-3K4RQ-4WPJ4-YTDFH"
            break;

            case "homec":
                var edition = "PVMJN-6DFY6-9CCP6-7BKTT-D3WVR"
            break;

            case "edu":
                var edition = "NW6C2-QMPVW-D7KKK-3GKT6-VCFB2"
            break;

            case "edun":
                var edition = "2WH4N-8QGBV-H22JP-CT43Q-MDWWJ"
            break;

            case "ent":
                var edition = "NPPR9-FWDCX-D2C8J-H872K-2YT43"
            break;

            case "entn":
                var edition = "DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4"
            break;
        }
        var installKMS = `slmgr /ipk ${edition}\n`;
        var setServer = "slmgr /skms kms8.msguides.com \n";
        var atoScript = "slmgr /ato \n";
        var final = installKMS + setServer + atoScript;
        var blob = new Blob([final], { type: "text/plain;charset=utf-8" });
        var name = edition + " Windows 10.bat"
        saveAs(blob, name);
    } else if (version = 11) {
        switch (edition) {
            case "pro":
                var edition = "W269N-WFGWX-YVC9B-4J6C9-T83GX"
            break;

            case "pron":
                var edition = "MH37W-N47XK-V7XM9-C7227-GCQG9"
            break;

            case "home":
                var edition = "TX9XD-98N7V-6WMQ6-BX7FG-H8Q99"
            break;

            case "homen":
                var edition = "3KHY7-WNT83-DGQKR-F7HPR-844BM"
            break;

            case "homes":
                var edition = "7HNRX-D7KGG-3K4RQ-4WPJ4-YTDFH"
            break;

            case "homec":
                var edition = "PVMJN-6DFY6-9CCP6-7BKTT-D3WVR"
            break;

            case "edu":
                var edition = "NW6C2-QMPVW-D7KKK-3GKT6-VCFB2"
            break;

            case "edun":
                var edition = "2WH4N-8QGBV-H22JP-CT43Q-MDWWJ"
            break;

            case "ent":
                var edition = "NPPR9-FWDCX-D2C8J-H872K-2YT43"
            break;

            case "entn":
                var edition = "DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4"
            break;
        }
        var installKMS = `slmgr /ipk ${edition}\n`;
        var setServer = "slmgr /skms kms8.msguides.com \n";
        var atoScript = "slmgr /ato \n";
        var final = installKMS + setServer + atoScript;
        var blob = new Blob([final], { type: "text/plain;charset=utf-8" });
        var name = edition + " Windows 11.bat"
        saveAs(blob, name);
    }
}