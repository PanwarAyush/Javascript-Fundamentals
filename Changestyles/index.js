let b=false
let s="10px"
const change=()=>{
s=b?"10px":"40px"
document.getElementById('chg').style.fontSize=s
b^=true
}
const hide=()=>{
    document.getElementById('chg').style.display="none"
}
const show=()=>{
    document.getElementById('chg').style.display="block"
}
