const url = 'https://66e804dab17821a9d9dafd1c.mockapi.io/Lab2'; 
const imageForm = document.getElementById('imageForm');
const container = document.getElementById('container');

function displayImages(image) {

  const items = document.createElement('div');
  items.classList.add('image-item');

  items.innerHTML=`
    <p>${image.name}</p>
    <img src="${image.imageUrl}" alt="${image.name}" style="max-width:200px; height:auto;">`;

  container.appendChild(items);
}

function loadImages(){
  fetch(url)
    .then(response=>response.json())
    .then(images=>{
      images.forEach(image=>{
        displayImages(image); 
      });
    })
}

function addImage(event) {
    event.preventDefault(); 
  
    const name = document.getElementById('imageName').value;
    const imageUrl = document.getElementById('imageUrl').value;
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'}
        ,
      body: JSON.stringify({name,imageUrl})
    })
      .then(response => response.json())
      .then(newImage=>{
        displayImages(newImage); 
        imageForm.reset(); 
      });
  }
  
window.onload = loadImages;
imageForm.addEventListener('submit', addImage);

