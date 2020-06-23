var fs = require("fs");
// The script should be run as follows: node jsonToMarkdown.js data.json
const jsonFile = require(`./${process.argv[2]}`)

function jsonToMd() {
    let newobj = jsonFile
    // let newobj = JSON.parse(jsonFile)

    // I use a Set here to save time, but takes up more space
    // If I want to save space, I can just search through the cols array instead of the Set on line 53
    let colSet = new Set();
    // Also create an array to iterate through for rowToMD (to preserve order)
    let cols = [];
    // Iterate through the JavaScript Object to populate the Set
    for (let i = 0; i < newobj.length; i++) {
        let row = newobj[i]
        Object.keys(row).forEach(key => {
            let lowerkey = key.toLowerCase()
            if (!colSet.has(lowerkey)) {
                colSet.add(lowerkey)
                cols = cols.concat(lowerkey)
            }
        })
    }
    cols = cols.sort()
    let mdCols = colToMD(cols)
    let rowsMD = ""
    // Iterate through the JavaScript Object, each element in the array is a row
    newobj.forEach(row => {
        rowsMD = rowsMD.concat(rowToMD(row, cols) + "\n")
    })
    // Combine rows and cols
    let table = mdCols.concat(rowsMD)
    // Write to file
    fs.writeFile(`${process.argv[2]}.md`, table, (err) => {
        if (err) throw err;
    })
}

function colToMD(cols) {
    let mdCols = '|';
    let blankRow = '|';
    cols.forEach(col => {
        mdCols = mdCols.concat(" " + col + " |")
        blankRow = blankRow.concat(" --- |")
    })
    mdCols = mdCols.concat("\n")
    blankRow = blankRow.concat("\n")
    return mdCols.concat(blankRow)
}

function rowToMD(row, cols) {
    let mdRow = '|'
    // Not the most time efficient, but I create a HashMap with keys as lowercase version
    // This solves the case insensitivity issue
    let rowMap = new Map();
    Object.keys(row).forEach(key => {
        rowMap.set(key.toLowerCase(), row[key])
    })
    // Iterate through the columns, check if that row has an entry for the column
    cols.forEach(col => {
        if (rowMap.get(col)) {
            mdRow = mdRow.concat(" " + rowMap.get(col) + ' |')
        } else {
            mdRow = mdRow.concat(" |")
        }
    })
    return mdRow
}

jsonToMd()