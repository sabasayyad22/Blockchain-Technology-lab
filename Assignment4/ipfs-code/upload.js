const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const PINATA_API_KEY = "10df38aabf7b3c25a819";
const PINATA_SECRET_KEY = "0f1364099a87e30b2b6fd5a3f555dc3ad66429d1eccdd6907d4226dd9d8464db";

async function uploadFile() {
    console.log("Uploading file...");

    const data = new FormData();
    data.append("file", fs.createReadStream("test.txt"));

    try {
        const res = await axios.post(
            "https://api.pinata.cloud/pinning/pinFileToIPFS",
            data,
            {
                maxBodyLength: "Infinity",
                headers: {
                    ...data.getHeaders(),
                    pinata_api_key: PINATA_API_KEY,
                    pinata_secret_api_key: PINATA_SECRET_KEY,
                },
            }
        );

        console.log("✅ Upload Successful!");
        console.log("📌 CID:", res.data.IpfsHash);

    } catch (err) {
        console.log("❌ ERROR OCCURRED:");
        console.log(err.response ? err.response.data : err.message);
    }
}

uploadFile();