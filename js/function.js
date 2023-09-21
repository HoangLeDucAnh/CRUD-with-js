function getValue(){
    let ma=document.querySelector("#txtMaSV").value
    let ten=document.querySelector("#txtTenSV").value
    let email=document.querySelector("#txtEmail").value
    let pass=document.querySelector("#txtPass").value
    let toan=document.querySelector("#txtDiemToan").value*1
    let ly=document.querySelector("#txtDiemLy").value*1
    let hoa=document.querySelector("#txtDiemHoa").value*1
    return new SV(ma, ten, email, pass, toan, ly, hoa)
}
function renderSV(listSV){
    let tbody=document.querySelector("#tbodySinhVien")
    let content=''
    for(let i=0;i<listSV.length;i++){
        let sv=listSV[i]
        content+=`
        <tr>
            <td>${sv.ma}</td>
            <td>${sv.ten}</td>
            <td>${sv.email}</td>
            <td>${sv.dtb()}</td>
            <td>
                <button class="btn btn-danger" onclick="xoaSV('${sv.ma}')">Xóa</button>
                <button class="btn btn-primary" onclick="chinhSua('${sv.ma}')">Chỉnh sửa</button>
            </td>
        </tr>
        `
    }
    tbody.innerHTML=content
}