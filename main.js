const katbtn = document.getElementById("katbtn");
const menyu = document.getElementById("menyu");
const inp = document.getElementById("inp");
katbtn.onclick = () => {
    menyu.style.display = "block";
}

function closebtn(){
    return menyu.style.display = "none";
}

function search(){
    alert(inp.value);
}