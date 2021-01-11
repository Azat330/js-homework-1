//------------------------------------- ex 2

function array(arr) {
    let string = 0;
    let number = 0;
    arr.forEach(a => {
      if(typeof a == 'string') {
        string++
      } else if (typeof a == 'number'){
        number++
      }
    })
    return {number, string}
  }
  array([1, 4, 'i am a string', '456']);
  array([1, '10', 'hi', 2, 3])
  
  
  //----------------------------------------------------- ex 4
  
  function longestWord(string) {
      let str = string.split(" ");
      let longest = 0;
      let word = null;
      for (let i = 0; i < str.length - 1; i++) {
          if (longest < str[i].length) {
              longest = str[i].length;
              word = str[i];
          }
      }
      return word;
  }
  longestWord("A revolution without dancing is a revolution not worth having.");
  longestWord("Which would be worse - to live as a monster, or to die as a good man?");
  
  //---------------------------------------------------- ex 5
  
  function sort(names) {
    let string = "";
    let ss = "";
    let namestring = names.split("");
  
    for (let j = 0; j < namestring.length; j++) {
      for (let i = j; i < namestring.length; i++) {
        if (namestring[i] === " ") {
          string += namestring[i];
          continue;
        }
        if (string.includes(namestring[i])) break;
        else string += namestring[i];
      }
      if (ss.length < string.trim().length) ss = string.trim();
      string = "";
    }
    return ss;
  }
  
  console.log(sort('there are no two words in the english language more harmful than "good job"'));
  
  console.log(sort("parting yout soup is not a miracle, bruce"));
  
  
  // ---------------------------------------------- ex 8
  
  function getCombinations(set) {
      if (set.length <= 3) return set;
      let output = [];
      for (let i = 0; i < set.length; i++) {
          for (let j = i + 1; j < set.length; j++) {
              for (let k = j + 1; k < set.length; k++) {
                  output.push([set[i], set[j], set[k]]);
              }
          }
      }
      return output;
  }
  console.log(getCombinations([4]));
  console.log(getCombinations([19, 6]));
  console.log(getCombinations([5, 9, 23, 0, -2, -1]));
  