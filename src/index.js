document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
      form.addEventListener('submit', (e) => {
      e.preventDefault();
      handleToDo(e.target.new_task_description.value)
      form.reset()
      
    
        
  })

})

function handleToDo(text) {
  let li = document.createElement('li')
  let butn = document.createElement('button')
  butn.addEventListener('click', deleteTask);
  butn.textContent = "X"
  li.textContent = `${text    }             `
  li.appendChild(butn)
  document.getElementById('tasks').append(li);


}

function deleteTask(e) {
  e.target.parentNode.remove();
}