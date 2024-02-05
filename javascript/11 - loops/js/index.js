for(let i = 0; i<= 100; i++){
    console.log(i)
}

for(let i = 1900; i<=2024;i++){
    document.getElementById("ano").innerHTML += 
    "<option value='" + i + "'>" + i + "</option>";
 }