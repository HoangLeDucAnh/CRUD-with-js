function SV(ma, ten, email, pass, toan, ly, hoa){
    this.ma= ma
    this.ten= ten
    this.email= email
    this.pass= pass
    this.toan= toan
    this.ly= ly
    this.hoa= hoa
    this.dtb= function(){
        return parseFloat((this.toan+this.ly+this.hoa)/3).toFixed(2)
    }
}