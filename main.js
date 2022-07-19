p1= "";
p2= "";

function addusers() {
    p1= document.getElementById("p1name").value;
    p2= document.getElementById("p2name").value;
    localStorage.setItem("Player 1 name", p1);
    localStorage.setItem("Player 2 name", p2);
    window.location= "game.html";
}