//index.js
// pop up the model as block shape
function register(){
    let modal = document.getElementById("myModal");
    let span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }
    //close modal on clicking empty window
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    } 
}
//show hide the room_code element depending upon checked or unchecked 
function ShowHideDiv() {
    let room_code = document.getElementById("room_code");
    let join = document.getElementById('JOIN');
    let create = document.getElementById('CREATE');
    room_code.style.display = join.checked && !create.checked  ? "block" : "none"; //if joind checked then room_code elemnt is visiable
}
