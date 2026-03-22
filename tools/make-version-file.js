const fs = require("fs");
const { writeFile } = fs;

const path = require("path");

const newFilePath = path.join(process.cwd(), "public", "version.json");

console.log("Updating the version file.");

const package = require(`${process.cwd()}/package.json`);
const { version } = package;

const json = JSON.stringify({ version });

writeFile(newFilePath, json, "utf-8", (error) => {
  if (error) {
    console.error("Error saving file.", error);
    throw error;
  }
  console.log("File has been saved with version : ", version);
});

// TODO : Write version.json
console.log("File update complete.");
