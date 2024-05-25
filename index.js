document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fetch-cat-fact').addEventListener('click', fetchCatFact);
    document.getElementById('fetch-dog-image').addEventListener('click', fetchDogImage);
    document.getElementById('fetch-joke').addEventListener('click', fetchJoke);
});

/**
 * Fetches a random cat fact and displays it
 */
function fetchCatFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            document.getElementById('cat-fact').innerText = data.fact;
        })
        .catch(error => {
            console.error('Error fetching cat fact:', error);
        });
}

/**
 * Fetches a random dog image and displays it
 */
function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const dogImage = document.getElementById('dog-image');
            dogImage.src = data.message;
            dogImage.style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching dog image:', error);
        });
}

/**
 * Fetches a random joke and displays it
 */
function fetchJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any')
        .then(response => response.json())
        .then(data => {
            const jokeElement = document.getElementById('joke');
            if (data.type === 'single') {
                jokeElement.innerText = data.joke;
            } else {
                jokeElement.innerText = `${data.setup} - ${data.delivery}`;
            }
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
}

