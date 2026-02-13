// Basic Information
valentineName: "Daniel"                    // Your Valentine's name
pageTitle: "Daniel you forgot something👀💘?" // Browser tab title

// Floating Background Elements
floatingEmojis: {
    hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis in background
    bears: ['🧸', '🐻']                       // Bear emojis in background
}

// Questions and Buttons
questions: {
    first: {
        text: "Hi love. Quick question.",                                           // First question
        subtext: "You *were* planning to ask me to be your Valentine… right? 😌",   // Subtext
        yesBtn: "Obviously🙄",                                                      // Yes button text
        noBtn: "No you are my gf",                                                  // No button text
        secretAnswer: "I was about to get you some flowers today!🫶"                // Hidden message
    },
    second: {
        text: "How much do you love me?",                              // Second question
        startText: "This much!",                                       // Text before percentage
        nextBtn: "Continue before I change my mind"                    // Next button text
    },
    third: {
        text: "Well then, will ask you be my Valentine...?",      // Final question
        yesBtn: "Yes, love!",                                     // Yes button text
        noBtn: "Couch is my favourite resting spot"               // No button text
    }
}

// Love Meter Messages
loveMessages: {
    extreme: "WOOOOW You love me that much?? 🥰🚀💝",  // Shows above 5000%
    high: "To infinity and beyond! 🚀💝",              // Shows above 1000%
    normal: "And beyond! 🥰"                           // Shows above 100%
}

// Final Celebration
celebration: {
    title: "CONGRATULATION!! YOU JUST WON YOURSELF A DATE!",     // Celebration title
    message: "Now go get those flowers you promised",            // Celebration message
    emojis: "🎁💖🤗💝💋❤️💕"                                   // Celebration emojis
}

// Website Colors
colors: {
backgroundStart: "#ff758c",            // Background gradient start
    backgroundEnd: "#ffb199",          // Background gradient end
    buttonBackground: "#e63946",       // Button color
    buttonHover: "#ff4d6d",            // Button hover color
    textColor: "#9d0208"               // Text color         
}

// Animation Settings
animations: {
    floatDuration: "13s",           // How long hearts float (10-20s)
    floatDistance: "65px",          // Sideways movement (30-70px)
    bounceSpeed: "0.4s",            // Bounce animation speed (0.3-0.7s)
    heartExplosionSize: 1.8         // Final heart explosion size (1.2-2.0)
}

// Music Settings
music: {
    enabled: true, // Music feature is enabled
    autoplay: true, // Try to autoplay (note: some browsers may block this)
    musicUrl: "https://res.cloudinary.com/dtyh9p4wj/video/upload/v1771013660/dl_ZsanLS4pUkQ-350d744d88167aefdd1c5bfe89544641450_d7jjgi.mp3", // Paste your music URL here
    startText: "🎵 Play Music", // Button text to start music
    stopText: "🔇 Stop Music", // Button text to stop music
    volume: 0.5 // Volume level (0.0 to 1.0)
}
