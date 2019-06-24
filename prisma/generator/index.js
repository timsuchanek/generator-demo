#!/usr/bin/env node

const fs = require('fs')
const byline = require('./byline')

byline(process.stdin).on('data', line => {
  const json = JSON.parse(String(line))
  fs.writeFileSync('result.json', JSON.stringify(json, null, 2))
  process.exit(0)
})

process.stdin.resume()
