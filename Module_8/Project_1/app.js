const closedFace = document.querySelector('.closed')
const openFace = document.querySelector('.open')

//Add event listener
closedFace.addEventListener('click', () => {
    if (openFace.classList.contains('open')) {
        openFace.classList.add('active');
        closedFace.classList.remove('active');
    }
});

openFace.addEventListener('click', () => {
    if (closedFace.classList.contains('closed')) {
        closedFace.classList.add('active');
        openFace.classList.remove('active');
    }
});

// Add event Listener for Second Icon

let iconEgg = document.querySelector('.egg')
let iconChick = document.querySelector('.chick')

iconEgg.addEventListener('click', () => {
    if (iconChick.classList.contains('chick')) {
        iconChick.classList.add('click');
        iconEgg.classList.remove('click');
    }
});

iconChick.addEventListener('click', () => {
    if (iconEgg.classList.contains('egg')) {
        iconEgg.classList.add('click');
        iconChick.classList.remove('click');
    }
});




