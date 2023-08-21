const fs = require("fs");

const parseAddressFile = (path) => {
  validatePathType(path)
  const content = readContentFileOrThrowError(path)

  const lines = [];
  let tempLines = [];
  for (const line of content.split(/\r?\n/)) {
    if (line.trim().length > 0) {
      tempLines.push(line.trim());
      continue;
    }
    if (tempLines.length > 0) {
      lines.push(tempLines);
      tempLines = [];
    }
  }
  if (tempLines.length > 0) {
    lines.push(tempLines);
  }

  const addresses = lines.map((line) => {
    const hasAddress2 = line.length === 3;

    if (line.length < 2 || line.length > 3) {
      throw new Error("Invalid address format.");
    }

    const address = {
      address1: line[0].trim(),
      address2: null,
    };

    if (hasAddress2) {
      address.address2 = line[1].trim();
    }

    const [city, stateAndZip] = hasAddress2 ? line[2].split(",") : line[1].split(",");

    address.city = removeCommaIfNeeded(city?.trim()) || null;

    const [state, zip] = stateAndZip.trim().split(' ')
 
    if (!zip) {
      if (isValidZip(state)) {
        address.state = null
        address.zip   = state?.trim();
        return address;
      }
      address.state = state?.trim();
      address.zip   = null
      return address;
    }

    if (!isValidZip(zip)) {
      throw new Error("Invalid zip code.");
    }

    address.state = state?.trim() || null;
    address.zip   = zip?.trim()   || null;

    return address;
  });

  return addresses;
};

const validatePathType = (path) => {
  if (typeof path !== 'string') {
    throw new Error('Invalid path type')
  }
}

const removeCommaIfNeeded = (city) => {
  return city.endsWith(',') ? city.substring(0, city.length - 1) : city
}

const readContentFileOrThrowError = (path) => {
  try {
    const content = fs.readFileSync(path, 'utf-8')
    return content
  } catch (error) {
    if (error.message.startsWith('ENOENT: no such file or directory, open')) {
      throw new Error('File not found')
    }
  }
}

const isValidZip = (zip) => {
  // Basic example: Check if the zip code consists of exactly 5 digits
  return /^\d{5}$/.test(zip);
};

module.exports = parseAddressFile;
