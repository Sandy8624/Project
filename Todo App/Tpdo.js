document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    const date = document.getElementById("date");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        const taskText1 = date.value.trim();
        if (taskText, taskText1 !== "") {
            const li = document.createElement("li");

           
         li.innerHTML = `
              <span>${taskText}</span>
              <span class="date-value">${taskText1}</span>
              <span class="delete">Delete</span>
              <span class="edit">Edit</span>`;

            taskList.appendChild(li);
            taskInput.value = "";
            date.value = "";

            li.querySelector(".delete").addEventListener("click", function () {
                taskList.removeChild(li);
            });
            li.querySelector(".edit").addEventListener("click", function () {
                const editText = (taskInput.value.trim());
                li.firstChild.textContent = editText.trim();
                taskInput.value = "";
            });


        }
    });
});
