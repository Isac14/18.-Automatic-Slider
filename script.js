const imgs = document.querySelector('#img')
const img = document.querySelectorAll('#img img')

// Initial value
let idx = 0

function caroussel(){
    idx ++
    if(idx > img.length -1){
        idx = 0
    }

    imgs.style.transform = `translateX(${-idx * 600}px)`
}

setInterval(caroussel, 1800)