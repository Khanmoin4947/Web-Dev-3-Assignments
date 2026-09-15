# Smart Utility Toolkit

This project implements the lab assignment requirements for Node.js core modules:

- CLI calculator using `process.argv`
- Reusable custom module using `module.exports` and `require()`
- HTTP server with multiple routes using the `http` module
- File manager using `fs` methods (`writeFile`, `readFile`, `appendFile`, `unlink`)
- Random dice generator using the `crypto` module
- Logging utility with timestamps

## Files

- `calculator.js` — CLI calculator
- `server.js` — HTTP server with `/`, `/about`, `/contact`, and 404 handling
- `fileManager.js` — create, read, update, and delete a demo file
- `dice.js` — random dice roll simulator
- `utils/isEven.js` — reusable custom module
- `utils/logger.js` — timestamped logger

## Run commands

```bash
node calculator.js add 10 5
node dice.js 3
node fileManager.js create
node fileManager.js read
node fileManager.js update
node fileManager.js delete
node server.js
```

Then open:

- http://localhost:3000/
- http://localhost:3000/about
- http://localhost:3000/contact
