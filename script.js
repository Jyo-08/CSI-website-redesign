gsap.registerPlugin(ScrollTrigger)
gsap.from(".navbar",{
    y:-100,
    duration:1,
    opacity:0
})

gsap.from(".main-title",{
    scale:0.5,
    opacity:0,
    duration:1.5
})

gsap.from(".subtitle",{
    y:50,
    opacity:0,
    duration:1,
    delay:0.5
})
gsap.fromTo(".hero-btn",
    {
        y:50,
        opacity:0
    },
    {
        y:0,
        opacity:1,
        duration:1,
        delay:1,
        clearProps:"transform,opacity"
    }
);
gsap.from(".section-title",{
    scrollTrigger:{
        trigger:".section-title",
        start:"top 80%"
    },

    y:100,
    opacity:0,
    duration:1
})

gsap.from(".section-text",{
    scrollTrigger:{
        trigger:".section-text",
        start:"top 80%"
    },

    y:100,
    opacity:0,
    duration:1,
    delay:0.3
})
const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
});

gsap.set(".about-card", {
    opacity: 1,
    y: 0
});

gsap.from(".about-card", {
    scrollTrigger: {
        trigger: ".about-cards",
        start: "top 90%",
        toggleActions: "play none none none"
    },
    y: 80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    clearProps: "all"
});

window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});

gsap.from(".events-title",{
    scrollTrigger:{
        trigger:".events-title",
        start:"top 80%"
    },
    y:80,
    opacity:0,
    duration:1
});

gsap.from(".event-card",{
    scrollTrigger:{
        trigger:".events-container",
        start:"top 85%"
    },
    y:100,
    opacity:0,
    duration:0.9,
    stagger:0.2
});

const tiltCards = document.querySelectorAll(".about-card, .event-card");

tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = "";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
    });
});

gsap.set(".event-card", {
    opacity: 1,
    y: 0
});

gsap.from(".event-card", {
    scrollTrigger: {
        trigger: ".events-container",
        start: "top 90%",
        toggleActions: "play none none none"
    },
    y: 80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    clearProps: "all"
});

gsap.fromTo(".event-card",
    {
        y:80,
        opacity:0
    },
    {
        scrollTrigger:{
            trigger:".events-container",
            start:"top 90%",
            toggleActions:"play none none none"
        },
        y:0,
        opacity:1,
        duration:0.8,
        stagger:0.2,
        clearProps:"transform"
    }
);

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 80;

        if(current < target){
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);
        }else{
            counter.innerText = target + "+";
        }
    };

    ScrollTrigger.create({
        trigger: counter,
        start: "top 85%",
        once: true,
        onEnter: updateCounter
    });
});

gsap.fromTo(".domain-card",
    {
        y:80,
        opacity:0
    },
    {
        scrollTrigger:{
            trigger:".domains-container",
            start:"top 90%",
            toggleActions:"play none none none"
        },
        y:0,
        opacity:1,
        duration:0.8,
        stagger:0.2,
        clearProps:"transform"
    }
);

gsap.fromTo(".team-card",
    {
        y:80,
        opacity:0
    },
    {
        scrollTrigger:{
            trigger:".team-container",
            start:"top 90%",
            toggleActions:"play none none none"
        },
        y:0,
        opacity:1,
        duration:0.8,
        stagger:0.2,
        clearProps:"transform"
    }
);

gsap.fromTo(".social-title, .social-text, .social-links, .contact-box",
    {
        y:60,
        opacity:0
    },
    {
        scrollTrigger:{
            trigger:".social-section",
            start:"top 85%"
        },
        y:0,
        opacity:1,
        duration:0.8,
        stagger:0.15,
        clearProps:"transform"
    }
);

function scrollToContact(){
    document.getElementById("contact").scrollIntoView({
        behavior:"smooth"
    });
}