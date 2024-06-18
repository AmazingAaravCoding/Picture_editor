function preload() {

}
function setup() {
    canvas = createCanvas(600, 500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    col = ""
}
function draw() {
    background("red")
    fill("blue")
    circle(20,20,20)
    circle(20,480,20)
    circle(580,20,20)
    circle(580,480,20)
    fill("yellow")
    rect(40,50,10,400)
    rect(550,50,10,400)
    rect(50,40,500,10)
    rect(50,450,500,10)
    image(video, 50, 50, 500, 400)
    tint(col)
}
function apply_filter() {
    col = document.getElementById("color").value
}
function take_snapshot() {
    save("Aarav.png")
}