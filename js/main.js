const carga = $(".carga");
const btn = $(".iniciar");


$(document).ready(()=>{    
    btn.click(() => {
        carga.animate({
            margin: "37rem 0 0 10rem"
        },800)
        .animate({
            margin: "10rem 0 0 15rem"
        },800)
        .animate({
            margin: "37rem 0 0 20rem"
        },700)
        .animate({
            margin: "20rem 0 0 24rem"
        },650)
        .animate({
            margin: "37rem 0 0 27rem"
        },580)
        .animate({
            margin: "30rem 0 0 31rem"
        },530)
        .animate({
            margin: "37rem 0 0 35rem"
        },500)
        .animate({
            margin: "35rem 0 0 37rem"
        },450)
        .animate({
            margin: "37rem 0 0 36.5rem"
        },440)
        .delay(2000)
        carga.animate({
            margin: "0 0 37rem 0"
        })
    })
    
})        