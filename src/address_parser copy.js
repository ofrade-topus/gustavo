const fs = require("fs");

const parseAddressFile = (path) => {
  validatePathType(path)
  // try {
  //   const content = fs.readFileSync(path, "utf8");
  //   if (content.trim().length === 0) {
  //     throw new Error("The input file is empty.");
  //   }

  //   const lines = [];
  //   let tempLines = [];
  //   for (const line of content.split(/\r?\n/)) {
  //     if (line.trim().length === 0 && tempLines.length === 0) {
  //       continue;
  //     }
  //     if (line.trim().length > 0) {
  //       tempLines.push(line);
  //     } else if (tempLines.length > 0) {
  //       lines.push(tempLines);
  //       tempLines = [];
  //     }
  //   }

  //   const addresses = lines.map((line) => {
  //     line = line.filter((f) => f.trim().length > 0);
  //     const hasAddress2 = line.length === 3;

  //     if (line.length < 2 || line.length > 3) {
  //       throw new Error("Invalid address format.");
  //     }

  //     const address = {
  //       address1: line[0].trim(),
  //       address2: null,
  //     };

  //     if (hasAddress2) {
  //       address.address2 = line[1].trim();
  //     }

  //     const lastLine = hasAddress2 ? line[2].split(", ") : line[1].split(", ");

  //     if (lastLine.length < 2) {
  //       throw new Error("Invalid city/state/zip format.");
  //     }

  //     address.city = lastLine.shift().trim();

  //     const [state, zip] = lastLine.shift().trim().split(" ");

  //     if (!state || !zip) {
  //       throw new Error("Invalid state or zip code.");
  //     }

  //     address.state = state;

  //     if (!isValidZip(zip)) {
  //       throw new Error("Invalid zip code.");
  //     }
  //     address.zip = zip;

  //     return address;
  //   });

  //   return addresses;
  // } catch (error) {
  //   const errorMessage =
  //     "Error occurred while parsing the address file: " + error.message;
  //   console.error(errorMessage);
  //   throw new Error(errorMessage);
  // }
};

const validatePathType = (path) => {

}

const isValidZip = (zip) => {
  // Basic example: Check if the zip code consists of exactly 5 digits
  return /^\d{5}$/.test(zip);
};

// const validateAddress = (line) => {
//   validateLines(line)
//   validateCity()
//   validateZipCode()
// }

// const validateZipCode = (line) => {
//   if (!isValidZip) {
//     throw new Error('akljd')
//   }
// }

module.exports = parseAddressFile;