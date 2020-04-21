var findRedundantConnection = function(edges) {
    let visited = new Set();
    for (let i = 0; i < edges.length; i++) {
        let edge = edges[i]
        if (i === 0) {
            visited.add(edge[0])
            visited.add(edge[1])
        } else {
            if (visited.has(edge[0]) && visited.has(edge[1])) {
                return edge
            } else if (visited.has(edge[0])) {
                visited.add(edge[1])
            } else if (visited.has(edge[1])) {
                visited.add(edge[0])
            } else {
                visited.add(edge[0]);
                visited.add(edge[1]);
            }
        }
    } 
};

console.log(findRedundantConnection([[1,2], [1,3], [2,3]]))