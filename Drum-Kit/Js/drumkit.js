function myFunctionRed() {
    let audio = new Audio("/Sounds/boom.wav");
    audio.play();
    document.body.style.backgroundColor = "red";
    
    
  }

  function myFunctionBlue() {
    document.body.style.backgroundColor = "blue";
    let audio = new Audio("/Sounds/clap.wav");
    audio.play();
  }

  function myFunctionYellow() {
    document.body.style.backgroundColor = "yellow";
    let audio = new Audio("/Sounds/hihat.wav");
    audio.play();
  }

  function myFunctionAqua() {
    document.body.style.backgroundColor = "aqua";
    let audio = new Audio("/Sounds/kick.wav");
    audio.play();
  }

  function myFunctionPurple() {
    document.body.style.backgroundColor = "purple";
    let audio = new Audio("/Sounds/openhat.wav");
    audio.play();
  }

  function myFunctionTurquoise() {
    document.body.style.backgroundColor = "turquoise";
    let audio = new Audio("/Sounds/ride.wav");
    audio.play();
  }

  function myFunctionOrange() {
    document.body.style.backgroundColor = "orange";
    let audio = new Audio("/Sounds/snare.wav");
    audio.play();
  }

  function myFunctionGreen() {
    document.body.style.backgroundColor = "green";
    let audio = new Audio("/Sounds/tink.wav");
    audio.play();
  }

  function myFunctionPink() {
    document.body.style.backgroundColor = "pink";
    let audio = new Audio("/Sounds/tom.wav");
    audio.play();
  }




document.addEventListener('keydown', function (event) {
    // Klavye tuşuna basıldığında bu fonksiyon çalışacak
    let keyPressed = event.key.toUpperCase(); // Basılan tuşun değerini al

    let button;

    switch (keyPressed) {
        case 'A':
            button = document.querySelector('.button button');
            myFunctionRed();
            break;
        case 'S':
            button = document.querySelector('.button button');
            myFunctionBlue();
            break;
        case 'D':
            button = document.querySelector('.button button');
            myFunctionYellow();
            break;
        case 'F':
            button = document.querySelector('.button button');
            myFunctionAqua();
            break;
        case 'G':
            button = document.querySelector('.button button');
            myFunctionPurple();
            break;
        case 'H':
            button = document.querySelector('.button button');
            myFunctionTurquoise();
            break;
        case 'J':
            button = document.querySelector('.button button');
            myFunctionOrange();
            break;
        case 'K':
            button = document.querySelector('.button button');
            myFunctionGreen();
            break;
        case 'L':
            button = document.querySelector('.button button');
            myFunctionPink();
            break;
        default:
            // Farklı bir tuşa basıldığında yapılacak işlemleri ekleyebilirsiniz
            break;
    }
});