#!/usr/bin/env node

const fs = require('fs')

process.stdin.on('data', chunk => {
  const json = JSON.parse(String(chunk))
  fs.writeFileSync('result.json', JSON.stringify(json, null, 2))
  process.exit(0)
})

process.stdin.resume()
