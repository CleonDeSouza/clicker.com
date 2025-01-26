let count = 0, 
buttonwork1 = document.getElementById("btn1"), 
buttonwork2 = document.getElementById("btn2"), 
buttonwork3 = document.getElementById("btn3"), 
buttonwork4 = document.getElementById("btn4"), 
buttonwork5 = document.getElementById("btn5"), 
buttonwork6 = document.getElementById("btn6"), 
buttonwork7 = document.getElementById("btn7"),
numbercount = document.getElementById("num");
console.log("Security Activated!")
console.log("Data Collection Activated!")
console.log("HTML Activated!")
console.log("CSS Activated!")
console.log("JS Activated!")
console.log("icon.png Activated!")

buttonwork1.onclick = function(){
    console.log("Coupled!")
    count = count + 1
    numbercount.textContent = `${count}`;
}

buttonwork2.onclick = function(){
    console.log("Mi-a-nus!")
    count = count - 1
    numbercount.textContent = `${count}`;
}

buttonwork3.onclick = function(){
    console.log("Doubled nothing!")
    count = count * 2
    numbercount.textContent = `${count}`;
}

buttonwork4.onclick = function(){
    console.log("Divided the sea!")
    count = count / 2
    numbercount.textContent = `${count}`;
}

buttonwork5.onclick = function(){
    console.log("Squared the circles!")
    count = count * count
    numbercount.textContent = `${count}`;
}

buttonwork6.onclick = function(){
    console.log("Cubed the numbers like ice!")
    count = count * count * count
    numbercount.textContent = `${count}`;
}

buttonwork7.onclick = function(){
    console.log("A new life!")
    count = 0
    numbercount.textContent = `${count}`;
}
