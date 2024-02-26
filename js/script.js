const imgWrapper = document.querySelector('.img-wrapper');
let counter = 0



const images = [
  'assets/img/01.webp',
  'assets/img/02.webp',
  'assets/img/03.webp',
  'assets/img/04.webp',
  'assets/img/05.webp',
]

for(let i = 0; i < images.length; i++){
  const img = images[i];
  console.log(img)
  imgWrapper.innerHTML += `<img class="img hide" src="${img}">`;
}

const itemsCollection = document.getElementsByClassName('img');
console.log('img');

itemsCollection[counter].classList.remove('hide')

const up = document.querySelector('.up');
const down =document.querySelector('.down');

down.addEventListener('click',function(){
  counter--;
  console.log(counter)
})

up.addEventListener('click',function(){
  counter++;
  console.log(counter)
})



