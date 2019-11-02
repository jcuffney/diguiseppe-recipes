const fs = require('fs');

const readFile = (path) => {
  const data = fs.readFileSync(path);
  return JSON.parse(data);
};

const writeFile = (path, data) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = {
  readFile,
  writeFile,
};
