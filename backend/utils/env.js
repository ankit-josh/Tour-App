require('dotenv').config();

function GetEnvData(key) {
    return process.env[key]
}

module.exports = GetEnvData

