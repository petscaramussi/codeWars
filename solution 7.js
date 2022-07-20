const str = "code wars";

function generateHashtag (str) {


    if(str.length > 140) return false;

    let a = str.split(" ");
    
    for(let i = 0; i < a.length; i++){
        a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
    }
    let b = "#" + a.join('');
    
    if(b == '#') return false
    
    return b;
  }

console.log(generateHashtag(str))