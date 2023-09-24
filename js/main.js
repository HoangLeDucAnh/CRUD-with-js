let listSV=[]
let dataJson=localStorage.getItem("listSV")
if(dataJson!=null){
    listSV=JSON.parse(dataJson).map((item)=>{
        return new SV(item.ma, item.ten, item.email, item.pass, item.toan, item.ly, item.hoa)
    })
    renderSV(listSV)
}

function themSV(){
    let sv= getValue()
    let isValidMa= kiemTraRong(sv.ma, "spanMaSV")&& kiemTraTrung(sv.ma, "spanMaSV", "*Mã sinh viên đã tồn tại", listSV, "ma")
    let isValidTen= kiemTraRong(sv.ten, "spanTenSV")&& kiemTraTrung(sv.ten, "spanTenSV", "*Tên sinh viên đã tồn tại", listSV, "ten")
    if(isValidMa&isValidTen){
        listSV.push(sv)
    renderSV(listSV)
    let jsonData = JSON.stringify(listSV);
    localStorage.setItem("listSV", jsonData);
    console.log(listSV);
    }   
}

function xoaSV(ma){
    let index=listSV.findIndex(item=>{
        return item.ma===ma
    })
    listSV.splice(index,1)
    renderSV(listSV)
    let jsonData= JSON.stringify(listSV)
    localStorage.setItem("listSV", jsonData)
    console.log(listSV);
}

function chinhSua(ma){
    let index=listSV.findIndex(item=>{
        return item.ma===ma
    })
    document.querySelector("#txtMaSV").value=listSV[index].ma
    document.querySelector("#txtTenSV").value=listSV[index].ten
    document.querySelector("#txtEmail").value=listSV[index].email
    document.querySelector("#txtPass").value=listSV[index].pass
    document.querySelector("#txtDiemToan").value=listSV[index].toan
    document.querySelector("#txtDiemHoa").value=listSV[index].ly
    document.querySelector("#txtDiemLy").value=listSV[index].hoa
}

function capNhat(){
let ma=document.querySelector("#txtMaSV").value
let index=listSV.findIndex(item=>{
    return item.ma===ma
})
listSV.splice(index,1,getValue())
renderSV(listSV)
let jsonData= JSON.stringify(listSV)
localStorage.setItem("listSV", jsonData)
}

let filterArr = []
const searchInput= document.querySelector("#txtSearch")
searchInput.addEventListener("keyup", e =>{
    const value=e.target.value.toLowerCase()
    filterArr=listSV.filter(sv=>{
        if(sv.ten.toLowerCase().includes(value) || sv.ma.toLowerCase().includes(value) || sv.email.toLowerCase().includes(value)){
            console.log(sv);
            return sv
        }
    })
    renderSV(filterArr)
})