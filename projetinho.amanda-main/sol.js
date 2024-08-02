const characters = [
    {
      nome: "Bob Esponja",
      img: "bobesponja.png"
    },

    {
      nome: "Cebolinha",
      img: "Cebolinha.png"
    },
    {
      nome: "Finn",
      img: "finn.jpeg"
    },
    
    {
      nome: "Jake",
      img: "jake.png"
    },
    {
      nome: "Alegria",
      img: "joyalegria.jpg"
    },
    {
      nome: "Marceline",
      img: "marceline.webp"
    },
   
    {
      nome: "Mônica",
      img: "monica.png"
    },
    {
      nome: "Nemo",
      img: "nemo.png"
    },
    {
      nome: "Princesa Jujuba",
      img: "PrincesaJujuba.webp"
    },
    {
      nome: "Raiva",
      img: "Raiva.webp"
    },
    {
      nome: "Rapunzel",
      img: "rapunzel.jpeg"
    },
    {
      nome: "Scooby Doo",
      img: "Scooby.jpg"
    },
   
    {
      nome: "Moana",
      img: "moana.jpeg"
    },
    {
      nome: "Goku",
      img: "goku.jpeg"
    },
   
    {
      nome: "Gru",
      img: "gru.webp"
    },
    {
      nome: "Goku",
      img: "goku.jpeg"
    },
    {
      nome: "Homem Aranha",
      img: "homemaranha.jpeg"
    },
    {
      nome: "Moana",
      img: "moana.jpeg"
    },
  
    {
      nome: "Elsa",
      img: "elza.png"
    },

  ];
  
  var indexNumber = 0;
  
  function newCharacter() {
    var imagem = document.getElementById("imagem");
    var display = document.getElementById("resposta").style.display;
    indexNumber = Math.floor(Math.random() * characters.length);
    imagem.src = characters[indexNumber].img ;
    if (display == "block") {
      changeDisplay("resposta");
    }
  }
  
  newCharacter();
  
  function changeDisplay(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none") document.getElementById(el).style.display = "block";
    else document.getElementById(el).style.display = "none";
  }
  
  function discover() {
    var inputName = document.getElementById("inputname").value;
  
    if (inputName.length) {
      if (inputName.toLowerCase() == characters[indexNumber].nome.toLowerCase()) {
        document.getElementById("resposta").style.display = "block";
        document.getElementById("resposta").innerHTML = "Você acertou 🥳";
      } else {
        changeDisplay("resposta");
        document.getElementById("resposta").style.display = "block";
        document.getElementById("resposta").innerHTML = "Tente outra vez";
      }
    } else {
      changeDisplay("resposta");
      document.getElementById("resposta").innerHTML = "Coloque algum nome válido";
    }
  }
  