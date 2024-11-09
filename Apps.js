let str = "abcdabcdefgggh";

   function un(str){
    let ans = "";
    
    for(let i=0; i<str.length; i++){
        let curr = str[i];
        if(ans.indexOf(curr) == -1){
            ans += curr;
        }
    }
    return ans;
}

console.log(un(str));
    
    