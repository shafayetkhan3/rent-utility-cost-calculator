// Add a new row to a table
function addRow(tableId) {
  const table = document.getElementById(tableId);
  const newRow = table.insertRow();
  const cols = table.rows[0].cells.length;

  // Add serial number
  const serialCell = newRow.insertCell(0);
  serialCell.textContent = table.rows.length - 1;

  // Add editable cells
  for (let i = 1; i < cols - 1; i++) {
    const cell = newRow.insertCell(i);
    cell.contentEditable = "true";
    //cell.textContent = "0";
  }

  // Add total cell
  const totalCell = newRow.insertCell(cols - 1);
  totalCell.textContent = "0";
}

// Add a new column to a table
function addColumn(tableId) {
  const table = document.getElementById(tableId);
  const cols = table.rows[0].cells.length;

  // Update header row
  const headerCell = table.rows[0].insertCell(cols - 1);
  headerCell.contentEditable = "true";
  headerCell.textContent = `New Column`;

  // Update all other rows
  for (let i = 1; i < table.rows.length; i++) {
    const cell = table.rows[i].insertCell(cols - 1);
    cell.contentEditable = "true";
    //cell.textContent = "0";
  }
}

// Calculate totals for Box 1
function calculateTotals() {
  const table = document.getElementById("table1");
  for (let i = 1; i < table.rows.length; i++) {
    const row = table.rows[i];
    let total = 0;

    // Sum all numeric values except for the first and last columns
    for (let j = 2; j < row.cells.length - 1; j++) {
      total += parseFloat(row.cells[j].textContent) || 0;
    }

    // Set the total in the last cell
    row.cells[row.cells.length - 1].textContent = total;
  }
  //alert("Totals calculated manually!");
}
