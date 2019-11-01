const fs = require('fs');
const uuidv4 = require('uuid/v4');

const readFile = path => {
    const data = fs.readFileSync(path);
    return JSON.parse(data);
}

const writeFile = (path, data) => {
    try {
        fs.writeFileSync(path, JSON.stringify(data, null, 2));
        return true;
    } catch(error) {
        return false;
    }
}

const uuid = () => uuidv4();

const base64Encode = str => base64Encode(str);
const base64Decode = str => base64Decode(str);

module.exports = {
    readFile,
    writeFile,
    uuid,
    base64Encode,
    base64Decode,
}
