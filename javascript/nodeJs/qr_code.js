#!/usr/bin/node

import inquirer from "inquirer"; // Importing inquirer for user input
import qr from "qr-image"; // Importing qr-image for generating QR codes
import fs from "fs"; // Importing the file system module

inquirer
  .prompt([
    {
      message: "Type in your URL",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL; // Retrieve the URL entered by the user

    // Generate QR code image as a PNG
    const qr_png = qr.image(url, { type: "png" });

    // Create a writable stream and save the QR code image as qr_img.png
    qr_png.pipe(fs.createWriteStream('qr_img.png'));

    // Save the URL to a text file named qr_code.txt
    fs.writeFile('qr_code.txt', url, (err) => {
      if (err) throw err;
      console.log("The file has been saved");
    });
  })
  .catch((error) => {
    // Error handling for inquirer
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log("Something else went wrong");
    }
  });

