// Array of images
let catsImages = [
    "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
    "https://e3.365dm.com/21/03/768x432/skynews-cats-missing-microchip_5315182.jpg?20210323142004",
    "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fc3836660-7846-11eb-80c3-8cc375faed89.jpg?crop=5729%2C3222%2C187%2C805&resize=1200",
    "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/petting_pet_cat-1296x728-header.jpg?w=1155&h=1528",
    "https://lh3.googleusercontent.com/pw/AL9nZEXYJlrVkYoKIkpx07_3F4HOiTiOheaoaiRAcwrUg3C613-jkzEubJ3k8Z9fDjG5IfVqCzorphZ00vp6mIyB79GtCsoyV69xXe9cqrA0zglgrcvYhH2UP4cDR88WTm1AmuyCxQHAWCB5JzKD7eD94dtNZA=w690-h920-no"
  ];
  
  let randomColours = ["Red", "Aqua", "Purple", "Green", "Blue"];
  
  let randomRotations = ["vertical-rl", "horizontal-tb", "vertical-lr"];
  
  let randomImageRotations = [
    "rotate(45deg)",
    "rotate(0)",
    "rotate(-0.25turn)",
    "rotate(3.142rad)",
  ];
  
  // Function to get a random element from an array
  function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Reverse through array of images
  const imgs = document.getElementsByTagName("img");
  for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * catsImages.length);
    imgs[i].src = catsImages[randomImg];
  
    // Rotating images
    let randomImageRotation = getRandomElement(randomImageRotations);
    imgs[i].style.transform = randomImageRotation;
  }
  
  // Do the same for h1 elements
  const headers = document.getElementsByTagName("h1");
  for (let i = 0; i < headers.length; i++) {
    headers[i].innerText = "Cats are awesome.";
  
    // Randomize the text's colors
    let randomColor = getRandomElement(randomColours);
    headers[i].style.color = randomColor;
  }
  
  // Do the same for p elements
  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].innerText = "This website is now about cats.";
  
    // Randomize the text's colors
    let randomColor = getRandomElement(randomColours);
    paragraphs[i].style.color = randomColor;
  
    // Randomize the direction for the text
    let randomRotation = getRandomElement(randomRotations);
    paragraphs[i].style.writingMode = randomRotation;
  }
  
  // When you click on the page, cat noises are played
  let catNoises = [
    "https://bigsoundbank.com/UPLOAD/mp3/1896.mp3",
    "https://bigsoundbank.com/UPLOAD/mp3/1895.mp3",
    "https://bigsoundbank.com/UPLOAD/mp3/1892.mp3",
  ];
  
  document.body.addEventListener("click", () => {
    const randomMeow = Math.floor(Math.random() * catNoises.length);
    let audio = new Audio(catNoises[randomMeow]);
    audio.play();
  });
  document.body.addEventListener("click", () => {
    console.log("Clicked on the page");  // Check if the click event is triggered
    const randomMeow = Math.floor(Math.random() * catNoises.length);
    console.log("Selected audio URL:", catNoises[randomMeow]);  // Check which audio URL is selected
    let audio = new Audio(catNoises[randomMeow]);
    audio.play();
  });
  
  // Randomize the background color
  let randomColor = getRandomElement(randomColours);
  document.body.style.background = randomColor;
  