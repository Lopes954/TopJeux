$(".card-text1,.card-text2,.card-text3,.card-text4,.card-text5,.card-text6,.card-text7,.card-text8,.card-text9").css({"display":"none"})

$("#fleche1").click(function(){
    $(".card-text1").toggle()
   


})
$("#fleche2").click(function(){
    $(".card-text2").toggle()


})
$("#fleche3").click(function(){
    $(".card-text3").toggle()


})
$("#fleche4").click(function(){
    $(".card-text4").toggle()


})
$("#fleche5").click(function(){
    $(".card-text5").toggle()


})
$("#fleche6").click(function(){
    $(".card-text6").toggle()


})
$("#fleche7").click(function(){
    $(".card-text7").toggle()


})
$("#fleche8").click(function(){
    $(".card-text8").toggle()


})
$("#fleche9").click(function(){
    $(".card-text9").toggle()


})

// Vague 1

const carte1 = document.querySelectorAll('#container8')

const tlcarte1 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tlcarte1
.staggerFrom(carte1, 1, {opacity: 0}, 0.2, '-=0.5')

const scene1 = new ScrollMagic.Scene({
    triggerElement: carte1,
    triggerHook: 0.9,
    reverse: true
})
.setTween(tlcarte1)
// .addIndicators()
.addTo(controller)


// Vague 2

const carte2 = document.querySelectorAll('#container9')

const tlcarte2 = new TimelineMax();
const controller2 = new ScrollMagic.Controller();

tlcarte2
.staggerFrom(carte2, 1, {opacity: 0}, 0.2, '-=0.5')

const scene2 = new ScrollMagic.Scene({
    triggerElement: carte2,
    triggerHook: 0.9,
    reverse: true
})
.setTween(tlcarte2)
// .addIndicators()
.addTo(controller2)

// Vague 3

const carte3 = document.querySelectorAll('#container10')

const tlcarte3 = new TimelineMax();
const controller3 = new ScrollMagic.Controller();

tlcarte3
.staggerFrom(carte3, 1, {opacity: 0}, 0.2, '-=0.5')



const scene3 = new ScrollMagic.Scene({
    triggerElement: carte3,
    triggerHook: 0.9,
    reverse: true
})
.setTween(tlcarte3)
// .addIndicators()
.addTo(controller3)

// Vague 4

const carte4 = document.querySelectorAll('#container11')

const tlcarte4 = new TimelineMax();
const controller4 = new ScrollMagic.Controller();

tlcarte4
.staggerFrom(carte4, 1, {opacity: 0}, 0.2, '-=0.5')

const scene4 = new ScrollMagic.Scene({
    triggerElement: carte4,
    triggerHook: 0.9,
    reverse: true
})
.setTween(tlcarte4)
//    .addTo(controller4)








