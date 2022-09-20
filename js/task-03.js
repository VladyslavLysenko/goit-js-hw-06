const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// var 1

const listEl = document.querySelector(".gallery");
const markup = images.map((image) => `<li class="gallery-item">
<img class="gallery" src=${image.url} alt=${image.alt} /></li>`).join("");
console.log(markup);
listEl.insertAdjacentHTML("beforeend", markup);







// var 2
// const galleryList = document.getElementsByClassName("gallery");
// console.log(galleryList);

// let galleryHtml = "";

// images.forEach(element => {
//   galleryHtml = galleryHtml + `<li ><img class ="gallery-item" src="${element.url}" alt="${element.alt}"></img></li>`;
  

// });


// const firstGallery = galleryList[0];
// console.log(firstGallery);

// firstGallery.insertAdjacentHTML("afterbegin", galleryHtml )



// console.log(galleryHtml);