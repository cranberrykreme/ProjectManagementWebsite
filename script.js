let counter = 0;
let id = 0;
console.log("hello");

// Selectors
const jobInput = document.querySelector('.input-job');
const jobButton = document.querySelector('.job-button');
const jobList = document.querySelector('.job-list');
const specificJob = document.querySelector('.job-list');


// Event Listeners
jobButton.addEventListener('click', addJob);

// Functions
function addJob(event){
    event.preventDefault();
    if(jobInput.value !== ""){
        // Create labels in the DOM
        const jobDiv = document.createElement('div');
        jobDiv.classList.add('job');
        //jobDiv.setAttribute("ondrop", "drop(event)")
        counter++;
        jobDiv.setAttribute("id", "div" + counter);
        jobDiv.setAttribute("draggable", "true");
        jobDiv.setAttribute("ondragstart","onDragStart(event);");
        //jobDiv.setAttribute("ondrop","dropItem(event);");
        //jobDiv.setAttribute("mousedown", "getId(this.id)");
        //jobDiv.setAttribute("ondragover", "allowDrop(event)")

        // Create job
        const newJob = document.createElement('li');
        newJob.innerHTML = jobInput.value;
        newJob.classList.add('job-item');
        //newJob.setAttribute("draggable","true");
        //newJob.setAttribute("ondragstart","drag(event)");
        newJob.setAttribute("id","drag" + counter);
        jobDiv.appendChild(newJob);

        const newSlider = document.createElement('input');
        newSlider.classList.add('slider');
        newSlider.setAttribute("id", "slide" + counter);
        newSlider.setAttribute("type", "range");
        newSlider.setAttribute("min", "0");
        newSlider.setAttribute("max", "80");
        newSlider.setAttribute("value", "1");
        newSlider.setAttribute("onInput","changeCol(event)");

        jobDiv.appendChild(newSlider);

        console.log(jobInput.value);
        console.log(jobDiv);
        console.log(jobList);


        jobList.appendChild(jobDiv);

        jobInput.value = "";
    }

    //console.log('hello');
}

// ---------------------------- Section for drag and drop ---------------------------------

function onDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    console.log(event.currentTarget);
    //event.currentTarget.style.backgroundColor = 'red';
    //event.target.classList.add('dragging');
}

function onDragOver(event) {
    event.preventDefault();

}

function dropItem(event){
    console.log("this is called");
    event.currentTarget.style.backgroundColor = 'white';
}

function onDrop(event) {
    //event.target.classList.remove('dragging');

    const id = event.dataTransfer.getData('Text');

    const draggableElement = document.getElementById(id);

    //console.log("The target is: " + event.target.classList);

    if(event.target.classList != "job-list"){
        return;
    }

    const dropzone = event.target; // conditional check 

    console.log("The target is: " + event.target);

    dropzone.appendChild(draggableElement);

    event.dataTransfer.clearData();


}

function dropDelete(event) {
    const ID = event.dataTransfer.getData('Text');
    const myObj = document.getElementById(ID);
    myObj.remove();
}

// -------------------------- Slider-colour functions ------------------------------
function changeCol(event){
    const colour = event.target.value;                          // Get the value
    const temp = event.target.id;                               // Get the target ID
    const ident = "drag" + temp.charAt(temp.length -1);         // Get the ID num

    const col = (colour-100) * -1;                              // Set the Slider to get darker when moved to the right

    // Change the background colour of the job
    document.getElementById(ident).style.backgroundColor = `hsl(120, 100%, ${col}%)`;
}