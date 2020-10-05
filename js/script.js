// Script for contact formular

function validate() { // Function checking if every inputfield with stars are filled

    let name = document.forms["info"]["Navn"]; // Variables of every inputfield
    let phonenumber = document.forms["info"]["Telefonnummer"];
    let email = document.forms["info"]["Email"];

    if (name.value == "") // If the inputfield is empty //
    {
        window.alert("Fulde navn* skal udfyldes"); // If the inputfield is empty, a popup will appear
        name.focus();
        return false;
    }

    if (phonenumber.value == "") {
        window.alert("Telefonnummer* skal udfyldes"); // If the inputfield is empty, a popup will appear
        phonenumber.focus();
        return false;
    }

    if (email.value == "") {
        window.alert("E-mail* skal udfyldes"); // If the inputfield is empty, a popup will appear
        email.focus();
        return false;
    }

    return true; // Only if inputfield with stars are filled, you can press "send"
};

// Intro + slider

const tl = gsap.timeline({defaults: {ease: 'power1.out'} });

tl.to('.text', {y: "0%", duration: 1, stagger: 0.25 });
tl.to('.slider', {y: "-100%", duration: 1.5, delay: 0.5 });
tl.to('.intro', {y: "-100%", duration: 1}, "-=1");
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1})