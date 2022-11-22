let isPalin=()=>{
    let text=document.getElementById("palin").value;
    let len=text.length;
    for(let i=0;i<len;i++){
      if(text[i]!==text[len-i-1]){
        document.getElementById("checkPalin").innerHTML="<h2>Not a Palindrome</h1>";
        return;
      }
    }
    document.getElementById("checkPalin").innerHTML="<h2>It is a Palindrome.</h2>";
}
