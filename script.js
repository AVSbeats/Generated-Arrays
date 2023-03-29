var tableBody = document.querySelector("#dynamic-table tbody");
for (var i = 1; i <= 10; i++) {
var row = document.createElement("tr");
var numberCell = document.createElement("td");
var squareCell = document.createElement("td");
var cubeCell = document.createElement("td");
numberCell.textContent = i;
squareCell.textContent = i * i;
cubeCell.textContent = i * i * i;
row.appendChild(numberCell);
row.appendChild(squareCell);
row.appendChild(cubeCell);
tableBody.appendChild(row);
}