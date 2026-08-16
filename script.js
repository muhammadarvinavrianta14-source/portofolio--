/* =========================
   TYPING EFFECT
========================= */

const typingElement =
    document.getElementById("typing");


const texts = [
    "Pelajar SMK",
    "Web Developer Sepuh",
    "Programmer",
    "Proplayer"
];


let textIndex = 0;
let charIndex = 0;
let deleting = false;


function typingEffect() {

    const currentText =
        texts[textIndex];


    if (!deleting) {

        typingElement.textContent =
            currentText.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (charIndex === currentText.length) {

            deleting = true;

            setTimeout(
                typingEffect,
                1500
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentText.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            textIndex =
                (textIndex + 1) % texts.length;

        }

    }


    setTimeout(
        typingEffect,
        deleting ? 50 : 100
    );

}


typingEffect();



/* =========================
   MOBILE MENU
========================= */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener(
    "click",
    function() {

        navMenu.classList.toggle(
            "open"
        );

    }
);


/* =========================
   CLOSE MENU
========================= */

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach(
    function(link) {

        link.addEventListener(
            "click",
            function() {

                navMenu.classList.remove(
                    "open"
                );

            }
        );

    }
);



/* =========================
   DARK / LIGHT MODE
========================= */

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener(
    "click",
    function() {

        document.body.classList.toggle(
            "light"
        );


        if (
            document.body.classList.contains(
                "light"
            )
        ) {

            themeBtn.textContent = "☀️";

        } else {

            themeBtn.textContent = "🌙";

        }

    }
);



/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;


    revealElements.forEach(
        function(element) {

            const elementTop =
                element.getBoundingClientRect().top;


            if (
                elementTop <
                windowHeight - 100
            ) {

                element.classList.add(
                    "show"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();



/* =========================
   SKILL PROGRESS
========================= */

const skillBars =
    document.querySelectorAll(
        ".skill-progress"
    );


function animateSkills() {

    skillBars.forEach(
        function(bar) {

            const position =
                bar.getBoundingClientRect().top;


            if (
                position <
                window.innerHeight - 100
            ) {

                bar.style.width =
                    bar.dataset.width;

            }

        }
    );

}


window.addEventListener(
    "scroll",
    animateSkills
);


animateSkills();



/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


window.addEventListener(
    "scroll",
    function() {

        let current = "";


        sections.forEach(
            function(section) {

                const sectionTop =
                    section.offsetTop - 150;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            function(link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) === "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);



/* =========================
   BACK TO TOP
========================= */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener(
    "scroll",
    function() {

        if (
            window.scrollY > 500
        ) {

            topBtn.classList.add(
                "show"
            );

        } else {

            topBtn.classList.remove(
                "show"
            );

        }

    }
);


topBtn.addEventListener(
    "click",
    function() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);



/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value;


        alert(
            "Terima kasih, " +
            name +
            "! Pesan kamu sudah diisi. 🚀"
        );


        contactForm.reset();

    }
);

const projectButtons =
    document.querySelectorAll(".project-btn");


projectButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                alert(
                    "Project ini sedang dalam tahap pengembangan 🚀"
                );

            }
        );

    }
)
