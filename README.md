// ============================================
// CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE
// ============================================

const CONFIG = {
  // Your Valentine's name that will appear in the title
  valentineName: "Daniel",

  // The title that appears in the browser tab
  pageTitle: "Daniel… you forgot to ask 👀💘",

  // Floating emojis that appear in the background
  floatingEmojis: {
    hearts: ["❤️", "💖", "💘", "💝", "🫶"],
    bears: ["🧸", "🐻"]
  },

  // Questions and answers
  questions: {
    first: {
      text: "Hi love. Quick question 😌",
      yesBtn: "Obviously 🙄",
      noBtn: "Umm… no?",
      secretAnswer: "Correct. You may continue receiving affection. 🫶"
    },
    second: {
      text: "How much do you love me (even when we roast each other)?",
      startText: "This much:",
      nextBtn: "Next 😌💘"
    },
    third: {
      text: "Alright Daniel. Officially now—will you be my Valentine? 💝",
      yesBtn: "Yes, love ❤️",
      noBtn: "I enjoy danger"
    }
  },

  // Love meter messages
  loveMessages: {
    extreme: "EXCUSE ME?? 🚀 That’s unhinged devotion. I approve. 😌🔥",
    high: "Okay love… obsession detected. Respect. 💘",
    normal: "Cute. Acceptable. Bare minimum but acceptable. 😌"
  },

  // Messages that appear after they say "Yes!"
  celebration: {
    title: "Good choice, love 😌💖",
    message:
      "Congrats Daniel, you’re officially my Valentine. Now come here—kisses, cuddles, and a premium roasting session included. 💋🫶",
    emojis: "💘🔥🧸💖🥂💋🫶"
  },

  // Color scheme for the website
  colors: {
    backgroundStart: "#ff758c",
    backgroundEnd: "#ffb199",
    buttonBackground: "#ff4d6d",
    buttonHover: "#ff6b81",
    textColor: "#c9184a"
  },

  // Animation settings
  animations: {
    floatDuration: "14s",
    floatDistance: "60px",
    bounceSpeed: "0.45s",
    heartExplosionSize: 1.75
  },

  // Background Music (Optional)
  music: {
    enabled: true,
    autoplay: true,
    musicUrl: "YOUR_CLOUDINARY_URL_HERE",
    startText: "🎵 Play our vibe",
    stopText: "🔇 Stop (rude)",
    volume: 0.45
  }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;
