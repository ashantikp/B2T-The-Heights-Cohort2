	//global variable: create empty array
			var queue = []
			
			// create function to push values to the array
			function addOrder(){
				
				var newRow = document.createElement("TR");

				// create child nodes for newRow;
				var rowCell1 = newRow.insertCell(0);
				var rowCell2 = newRow.insertCell(1);
				var rowCell3 = newRow.insertCell(2);
					
				// assign input values from customer to variables
				var custName = document.getElementById("custName").value;
				var custOrder = document.getElementById("custOrder").value;

				// append newRow to "queueTable"
				document.getElementById("queueTable").appendChild(newRow);

				//push values into array
				queue.push({
				"name": custName, 
				"order": custOrder
				});
				
				// cell content in the DOM
				rowCell1.innerHTML = queue.length
				rowCell2.innerHTML = custName;
				rowCell3.innerHTML = custOrder;

				// clears display message above table
				document.getElementById("message").innerHTML = ""
			
				// clear input text box onclick
				document.getElementById("custName").value = "";
				document.getElementById("custOrder").value = "";
				
			}

			// create customer served function
			function custServed(){

				var table = document.getElementById("queueTable");

				//remove customer from queue
				table.deleteRow(1);
	
				//display who was served in the DOM. Final message not displaying 
				if(queue.length !== 0){
					document.getElementById("message").innerHTML = queue[0].name + " was served " + queue[0].order;

				}else{
					document.getElementById("emptyQueue").innerHTML = "There is no one waiting to be served.";
				}

				// remove object from front of the array 
				queue.shift();

				// display new customer position 
				var rows = document.getElementsByTagName("tr");
				for(var i = 1; i < rows.length; i++){

					rows[i].children[0].innerHTML = rows[i].rowIndex;
				} 
			}