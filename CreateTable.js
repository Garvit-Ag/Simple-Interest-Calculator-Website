let Amount = document.querySelector("#Amount");
let Rate = document.querySelector("#Rate");
let Initial = document.querySelector("#Initial");
let Final = document.querySelector("#Final");
let One = document.querySelector("#One");
let table = document.querySelector("#table");
One.onclick = function (){
    let time = Final.value - Initial.value;
    let FinalAmount = Amount.value*Rate.value*time/100;
    alert("Final Amount = "+FinalAmount );
    let row = document.createElement("tr");
    // Create cells
    let c1 = document.createElement("td")
    let c2 = document.createElement("td")
    let c3 = document.createElement("td")
    let c4 = document.createElement("td")
    let c5 = document.createElement("td")
    // Insert data to cells
    c1.innerText = Amount.value;
    c2.innerText = Rate.value;
    c3.innerText = Initial.value;
    c4.innerText = Final.value;
    c5.innerText = "Interest:"+FinalAmount;
    // Append cells to row
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    row.appendChild(c5);    
    // Append row to table body
    table.appendChild(row);
}