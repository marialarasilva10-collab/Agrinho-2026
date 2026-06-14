// ===============================
// AGRO FORTE SOJA - JAVASCRIPT
// ===============================

// Animação ao rolar a página

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });
},{
    threshold:0.15
});

document.querySelectorAll(".card, .stat, .phase, .tech-box").forEach((el)=>{
    el.classList.add("hidden");
    observer.observe(el);
});

// ===============================
// CONTADOR DE ESTATÍSTICAS
// ===============================

const counters = document.querySelectorAll(".number");

const runCounter = (counter) => {

    const target =
        Number(counter.getAttribute("data-target"));

    let current = 0;

    const increment = target / 150;

    const update = () => {

        current += increment;

        if(current < target){

            counter.innerText =
            Math.floor(current).toLocaleString("pt-BR");

            requestAnimationFrame(update);

        }else{

            counter.innerText =
            target.toLocaleString("pt-BR");

        }

    };

    update();
};

const statsObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            runCounter(entry.target);

            statsObserver.unobserve(entry.target);

        }

    });

},{
    threshold:0.5
});

counters.forEach(counter=>{
    statsObserver.observe(counter);
});

// ===============================
// SCROLL SUAVE MENU
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        const section =
        document.querySelector(
            link.getAttribute("href")
        );

        if(section){

            section.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

        }

    });

});

// ===============================
// HEADER TRANSPARENTE
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.background =
        "rgba(0,0,0,0.55)";

        header.style.backdropFilter =
        "blur(20px)";

    }else{

        header.style.background =
        "rgba(0,0,0,0.15)";

    }

});

// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.cursor = "pointer";
topButton.style.fontSize = "22px";
topButton.style.color = "#fff";
topButton.style.background =
"linear-gradient(135deg,#0f9d58,#65ff9d)";
topButton.style.display = "none";
topButton.style.zIndex = "999";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topButton.style.display = "block";

    }else{

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// ===============================
// EFEITO DIGITAÇÃO NO HERO
// ===============================

const heroTitle =
document.querySelector(".hero h1");

if(heroTitle){

    const originalText =
    heroTitle.textContent;

    heroTitle.textContent = "";

    let index = 0;

    function typeWriter(){

        if(index < originalText.length){

            heroTitle.textContent +=
            originalText.charAt(index);

            index++;

            setTimeout(typeWriter,40);
        }

    }

    typeWriter();

}

// ===============================
// PARALLAX LEVE
// ===============================

window.addEventListener("scroll",()=>{

    const hero =
    document.querySelector(".hero");

    if(hero){

        hero.style.transform =
        `translateY(${window.scrollY * 0.15}px)`;

    }

});