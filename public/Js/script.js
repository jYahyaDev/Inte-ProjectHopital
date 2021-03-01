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




