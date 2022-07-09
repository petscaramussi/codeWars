function filter_list(l) {
    let final = [];
     for(let i = 0; i < l.length; i++){
         if(typeof l[i] ===  'number'){
             final.push(l[i]);
         }
     }
     
     return final;
  }