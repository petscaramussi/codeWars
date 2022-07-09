function getCount(str) {
    let vowelsCount = 0;
    
    // enter your magic here
    let strSplit = str.split('')
    for(let i = 0; i <= strSplit.length; i++){
      if(strSplit[i] == 'a' || strSplit[i] == 'e' || strSplit[i] == 'i' || strSplit[i] == 'o' || strSplit[i] == 'u'){
        vowelsCount = vowelsCount + 1;
      }
    }
    return vowelsCount;
  }