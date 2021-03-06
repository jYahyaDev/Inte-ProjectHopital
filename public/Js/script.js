const ElBtnServ = document.querySelectorAll('.g-serv__btn');

function visible(){
        this.classList.toggle('visible')
    console.log(this)
        let ELNext = this.nextElementSibling;
        console.log(ELNext);
        ELNext.style.display === "block" ? ELNext.style.display = "none" : ELNext.style.display = "block";
    }

    ElBtnServ.forEach((btn)=> {
        btn.addEventListener('click',visible)

    })

/* INTERSECTION OBSERVER API */

let observer = new IntersectionObserver(function(entries){
    entries.forEach(entry=>{
        if(entry.intersectionRatio>0.2){
            entry.target.classList.remove('invisible');
            entry.target.classList.add('animation');
        }

    })

}, {
    threshold: 0.5
})

let titre = document.querySelector('.g-about');


observer.observe(titre);
