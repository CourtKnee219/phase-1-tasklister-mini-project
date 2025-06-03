document.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementById('create-task-form')
    form.addEventListener('submit', (e) =>{
       e.preventDefault();

       let todoText = document.getElementById("new-task-description").value;
       let priority = document.getElementById("priority").value;
       let dueDate = document.getElementById("due_date").value;

       if (todoText.trim() === "") {
        alert("Task description cannot be empty!");
        return;
        }

       buildToDo(todoText, priority, dueDate);
       form.reset()
    })
});

function buildToDo(todo, priority, dueDate){
    let p = document.createElement('p');
    let btn = document.createElement('button');
    

    if(priority === "high"){
        p.style.backgroundColor = "red"
    } else if(priority === "medium"){
        p.style.backgroundColor = "pink"
    } else if (priority === "low"){
        p.style.backgroundColor = "white"
    };

    btn.addEventListener('click', handleDelete);
    btn.textContent = 'delete';
    btn.style.color = "orange"
    p.textContent = `${todo} (Due: ${dueDate})`;
    p.appendChild(btn);
    document.querySelector('#tasks').appendChild(p)
}

function handleDelete(e){
    e.target.parentNode.remove();
}