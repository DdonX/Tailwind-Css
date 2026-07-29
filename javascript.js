// in-line comment after a line of code
/* multi-line comment
Data Types:
undefined: something that hasn't been defined, 
null: nothing,
boolean: true or false,
string: a text,
number,
object.

Variables
var: variable
var number = 6;
let
const: it is a variable that should never change

var myName = "Wisdom"

let OurName = "Snapnet Intern"

const pi = 6

var a; // declairin the variable to be called a
var w = 6; // declairing and assigning the varia ble to be called w and = to 6

a = w;
b = "My name is";

console.log(a)

w = w + 6;
b = b = "Wisdom!"; */

/*
console.log(document);
console.dir(document); // it shows all the differentt tproperties and methods attached to the document object
console.log(document.images); // it shows all the images in the document
console.log(document.domain); // it shows the domain of the document
console.log(document.doctype); // it shows the doctype
console.log(document.head); // it shows everythin in the head element
*/
document.addEventListener("DOMContentLoaded", () => {
function initCounters() {
    const counters = document.querySelectorAll(".stat-number");
    const duration = 2000;

    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute("data-target"), 10);
        const suffix = counter.getAttribute("data-suffix") || "";
        const startTime = performance.now();

        const updateCount = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Calculate current number
            const currentCount = Math.floor(progress * target);
            counter.innerText = currentCount + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target + suffix;
            }
        };

        requestAnimationFrame(updateCount);
    };

    // IntersectionObserver with a safer threshold (0.1 = 10% visible)
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target); // Animate once
            }
        });
    }, { threshold: 0.1 });

    counters.forEach(counter => observer.observe(counter));
}

// Safely execute regardless of script load order
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCounters);
} else {
    initCounters();
}
    // Select all brand cards
    const cards = document.querySelectorAll(".brand-card");

    cards.forEach(card => {
        const popup = card.querySelector(".popup-box");
        if (!popup) return;

        // Show popup text box on mouse hover
        card.addEventListener("mouseenter", () => {
            popup.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
            popup.classList.add("opacity-100", "translate-y-0");
        });

        // Hide popup text box when mouse leaves
        card.addEventListener("mouseleave", () => {
            popup.classList.remove("opacity-100", "translate-y-0");
            popup.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
        });
    });
});