document.getElementById("dataForm");
dataForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  var bpm = document.getElementById("bpm").value;

  var table = document.getElementById("dataTable");
  var row = dataTable.insertRow(-1);

  var nameCell = row.insertCell(0);
  var heightCell = row.insertCell(1);
  var weightCell = row.insertCell(2);
  var bpmCell = row.insertCell(3);

  nameCell.innerHTML = name;
  heightCell.innerHTML = height;
  weightCell.innerHTML = weight;
  bpmCell.innerHTML = bpm;

  if (height > 180 || weight > 80 || bpm >= 120) {
    row.classList.add("red-border");
  } else {
    row.classList.add("green-border");
  }

  document.getElementById("dataForm").reset();
});
