const button= document.getElementById('button');
const jokes= document.getElementById('jokes');


// get jokes from jokeApi

async function getJokes(){
    let joke='';
    const apiUrl= 'https://sv443.net/jokeapi/v2/joke/Programming,Miscellaneous,Pun,Spooky?blacklistFlags=nsfw,religious,political,racist,sexist';

    try{
        const response=await fetch(apiUrl);
        const data=await response.json();
        if(data.setup){
            joke=`${data.setup} ... ${data.delivery}`;
          //  console.log(joke);
        }
        else{
            joke=data.joke;
        }
        // text-to-speech
        jokes.innerText=joke;
        
    }
    catch(error){
        console.log('problemproblem', error);
    }
}

button.addEventListener('click', getJokes);
