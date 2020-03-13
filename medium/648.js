var replaceWords = function(dict, sentence) {
  let h = {};
  dict.forEach(word => {
      h[word] = true;
  })  
  let newS = sentence.split(" ").map(word => {
    for (let i = 1; i <= word.length; i++) {
        if (h[word.slice(0,i)]) {
            return word.slice(0,i)
        }
    }
    return word
  })
  return newS.join(" ")
};

console.log(replaceWords(['cat','bat','rat'], "the cattle was rattled by the battery"))