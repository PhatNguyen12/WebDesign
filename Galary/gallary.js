function upDate(previewPic) {
    document.getElementById('image').innerHTML = previewPic.alt;
    document.getElementById('image').style.backgroundImage = "url(" + previewPic.src + ")";
    console.log('Mouse over event triggered');
}

function unDo() {
    document.getElementById('image').style.backgroundImage = "url('')"
    document.getElementById('image').innerHTML = 'Check out my favourite Champion on League Of Legends';
    console.log('Mouse over event triggered');
}
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('mouseover', function() {
            upDate(this);
        });
        
        images[i].addEventListener('mouseout', function() {
            unDo();
        });
        
        images[i].addEventListener('focus', function() {
            console.log("Focus event triggered.");
            upDate(this);
        });
        
        images[i].addEventListener('blur', function() {
            console.log("Blur event triggered.");
            unDo();
        });
    }
});
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});