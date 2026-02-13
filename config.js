// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Daniel",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Daniel… you forgot something 👀💘",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Hi love. You were planning to ask me to be your Valentine… right? 😌",                                    // First interaction
            yesBtn: "obviously 🙄",                                                                                         // Text for "Yes" button
            noBtn: "No, you are already my girlfrend",                                                                      // Text for "No" button
            secretAnswer: "I was about to get you some flowers today!🫶"                                                    // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Continue before I change my mind ❤️"            // Text for the next button
        },
        third: {
            text: "Well then, Will you be my Valentine? 🌹",           // The big question!
            yesBtn: "Yes, love!",                                      // Text for "Yes" button
            noBtn: "Couch is my favourite resting spot"                // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "yeah that's more like it, you really are a fast learner",  // Shows when they go past 5000%
        high: "I mean sure but, disappointing",                              // Shows when they go past 1000%
        normal: "Not enough, do better"                                      // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "CONGRATULATION!! YOU JUST WON YOURSELF A DATE! 🎉💝💖💝💓",
        message: "No go get those flowers you promised, I won't mind some chocoloate too",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ff758c",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffb199",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#e63946",     // Button color (should stand out against the background)
        buttonHover: "#ff4d6d",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#9d0208"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "13s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "65px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.4s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.8         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dtyh9p4wj/video/upload/v1771013660/dl_ZsanLS4pUkQ-350d744d88167aefdd1c5bfe89544641450_d7jjgi.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
