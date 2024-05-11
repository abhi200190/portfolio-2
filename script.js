function myMenuFunction(){
    var menuBth = document.getElementById("myNavMenu");

    if (menuBth.className === "nav-menu"){
        menuBth.className += "responsive";
    } else{
        menuBth.className  = "nav-menu";
    }

}

// dark -----mode----///

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click",()=>{
    body.classList.toggle('dark');
});


//----------------typing efect------------//

var typingEffect = new Typed(".typedText",{
    strings:["Designer","Coder", "Developer"],

    loop:true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay:2000,
    fontsize:8,

})

/////-----------------active link-------//////////

const sections = document.querySelectorAll(".section[id]");

function scrollActive(){
    const scrolly = window.scrollY;

    sections.forEach((current) =>{
        const sectionHeight =current.offsetTop -50,
        
        sectionTop = current.offseTop - 50,
        sectionId = current.getAttribute('id');

        if(scrollY > secctionTop && scrollY <= sectionTop + sectionHeight){
            document
            .querySelector(".nav-menu a[href*=" + sectionId +"]")
            .classList.add("active-link");
        }
        else{
            document
            .querySelector(".nav-menu a[href*=" + sectionId +"]")
            .classList.add("active-link");

        }
    });
}

window.addEventListener('scroll',scrollActive);
