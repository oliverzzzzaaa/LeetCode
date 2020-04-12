// var suggestedProductsTrie = function(products, searchWord) {
    
//     products.sort();
    
//     let trie = {};
//     for (let p of products) {
//         let root = trie;
//         for (let i=0;i<p.length;i++) {
//             if (!root[p[i]]) root[p[i]] = {'sug':[]};
//             if (root[p[i]]['sug'].length < 3) root[p[i]]['sug'].push(p);    
//             root = root[p[i]];
//         }
//     }
    
//     let root = trie, res = [];
//     for (let i=0;i<searchWord.length;i++) {
//         if (root) root = root[searchWord[i]];
//         res.push(!root?[]:root['sug']);
//     }
//     console.log(trie['m']['o']['b'])
//     return res;
// };

function suggestedProductsTrie(products, searchWord) {
    let trie = {};
    products = products.sort();
    products.forEach(product => {
        let node = trie;
        for (let i = 0; i < product.length; i++) {
            if (!node[product[i]]) {node[product[i]] = {'sug': []}};
            if (node[product[i]]['sug'].length < 3) {node[product[i]]['sug'].push(product)}
            node = node[product[i]]
        }
    })
    // console.log(trie)
    let ans = [];
    let node = trie
    for (let i = 0; i < searchWord.length; i++) {
        let letter = searchWord[i];
        console.log(letter)
        ans.push(node[letter]['sug']);
        node = node[searchWord[i]]
    }
    return ans;
}


console.log(suggestedProductsTrie(["mobile","mouse","moneypot","monitor","mousepad"], "mouse"))

// ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"