const filePaths = [
  "./addresses_1.txt",
  "./addresses_2.txt",
  "./addresses_3.txt",
  "./addresses_4.txt",
  "./addresses_5.txt",
  // Add more file paths as needed
];

for (const filePath of filePaths) {
  const addresses = parseAddressFile(filePath);
  console.log(`Addresses from ${filePath}:`, addresses);
}