console.log('%c HI', 'color: firebrick')


// document.addEventListener('DOMContentLoad', loadDogImg){
//     .then(function(loadDogImg){
//         return response.json();
//     })
//     .then(function(data)){

//     })
// }
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response){
        return response.json(); 
    })
    .then(function(data){

    })