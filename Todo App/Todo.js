document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskTableBody = document.getElementById("taskTableBody");
    const statusSelect = document.getElementById("status");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        const currentDate = new Date();
        const taskDate = currentDate.toLocaleDateString();
        const status = statusSelect.value;

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${taskText}</td>
            <td>${taskDate}</td>
            <td class="status-value">${status}</td>
            <td class="actions">
                <button class="delete">Delete</button>
                <button class="edit">Edit</button>
                <button class="save" style="display:none;">Save</button>
            </td>`;

        taskTableBody.appendChild(tr);
        taskInput.value = "";

        const deleteButton = tr.querySelector(".delete");
        const editButton = tr.querySelector(".edit");
        const saveButton = tr.querySelector(".save");
        const statusCell = tr.querySelector(".status-value");

        deleteButton.addEventListener("click", function () {
            taskTableBody.removeChild(tr);
        });

        editButton.addEventListener("click", function () {
            taskInput.value = tr.cells[0].textContent;
            statusSelect.value = statusCell.textContent;
            editButton.style.display = "none";
            saveButton.style.display = "inline-block";
        });

        saveButton.addEventListener("click", function () {
            tr.cells[0].textContent = taskInput.value;
            statusCell.textContent = statusSelect.value;
            taskInput.value = "";
            editButton.style.display = "inline-block";
            saveButton.style.display = "none";
        });
    });
});
