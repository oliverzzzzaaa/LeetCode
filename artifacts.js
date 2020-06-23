let dictionary = {
    'A': 0,
    'B': 1,
    'C': 2,
    'D': 3,
    'E': 4,
    'F': 5,
    'G': 6,
    'H': 7,
    'I': 8,
    'J': 9,
    'K': 10,
    'L': 11,
    'M': 12,
    'N': 13,
    'O': 14,
    'P': 15,
    'Q': 16,
    'R': 17,
    'S': 18,
    'T': 19,
    'U': 20,
    'V': 21,
    'W': 22,
    'X': 23,
    'Y': 24,
    'Z': 25,
}

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// let artifacts = "1B 2C,2D 4D"
// let searched = "2B 2D 3D 4D 4A"
// // let artifacts = "1A 1B,2C 2C"
// // let searched = "1B"
// let artifacts = "1A 1B 1C,2C 3C,5A 5B,6A 7A"
// let searched = "1A 1B 1C 2C 6A 7A"
// answer = [2,1]
let artifacts = "2B 2C,15B 16B 17B 18B,5A 6A 8A"
let searched = "5A 6A 15B 16B 17B 18B"
// // answer = [1,1]
// let artifacts = "20C 21C,5A 5B"
// let searched = "20C 10A"
// //answer = [0,1]

function solution(N, artifacts, searched) {
    let artifactArray = artifacts.split(",").map(artifact => artifact.split(" "))
    let newarr = artifactArray.map(artifact => {
        return artifact.map(piece => {
            return convertToInt(piece)
        })
    })
    console.log(newarr)
    let artifactHashMap = {};
    let i = 1;
    newarr.forEach(artifact => {
        let artifactSet = new Set();
        let x = artifact[0][0];
        let y = artifact[0][1]
        while (x <= )

        for (let i = artifact[0][0]; i <= artifact[1][0]; i++) {
            for (let j = artifact[0][1]; j<=artifact[1][1]; j++) {
                artifactSet.add(convertToString([i,j]));
            }
        }
        artifactHashMap[i] = artifactSet;
        i++;
    })
    let searchedHashMap = {};
    Object.keys(artifactHashMap).forEach(key => {
        searchedHashMap[key] = new Set(artifactHashMap[key]);
    })
    let objValues = Object.values(searchedHashMap)
    let searchedarr = searched.split(" ");
    searchedarr.forEach(tile => {
        for (let i = 0; i < objValues.length; i++) {
            let set = objValues[i];
            if (set.has(tile)) {
                set.delete(tile);
            }
        }
    })
    console.log(artifactHashMap)
    console.log(searchedHashMap)
    let res = [0,0];
    Object.keys(searchedHashMap).forEach(key => {
        if (searchedHashMap[key].size === 0) {
            res[0]++;
        } else if (searchedHashMap[key].size < artifactHashMap[key].size) {
            res[1]++;
        }
    })
    return res;
}

function convertToInt(pos) {
    let row = parseInt(pos.slice(0, pos.length-1));
    let col = parseInt(dictionary[pos[pos.length-1]]);
    return [row-1,col];
}

function convertToString(pos) {
    let str = "";
    str = str.concat((pos[0]+1).toString());
    str = str.concat(alphabet[pos[1]]);
    return str;
}

console.log(solution(3,artifacts,searched))