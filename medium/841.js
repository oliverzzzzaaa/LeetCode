var canVisitAllRooms = function(rooms) {
    let visited = {0: true};
    let queue = [];
    rooms[0].forEach(key => {
        queue.push(key)
    })
    while (queue.length > 0) {
        let key = queue.shift();
        if (!visited[key]) {
            visited[key] = true;
            rooms[key].forEach(newkey => {
                queue.push(newkey)
            })
        }
    }
    return Object.keys(visited).length === rooms.length
};

