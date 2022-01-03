const inputAdd = document.getElementById('input-add');
const buttonAdd = document.getElementById('button-add');
const toDoContainer = document.getElementById('to-do-container');
const completeContainer = document.getElementById('complete-container');

// Create New Tasks

buttonAdd.addEventListener('click', createTask);

function createTask(e) {
	e.preventDefault();
	if(inputAdd.value.length < 1) {
		alert('Enter New Task');
	} else {
		//Create Li
		let newTask = inputAdd.value;
		const li = document.createElement('li');
		li.className = "list-group-item d-flex justify-content-start";
		const input = document.createElement('input');
		input.className = "p-0 m-0 flex-grow-1 border-0";
		input.setAttribute('readonly', 'readonly');
		input.setAttribute('type', 'text');
		input.setAttribute('value', newTask);
		li.appendChild(input);

		//Create Complete Button
		const doneButton = document.createElement('button');
		doneButton.setAttribute('type', 'button');
		doneButton.className = "btn btn-sm btn-success w-2 pt-0 pb-1";
		const iCheck = document.createElement('i');
		iCheck.className = "bi bi-check";
		doneButton.appendChild(iCheck);
		li.appendChild(doneButton);

		//Create Delete Button
		const deleteButton = document.createElement('button');
		deleteButton.setAttribute('type', 'button');
		deleteButton.className = "btn btn-sm btn-danger w-2 mx-1 pt-0 pb-1";
		const iX = document.createElement('i');
		iX.className = "bi bi-x";
		deleteButton.appendChild(iX);
		li.appendChild(deleteButton);

		//Create Edit Button
		const editButton = document.createElement('button');
		editButton.setAttribute('type', 'button');
		editButton.className = "btn btn-sm btn-secondary pt-0 pb-1";
		const iEdit = document.createElement('i');
		iEdit.className = "bi bi-pencil-square";
		editButton.appendChild(iEdit);
		li.appendChild(editButton);

		//Create Save Button
		const saveButton = document.createElement('button');
		saveButton.setAttribute('type', 'button');
		saveButton.className = "btn btn-sm btn-primary pt-0 pb-1";
		const saveText = document.createTextNode('Save');
		saveButton.appendChild(saveText);

		toDoContainer.appendChild(li);
		inputAdd.value = "";


		//Complete Button Functionality
		doneButton.addEventListener('click', () => {
			let completeLi = doneButton.parentElement;
			if(completeLi.parentElement === toDoContainer) {
				completeLi.remove();
				doneButton.children[0].classList.remove('bi-check');
				doneButton.children[0].classList.add('bi-arrow-clockwise');
				completeContainer.appendChild(completeLi);
				editButton.remove();
			} else {
				completeLi.remove();
				doneButton.children[0].classList.remove('bi-arrow-clockwise');
				doneButton.children[0].classList.add('bi-check');
				toDoContainer.appendChild(completeLi);
				completeLi.appendChild(editButton);
			}			
		});

		//Delete Button Functionality
		deleteButton.addEventListener('click', () => {
			deleteButton.parentElement.remove();
		});

		//Edit Button Functionality
		editButton.addEventListener('click', () => {
			doneButton.remove();
			deleteButton.remove();
			editButton.remove();
			input.removeAttribute('readonly', 'readonly');
			input.classList.remove('border-0');
			input.classList.add('border', 'me-2');
			input.parentElement.appendChild(saveButton);
		});

		//Save Button Functionality
		saveButton.addEventListener('click', () => {
			newValue = input.value;
			input.setAttribute('readonly', 'readonly');
			input.classList.add('border-0');
			input.classList.remove('border', 'me-2');
			input.removeAttribute('value', newTask);
			input.setAttribute('value', newValue);
			saveButton.remove();
			input.parentElement.appendChild(doneButton);
			input.parentElement.appendChild(deleteButton);
			input.parentElement.appendChild(editButton);
		})
	}
}

