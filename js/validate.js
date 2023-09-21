function kiemTraRong(value, targetId){
    if(value!=""){
        document.getElementById(targetId).innerText=""
        return true
    }else{
        document.getElementById(targetId).innerText="*Không được để trống"
        return false
    }
}
function kiemTraTrung(value, targetId, mess, listSV, key){
    let check=listSV.findIndex(item=>{
        return item[key]===value
    })
    if(check===-1){
        document.getElementById(targetId).innerText=""
        return true
    }else{
        document.getElementById(targetId).innerText=mess
        return false
    }
}