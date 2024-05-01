let addTaskButton = document.querySelector(".add-task-button");
let taskContainer = document.querySelector(".task-container");
let input = document.querySelector(".task-input");
let errorMessage = document.querySelector(".error-message");


let addTaskFunction = () => {
    //verific daca inputul este gol
    if(input.value.trim()===""){
        errorMessage.style.display= "block"; //afisez eroare
        return; //ies din functie daca inputul este gol
    }

    errorMessage.style.display="none";//daca inputul nu este gol, atunci nu afisez eroarea

    let newTask = document.createElement('li');

    let p= document.createElement('p');
    p.innerText= input.value;

    let img= document.createElement('img');
    img.setAttribute('src', './images/delete.svg');

    img.addEventListener("click", () => {
        taskContainer.removeChild(newTask);
    });

    p.addEventListener("click", () => {
        p.style.textDecoration = "line-through";
    });

    newTask.appendChild(p);
    newTask.appendChild(img);
    taskContainer.appendChild(newTask);
    p.classList.add("item-paragraf");

    // Resetăm valoarea inputului după adăugarea taskului
    input.value = "";
};


addTaskButton.addEventListener("click", addTaskFunction);