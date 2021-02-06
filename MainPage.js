let butt = document.getElementById("button_plus");
butt.onclick = () =>{
    let a = parseInt(document.getElementById("first_num_input").value, 10);
    let b = parseInt(document.getElementById("second_num_input").value, 10);
    let answer = document.getElementById("answer");
    console.log(answer.value = a+b);
}

