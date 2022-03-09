// dom elements 

const imageContainerEl = document.getElementById('image-container')
const loader = document.getElementById('loader')









// unsplasb image api 
const count = 1;
const apikey = 'oEqFxDg3cc7z5ywAbFjc4lw4G-C5dE8usaQ5l0Too3w' // dont steal pl0x
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;

let photosArray = [];


// helper function to set attribbutes on dom elemts
function setAttributes(element, attributes){
    for (const key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}

function displayPhotos(){

    photosArray.forEach((photo) => {
        //create <a> link to unsplash
        const item = document.createElement('a');
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');
        // create image element with api photos
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        const imag = document.createElement('img');
        // imag.setAttribute('src', photo.urls.regular);
        // imag.setAttribute('alt', photo.alt_description);
        // imag.setAttribute('title', photo.alt_description);
        setAttributes(imag, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        })
        // apend our img to the a link and then put them in the container
        item.appendChild(imag);
        imageContainerEl.appendChild(item);


    });



}











async function getPhotos(){


    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        // console.log(photosArray);
    displayPhotos();        
    } catch(error){
        console.log(error);

    }
}






getPhotos();