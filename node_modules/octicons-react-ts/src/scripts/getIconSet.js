const octicons = require('octicons')
const fs = require('fs')
const path = require('path')

const outputDir = path.resolve(__dirname, '../../build')
const r = {sets: Object.keys(octicons).map(key => `'${key}'`).join(' | ')}

const write2Fs = () => {
    fs.writeFile(path.resolve(outputDir, 'iconset.json'), JSON.stringify(r), 'utf8', () => {
        console.log('Written.')
    })
}

write2Fs()
