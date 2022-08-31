let TITLE = document.getElementById("nome");
let img = document.getElementById("imgNotFixed");
let input = document.getElementById("input");
let ID_Character = document.getElementById("idpersonagem");
let genero = document.getElementById("genero");
let specie = document.getElementById("specie");
let status = document.getElementById("status");
const URL = "https://rickandmortyapi.com/api/character";

function Pesquisar() {
  if ((input.value > 42) | (input.value < 1)) {
    alert("Está página não existe!. São somente 42 páginas");
    input.focus();
    return;
  }
  if ((ID_Character.value > 19) | (ID_Character.value < 0)) {
    alert("Este ID não existe!");
    return;
  } else if (!ID_Character.value) {
    alert("Digite um ID de personagem");
    return;
  }

  fetch(`https://rickandmortyapi.com/api/character/?page=${input.value}`)
    .then((promise) => promise.json())
    .then((json) => {
      let Data = json.results;
      TITLE.innerHTML = `Nome: ${JSON.stringify(
        Data[`${ID_Character.value}`].name
      ).replace(/"/g, "")}`;
      genero.innerHTML = `Gênero: ${JSON.stringify(
        Data[`${ID_Character.value}`].gender
      ).replace(/"/g, "")}`;
      specie.innerHTML = `Espécie: ${JSON.stringify(
        Data[`${ID_Character.value}`].species
      ).replace(/"/g, "")}`;
      status.innerHTML = `Status: ${JSON.stringify(
        Data[`${ID_Character.value}`].status
      ).replace(/"/g, "")}`;
      img.setAttribute("src", Data[`${ID_Character.value}`].image);
      console.log(Data);
    });
}
