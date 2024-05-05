function work(){ 
    let input = document.getElementById("diasUberiTelefon") 
    let name = input.value; 
    let newText = document.createElement("h2"); 
    newText.innerHTML = "Привет, " + name + "! В Алматы прилетел метеор, на котором сидел инопланетянин, твои действия:"; 
    let gamebox = document.getElementById("gamebox"); 
    gamebox.appendChild(newText) 
    
    let action = document.createElement("input")
    action.classList.add("knopka")
    action.placeholder="Ваши действия";
    action.id=("actionInput")
    gamebox.appendChild(action)
    let check = document.createElement("a")
    check.classList.add("knopka")
    check.innerHTML="Accept"
    check.setAttribute("onclick", "work1()")
    gamebox.appendChild(check)
}
function work1(){ 
    let actionInput = document.getElementById("actionInput");
    let action = actionInput.value.toLowerCase();
    let gamebox = document.getElementById("gamebox");
    let resultText = document.createElement("h2");
    gamebox.appendChild(actionInput);
    if (action === "спасу город") { 
        resultText.innerHTML = "Это правильный ответ, ты выиграл!";
    } else {
        resultText.innerHTML = "Неправильный выбор. Ты проиграл!";
    }
    gamebox.appendChild(resultText);
    setTimeout(function() {
        location.reload();
    }, 5000);
}