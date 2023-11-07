document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                ${taskText}
                <span class="delete">X</span> `;

            li.querySelector(".delete").addEventListener("click", function () {
                taskList.removeChild(li);
            });

            taskList.appendChild(li);
            taskInput.value = "";
        }
    });
});
