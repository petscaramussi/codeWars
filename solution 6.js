const str = 'hello te';

function wave(str){
    let a = [];
    for(let i = 0; i < str.length; i++){
        a[i] = str.charAt(i).toUpperCase();
    }
    let b;
    for(let j = 0; j < a.length; j++){
        b = str.split("");
        b.splice(j, 1, a[j]);
        a[j] = b.join("");
        
    }
    if( a == []) return '';
    var filtered = a.filter(function(value, index, arr){ 
        return value != str;
    });
    return filtered;
  }
    

 console.log(wave(str))