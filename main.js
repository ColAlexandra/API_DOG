const getDog = () => {
    fetch('https://api.thedogapi.com/v1/images/search')

        .then(response => response.json())
        .then(value=> showDog(value));


    const showDog = (dog) => {
        const resultArea = document.querySelector('.dog');
        resultArea.innerHTML = `<img src='${dog[0].url}'>`
    };
};
document.querySelector('button').addEventListener('click', getDog)
