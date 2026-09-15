const fs = require('fs');
const path = require('path');
const { log } = require('./utils/logger');

const filePath = path.join(__dirname, 'demo.txt');

function createFile() {
  const content = 'This file was created by the Smart Utility Toolkit.\nNode.js file operations demo.\n';
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      log(`Create failed: ${err.message}`, 'ERROR');
      return;
    }
    log(`File created successfully: ${filePath}`, 'SUCCESS');
  });
}

function readFile() {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      log(`Read failed: ${err.message}`, 'ERROR');
      return;
    }
    log('File content read successfully', 'SUCCESS');
    console.log('Content:\n' + data);
  });
}

function updateFile() {
  const updatedContent = 'Updated file content using fs.appendFile().\n';
  fs.appendFile(filePath, updatedContent, (err) => {
    if (err) {
      log(`Update failed: ${err.message}`, 'ERROR');
      return;
    }
    log('File updated successfully', 'SUCCESS');
  });
}

function deleteFile() {
  fs.unlink(filePath, (err) => {
    if (err) {
      log(`Delete failed: ${err.message}`, 'ERROR');
      return;
    }
    log(`File deleted successfully: ${filePath}`, 'SUCCESS');
  });
}

function main() {
  const action = process.argv[2];
  log('File manager started', 'START');

  switch (action) {
    case 'create':
      createFile();
      break;
    case 'read':
      readFile();
      break;
    case 'update':
      updateFile();
      break;
    case 'delete':
      deleteFile();
      break;
    default:
      console.log('Usage: node fileManager.js <create|read|update|delete>');
      log('Invalid file manager action', 'ERROR');
  }
}

main();
