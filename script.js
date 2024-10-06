// Function to handle the animations for the home section
function homeAnimations() {
    let tl = gsap.timeline();

    // Animation for the ".front" element
    tl.from(".front", {
        y: 1000,            // Start 1000px below the screen
        duration: 1         // Duration of 1 second
    });

    // Animation for the "#coffeec" element
    tl.from("#coffeec", {
        y: 800,             // Start 800px below the screen
        duration: 1,        // Duration of 1 second
        scale: 2            // Scale from 2x size to normal
    });

    // Animation for the header inside the ".front" element
    tl.from(".front h1", {
        y: 1000,            // Start 1000px below the screen
        duration: 1         // Duration of 1 second
    });

    // Sequential animations for the coffee beans elements
    tl.from("#coffeb1", { y: 800, duration: 1, scale: 2 });
    tl.from("#coffeb2", { y: 800, duration: 1, scale: 2 });
    tl.from("#coffeb3", { y: 800, duration: 1, scale: 2 });
    tl.from("#coffeb4", { y: 800, duration: 1, scale: 2 });
    tl.from("#coffeb5", { y: 800, duration: 1, scale: 2 });
}

// Function to handle the animations for the "about" section
function aboutAnimations() {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#about",    // Element to trigger animation
            scroller: "body",     // Scrolling element
            scrub: 2,             // Smooth scroll scrub
            // markers: true,        // Debug markers to visualize start and end points
            start: "0% 90%",      // Animation starts when the top of "#about" is 90% into view
            end: "50% 50%"        // Animation ends when "#about" reaches 50% into view
        }
    });

    // Animation to move the "#coffeec" element
    tl2.to("#coffeec", {
        left: 70,          // Move to the left 70px
        top: 650,          // Move to the top 650px
        scale: 0.99        // Slightly scale down
    }, "same");

    // Animation to move and rotate "#coffeb1"
    tl2.to("#coffeb1", {
        left: 200,         // Move to the left 200px
        top: 650,          // Move to the top 650px
        scale: 0.99,       // Slightly scale down
        rotate: 120        // Rotate by 120 degrees
    }, "same");
}

// Function to handle the animations for the "menu" section
function menuAnimations() {
    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#menu",    // Element to trigger animation
            scroller: "body",    // Scrolling element
            scrub: 2,            // Smooth scroll scrub
            // markers: true,       // Debug markers to visualize start and end points
            start: "0% 90%",     // Animation starts when the top of "#menu" is 90% into view
            end: "50% 50%"       // Animation ends when "#menu" reaches 50% into view
        }
    });

    // Moving and scaling the "#coffeec" and "#coffeb1" elements
    tl3.to("#coffeec", {
        left: 500,        // Move to the left 500px
        top: 1180,        // Move to the top 1180px
        scale: 0.99       // Slightly scale down
    }, "same");

    tl3.to("#coffeb1", {
        left: 650,        // Move to the left 650px
        top: 1180,        // Move to the top 1180px
        scale: 0.9,       // Scale down
        rotate: -120      // Rotate by -120 degrees
    }, "same");

    // Animations for the cans and beans sliding into view
    tl3.from("#can1", { x: -300, duration: 1 }, "same");
    tl3.from("#can2", { x: 300, duration: 1 }, "same");
    tl3.from("#bean1", { x: -300, duration: 1, rotate: 200 }, "same");
    tl3.from("#bean2", { x: 300, duration: 1, rotate: 200 }, "same");
}

// Function to handle the animations for the "contact" section
function contactAnimations() {
    let tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#contact",    // Element to trigger animation
            scroller: "body",       // Scrolling element
            scrub: 2,               // Smooth scroll scrub
            // markers: true,          // Debug markers to visualize start and end points
            start: "0% 90%",        // Animation starts when the top of "#contact" is 90% into view
            end: "50% 50%"          // Animation ends when "#contact" reaches 50% into view
        }
    });

    // Moving the "#coffeec" and "#coffeb1" elements with scale and rotation
    tl4.to("#coffeec", {
        left: 800,        // Move to the left 800px
        top: 1900,        // Move to the top 1900px
        duration: 1,      // Duration of 1 second
        zIndex: 3,        // Adjust stacking order
        scale: 0.9        // Scale down
    }, "same");

    tl4.to("#coffeb1", {
        left: 1000,       // Move to the left 1000px
        top: 1900,        // Move to the top 1900px
        zIndex: 2,        // Adjust stacking order
        duration: 1,      // Duration of 1 second
        rotate: 30        // Rotate by 30 degrees
    }, "same");

    // Animations for the cans
    tl4.to("#can1", {
        left: 400,        // Move to the left 400px
        top: 650,         // Move to the top 650px
        duration: 1,      // Duration of 1 second
        rotate: -20,      // Rotate by -20 degrees
        scale: 0.9        // Scale down
    }, "same");

    tl4.to("#can2", {
        left: 100,        // Move to the left 100px
        top: 650,         // Move to the top 650px
        duration: 1,      // Duration of 1 second
        rotate: 20,       // Rotate by 20 degrees
        scale: 0.9        // Scale down
    }, "same");
}

// Call the animation functions to initialize
homeAnimations();
aboutAnimations();
menuAnimations();
contactAnimations();
