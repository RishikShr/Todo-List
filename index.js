    //SELECTORS

    const todoInput = document.querySelector('.todo-input');
    const todoButton = document.querySelector('.todo-button');
    const todoList= document.querySelector('.todo-list');
    // const filterOption = document.querySelector('.filter-todo');

    //EVENT LISTENER
    
    todoButton.addEventListener('click',addTodo);
    todoList.addEventListener('click',deleteCheck);
    // filterOption.addEventListener('click', filterTodo);

     //Functions

    function addTodo(event){
        // Prevent form from submitting
        event.preventDefault();

    // !To Create Div

    const todoDiv= document.createElement('div');
    todoDiv.classList.add('todo');

    //Create Li

    const newTodo = document.createElement('li');
    newTodo.innerText =todoInput.value;                        //!Input 
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);


    // CHeck MArk Button

    const completedButton = document.createElement('button');
    completedButton.innerHTML= '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // CHeck Trash Button

    const trashButton = document.createElement('button');
    trashButton.innerHTML= '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

     // Append To List 

    todoList.appendChild(todoDiv);      

    // Clear input value
      todoInput.value="";
 }  
   
   // Function Delete Check

   function deleteCheck(event){
    //  console.log(event.target);


    //! HELLLPPPPP

    const item = event.target;

 
    if(item.classList[0] === 'trash-btn')
    {
        const todo = item.parentElement;
        
        // !Animation
        todo.classList.add('fall');
         
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });


    }

     // Check Mark
     if(item.classList[0] === 'complete-btn'){
         const todo = item.parentElement;
         todo.classList.toggle('completed'); 
     }


    }

// function filterTodo(e){
//     const todos = todoList.childNodes;
    
//     todos.forEach(function(todo){
//          // use checkbox
          
//     switch (e.target.value) {
//         case "all":
//              todo.style.display = "flex";
//             break;
//            case "completed":
//             if (todo.classList.contains('completed')) {
//                  todo.style.display = "flex";
//             } else {
//                  todo.style.display = "none";
//             }
//             break;
//             case "uncompleted":
//                 if(!todo.classList.contains('completed')){
//                     todo.style.display = "flex";
//                 }
//                 else{
//                     todo.style.display = "none";
//                 }
//      break;
//     }  

//     });
// }
