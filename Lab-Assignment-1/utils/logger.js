function timestamp() {
  return new Date().toISOString();
}

function log(message, type = 'INFO') {
  console.log(`[${timestamp()}] [${type}] ${message}`);
}

module.exports = {
  log,
  timestamp,
};
