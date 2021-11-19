const searchBtn = document.getElementById('search-btn'); // search button
const inputField = document.getElementById('name-input'); // search field input
const nameScreen = document.getElementById('name-screen'); //name-screen
const imageScreen = document.getElementById('main-screen'); // image screen
const aboutScreen = document.getElementById('about-screen'); // about-text screen
const typeScreen = document.getElementById('type-screen'); // type screen
const idScreen = document.getElementById('id-screen'); // spices screen


// buttons
let number = document.querySelectorAll(".number")
let tela = document.querySelector(".white-square")
let bottomYellow = document.querySelector("#bottom-yellow")



// adicionando o evento de click para os números =========================
number.forEach( numero => {
  
  numero.addEventListener("click", () => {
    tela.textContent += numero.textContent
    
    if(tela.textContent.length > 3){
      tela.textContent = "";
    }
    
  })

})

//pegando os números e verificando o pokemon ======================

bottomYellow.addEventListener("click", () =>{

  let pokemon = tela.textContent

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  .then((response) => response.json())
  .then((data) => {
    let id = ('00' + data.id).slice(-3);
    imageScreen.style.backgroundImage = `url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png')`;
    nameScreen.innerHTML = data.name;
    typeScreen.innerHTML = data.types[0].type.name;
    idScreen.innerHTML = `#${data.id}`;
    aboutScreen.innerHTML = `Height: ${data.height * 10}cm Weight: ${
      data.weight / 10
    }kg`;
    inputField.value = '';
  });

  tela.textContent = "";

})





// inputField.addEventListener(
//   'keydown',
//   (event) => event.key === 'Enter' && searchBtn.click()
// );
// searchBtn.addEventListener('click', () => getPokemonData(inputField.value));
