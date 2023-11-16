const task_input_field = document.getElementById("task-input-field");
const task_list = document.getElementById("task-list");

function add_task()
{
    if(task_input_field.value === '')
        alert("Input field empty...")
    
    else
    {
        let list_item = document.createElement("li");
        list_item.innerHTML = task_input_field.value;
        
        let delete_button = document.createElement("button");
        delete_button.innerHTML = "Delete task";
        delete_button.classList.add("delete-button");
        delete_button.onclick = function() {
            list_item.remove();
        };
        
        list_item.appendChild(delete_button);
        task_list.appendChild(list_item);
        task_input_field.value = "";
    }
}