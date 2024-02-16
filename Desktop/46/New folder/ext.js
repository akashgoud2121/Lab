document.getElementById("color Button")
add EventListner ("click",function()
{
document.body.style.backgroundcolor=getRandomcolor();
});

funtion getRandomcolor(){
var letters="0123456789ABCDEF";
var color="H"

for(var i=0;i<6;i++){
color+=letters(Math.floor(math.random()*16)];
}

return color;}