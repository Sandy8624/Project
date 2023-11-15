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

        if (taskText !== "") {
            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${taskText}</td>
                <td>${taskDate}</td>
                <td class="status-value">${status}</td>
                <td class="delete">Delete</td>
                <td class="edit">Edit</td>
                <td class="save">Save</td>`;
              
            taskTableBody.appendChild(tr);
            taskInput.value = "";

            tr.querySelector(".delete").addEventListener("click", function () {
                taskTableBody.removeChild(tr);
            });

            tr.querySelector(".edit").addEventListener("click", function () {
                const editInput = document.createElement("input");
                editInput.type = "text";
                editInput.value = tr.firstElementChild.textContent;
              
                tr.firstElementChild.replaceWith(editInput);
            });

            tr.querySelector(".save").addEventListener("click", function () {
                const editedText = tr.querySelector("input").value.trim();
                tr.firstElementChild.replaceWith(document.createTextNode(editedText));
            });
        }
    });
});
