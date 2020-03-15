var canFinish = function(numCourses, prerequisites) {
    let h = {};
  prerequisites.forEach(pair => {
    let course = pair[0];
    let prereq = pair[1];
    if (h[course]) {
        h[course].push(prereq);
    } else {
        h[course] = [prereq]
    }
  });

};

function dfs(course, h) {
    if (!h[course]) {return true}
    
}