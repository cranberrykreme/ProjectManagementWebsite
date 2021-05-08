// Selectors
const jobInput = document.querySelector('.input-job');
const jobButton = document.querySelector('.job-button');
const jobList = document.querySelector('.job-list');


// Event Listeners
jobButton.addEventListener('click', addJob);

// Functions
function addJob(event){
    event.preventDefault();

    //console.log('hello');

    // Create labels in the DOM
    const jobDiv = document.createElement('div');
    jobDiv.classList.add('job');

    // Create job
    const newJob = document.createElement('li');
    newJob.innerHTML = jobInput.value;
    newJob.classList.add('job-item');
    jobDiv.appendChild(newJob);
    console.log(jobInput.value);
    console.log(jobDiv);
    console.log(jobList);

    jobList.appendChild(jobDiv);

    jobInput.value = "";
}