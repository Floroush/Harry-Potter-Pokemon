// fetch the CSV data
fetch("./slytherin-pokemon-list.csv")
  .then((response) => response.text())
  .then((data) => {
		// split the CSV data into rows and cells
		const rows = data.trim().split("\n");
		const cells = rows.map((row) => row.split(";"));

		// generate the table rows
		const tbody = document.querySelector("#my-table tbody");
		cells.forEach((row, index) => {
			// skip the header row
			if (index === 0) return;

			// create a new table row
			const tr = document.createElement("tr");
			tbody.appendChild(tr);

			// create table cells and add data
			row.forEach((cellData) => {
				const td = document.createElement("td");
				td.textContent = cellData;
				tr.appendChild(td);

				// create classes based on the cell content
				const text = cellData.trim();
				const grass = "Grass-" + text.replace(/\s+/g, "-").toLowerCase();
				td.classList.add(grass);
			});
		});
	});
