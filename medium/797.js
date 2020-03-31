var allPathsSourceTarget = function(graph) {
    let location = 0;
    let visitedarr = [];
    let visitedhash = {};
    let paths = [];
    function dfs(graph, location, visitedhash, visitedarr) {
        if (location === graph.length-1) {return paths.push(visitedarr)}
        if (!visitedhash[location]) {
            graph[location].forEach(key => {
                dfs(graph, key, Object.assign({}, visitedhash, {key: true}), visitedarr.concat(key));
            })
        }
    }
    dfs(graph, 0, {}, [0]);
    return paths;
};
// var allPathsSourceTarget = function(graph) {
//     return dp(graph, 0, {}, [0])
// };


// function dp(graph, location, visitedhash, visitedarr) {
//     if (location === graph.length-1) {return visitedarr}
//     let retarray = [];
//     graph[location].forEach(key => {
//         if (!visitedhash[key]) {
//             retarray.push(dp(graph, key, Object.assign({}, visitedhash, {key: true}), visitedarr.concat(key)))
//         }
//     })
//     return retarray;
// }
console.log(allPathsSourceTarget([[1,2], [3], [3], []]))