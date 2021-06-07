const octicons = require('octicons')
const fs = require('fs')
const path = require('path')


const outputDir = path.resolve(__dirname, '../../build')
const r = {}


const collectIcon = (key) => {
    const rr = {}
    const icon = octicons[key]
    const customFields = [/* 'name', 'keywords',  */'width', 'height']

    const bleachRe = {
        re: /d="(.*)"/i,
        index: 1
    }
    const bleachPath = htmlPath => htmlPath.match(bleachRe.re)[bleachRe.index]

    rr.path = bleachPath(icon.path)
    customFields.forEach(field => {
        rr[field] = icon[field]
    })

    r[key] = rr
}

const write2Fs = () => {
    fs.writeFile(path.resolve(outputDir, 'data.json'), JSON.stringify(r), 'utf8', () => {
        console.log('Written.')
    })
}

Object.keys(octicons).forEach(key => collectIcon(key))
write2Fs()
