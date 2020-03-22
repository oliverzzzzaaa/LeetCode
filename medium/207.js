var canFinish = function(numCourses, prerequisites) {
    let approved = new Set();
    let approving = new Set();
    let h = {};
    prerequisites.forEach(pair => {
      if (h[pair[0]]) {
        h[pair[0]].push(pair[1])
      } else {
        h[pair[0]] = [pair[1]]
      }
    })
    Object.keys(h).forEach(course => {
      if (!dp(approved, approving, h, course)) {
        return false;
      }
    })
    return true;
};

function dp(approved, approving, h, course) {
  if (approved.has(course)) {return true}
  if (approving.has(course)) {return false}

  approving.add(course)
  h[course].forEach(course => {
    if (!dp(approved, approving, h, course)) {
      return false;
    }
  })
  approving.delete(course)
  approved.add(course)
  return true;
}

console.log(canFinish(2, [[1,0], [0,1]]))
console.log(canFinish(2, [1,0]))