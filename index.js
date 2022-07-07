//console.log('hello world')

document.querySelector('form').addEventListener('submit', addMovie);
const message= document.querySelector('#message')

function addMovie(event) {
    event.preventDefault();
    let inputField= document.querySelector('input')

    const movie= document.createElement('li')

    const movieTitle=document.createElement('span');
     movieTitle.textContent=inputField.value; //value of input field
    movieTitle.addEventListener('click', crossOffMovie);

    movie.appendChild(movieTitle) 

    
    let deleteBtn=document.createElement('button');
    deleteBtn.textContent='X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);

   const list= document.querySelector('ul');
   list.appendChild(movie);

   inputField.value='' ////clears the input field when clicked 
    }

    function deleteMovie(event){

        message.textContent='Movie deleted!'
        event.target.parentNode.remove();
    }

    function crossOffMovie(event) {
        event.target.classList.toggle('checked')
        if (event.target.classList.contains('checked')=== true) {
            message.textContent='Movie Watched'
        } else {
            message.textContent='Movie added back!'
        }

    }