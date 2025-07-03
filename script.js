// ===== FAKE AI CODE TEMPLATES =====
const codeTemplates = {
  "login form": {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Glassmorphism Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="login-container">
        <form class="login-form">
            <h2>Welcome Back</h2>
            <div class="input-group">
                <input type="email" placeholder="Email" required>
            </div>
            <div class="input-group">
                <input type="password" placeholder="Password" required>
            </div>
            <button type="submit" class="login-btn">Sign In</button>
        </form>
    </div>
</body>
</html>`,
    css: `.login-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.login-form {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 40px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    width: 100%;
    max-width: 400px;
}

.login-form h2 {
    text-align: center;
    color: white;
    margin-bottom: 30px;
    font-weight: 300;
}

.input-group {
    margin-bottom: 20px;
}

.input-group input {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    font-size: 16px;
}

.input-group input::placeholder {
    color: rgba(255, 255, 255, 0.7);
}

.login-btn {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(45deg, #ff6b6b, #ee5a24);
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.login-btn:hover {
    transform: translateY(-2px);
}`,
    js: `document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;
    
    if (email && password) {
        // Simulate login process
        const btn = this.querySelector('.login-btn');
        btn.textContent = 'Signing In...';
        btn.disabled = true;
        
        setTimeout(() => {
            alert('Login successful! 🎉');
            btn.textContent = 'Sign In';
            btn.disabled = false;
        }, 2000);
    }
});

// Add floating animation to form
const form = document.querySelector('.login-form');
setInterval(() => {
    form.style.transform = 'translateY(' + Math.sin(Date.now() / 1000) * 5 + 'px)';
}, 50);`,
  },
  dashboard: {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Dashboard</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="dashboard">
        <aside class="sidebar">
            <h2>Dashboard</h2>
            <nav>
                <a href="#" class="nav-item active">📊 Analytics</a>
                <a href="#" class="nav-item">👥 Users</a>
                <a href="#" class="nav-item">💰 Revenue</a>
                <a href="#" class="nav-item">⚙️ Settings</a>
            </nav>
        </aside>
        <main class="main-content">
            <header class="header">
                <h1>Welcome back, User!</h1>
                <div class="user-profile">
                    <span>John Doe</span>
                    <div class="avatar">JD</div>
                </div>
            </header>
            <div class="stats-grid">
                <div class="stat-card">
                    <h3>Total Users</h3>
                    <p class="stat-number">12,345</p>
                </div>
                <div class="stat-card">
                    <h3>Revenue</h3>
                    <p class="stat-number">$45,678</p>
                </div>
                <div class="stat-card">
                    <h3>Orders</h3>
                    <p class="stat-number">1,234</p>
                </div>
            </div>
        </main>
    </div>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #f5f7fa;
}

.dashboard {
    display: flex;
    min-height: 100vh;
}

.sidebar {
    width: 250px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
}

.sidebar h2 {
    margin-bottom: 30px;
    font-weight: 300;
}

.nav-item {
    display: block;
    color: white;
    text-decoration: none;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
    transition: all 0.3s ease;
}

.nav-item:hover,
.nav-item.active {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(10px);
}

.main-content {
    flex: 1;
    padding: 20px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.user-profile {
    display: flex;
    align-items: center;
    gap: 10px;
}

.avatar {
    width: 40px;
    height: 40px;
    background: linear-gradient(45deg, #ff6b6b, #ee5a24);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.stat-card {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.stat-card:hover {
    transform: translateY(-5px);
}

.stat-card h3 {
    color: #666;
    margin-bottom: 10px;
}

.stat-number {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
}`,
    js: `// Animate stat numbers
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalNumber = stat.textContent;
        const isPrice = finalNumber.includes('$');
        const numericValue = parseInt(finalNumber.replace(/[^0-9]/g, ''));
        
        let currentNumber = 0;
        const increment = numericValue / 50;
        
        const timer = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= numericValue) {
                currentNumber = numericValue;
                clearInterval(timer);
            }
            
            if (isPrice) {
                stat.textContent = '$' + Math.floor(currentNumber).toLocaleString();
            } else {
                stat.textContent = Math.floor(currentNumber).toLocaleString();
            }
        }, 30);
    });
}

// Add click handlers to nav items
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all items
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        
        // Add active class to clicked item
        this.classList.add('active');
        
        // Simulate page change
        console.log('Navigating to:', this.textContent);
    });
});

// Initialize animations when page loads
window.addEventListener('load', animateNumbers);`,
  },
  "card component": {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Cards</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="card">
            <div class="card-image">
                <img src="https://via.placeholder.com/300x200" alt="Card Image">
            </div>
            <div class="card-content">
                <h3>Amazing Product</h3>
                <p>This is a beautiful card component with hover effects and smooth animations.</p>
                <div class="card-footer">
                    <span class="price">$99.99</span>
                    <button class="btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
        
        <div class="card">
            <div class="card-image">
                <img src="https://via.placeholder.com/300x200" alt="Card Image">
            </div>
            <div class="card-content">
                <h3>Cool Gadget</h3>
                <p>Another fantastic product with modern design and premium quality materials.</p>
                <div class="card-footer">
                    <span class="price">$149.99</span>
                    <button class="btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #74b9ff, #0984e3);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
}

.card {
    width: 300px;
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    cursor: pointer;
}

.card:hover {
    transform: translateY(-10px) rotateX(5deg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-image {
    position: relative;
    overflow: hidden;
    height: 200px;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.card:hover .card-image img {
    transform: scale(1.1);
}

.card-content {
    padding: 20px;
}

.card-content h3 {
    margin-bottom: 10px;
    color: #333;
    font-size: 1.5rem;
}

.card-content p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.price {
    font-size: 1.5rem;
    font-weight: bold;
    color: #e74c3c;
}

.btn-primary {
    background: linear-gradient(45deg, #6c5ce7, #a29bfe);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
}

.btn-primary:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(108, 92, 231, 0.4);
}

.btn-primary:active {
    transform: scale(0.95);
}`,
    js: `// Add click animations and interactions
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        // Add a ripple effect
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.marginLeft = '-10px';
        ripple.style.marginTop = '-10px';
        
        this.style.position = 'relative';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add to cart functionality
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        
        const originalText = this.textContent;
        this.textContent = 'Added! ✓';
        this.style.background = 'linear-gradient(45deg, #00b894, #00cec9)';
        
        setTimeout(() => {
            this.textContent = originalText;
            this.style.background = 'linear-gradient(45deg, #6c5ce7, #a29bfe)';
        }, 2000);
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = \`
@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
\`;
document.head.appendChild(style);`,
  },
}

// ===== DOM ELEMENTS =====
const promptInput = document.getElementById("promptInput")
const generateBtn = document.getElementById("generateBtn")
const loadingAnimation = document.getElementById("loadingAnimation")
const codeOutput = document.getElementById("codeOutput")
const htmlCode = document.getElementById("htmlCode")
const cssCode = document.getElementById("cssCode")
const jsCode = document.getElementById("jsCode")
const copyNotification = document.getElementById("copyNotification")

// ===== ROBOT REACTIONS =====
const robotReactions = [
  "Coding magic activated! ✨",
  "Beep boop! Code incoming! 🤖",
  "Summoning code spirits... 👻",
  "Transforming ideas to reality! 🚀",
  "Code wizardry in progress! 🧙‍♂️",
]

function updateRobotSpeech(message) {
  const speechBubble = document.querySelector(".bubble-text")
  speechBubble.textContent = message

  // Add bounce animation
  const bubble = document.querySelector(".speech-bubble")
  bubble.style.animation = "none"
  setTimeout(() => {
    bubble.style.animation = "bubbleBounce 2s ease-in-out infinite"
  }, 10)
}

// ===== GENERATE CODE FUNCTIONALITY =====
generateBtn.addEventListener("click", () => {
  const prompt = promptInput.value.trim().toLowerCase()

  if (!prompt) {
    alert("Please enter a frontend idea first! 💡")
    return
  }

  // Update robot reaction
  const randomReaction = robotReactions[Math.floor(Math.random() * robotReactions.length)]
  updateRobotSpeech(randomReaction)

  // Show loading animation
  loadingAnimation.classList.remove("hidden")
  codeOutput.classList.add("hidden")

  // Simulate AI processing time
  setTimeout(() => {
    generateFakeCode(prompt)
    loadingAnimation.classList.add("hidden")
    codeOutput.classList.remove("hidden")

    // Update robot to success state
    updateRobotSpeech("Code summoned successfully! 🎉")

    // Scroll to results
    codeOutput.scrollIntoView({ behavior: "smooth" })
  }, 3000)
})

function generateFakeCode(prompt) {
  let selectedTemplate = codeTemplates["card component"] // default

  // Simple keyword matching for demo
  if (prompt.includes("login") || prompt.includes("form")) {
    selectedTemplate = codeTemplates["login form"]
  } else if (prompt.includes("dashboard") || prompt.includes("admin")) {
    selectedTemplate = codeTemplates["dashboard"]
  } else if (prompt.includes("card") || prompt.includes("product")) {
    selectedTemplate = codeTemplates["card component"]
  }

  // Add typing effect
  typeCode(htmlCode, selectedTemplate.html)
  setTimeout(() => typeCode(cssCode, selectedTemplate.css), 500)
  setTimeout(() => typeCode(jsCode, selectedTemplate.js), 1000)
}

function typeCode(element, code) {
  element.textContent = ""
  let i = 0

  function typeChar() {
    if (i < code.length) {
      element.textContent += code.charAt(i)
      i++
      setTimeout(typeChar, 1) // Fast typing for demo
    }
  }

  typeChar()
}

// ===== COPY FUNCTIONALITY =====
document.querySelectorAll(".copy-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const type = this.getAttribute("data-type")
    let textToCopy = ""

    switch (type) {
      case "html":
        textToCopy = htmlCode.textContent
        break
      case "css":
        textToCopy = cssCode.textContent
        break
      case "js":
        textToCopy = jsCode.textContent
        break
    }

    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        showCopyNotification()

        // Button feedback
        const originalText = this.innerHTML
        this.innerHTML = "<span>✅ Copied!</span>"
        this.style.background = "rgba(0, 255, 0, 0.4)"

        setTimeout(() => {
          this.innerHTML = originalText
          this.style.background = "rgba(0, 255, 255, 0.2)"
        }, 2000)
      })
    }
  })
})

function showCopyNotification() {
  copyNotification.classList.remove("hidden")
  setTimeout(() => {
    copyNotification.classList.add("hidden")
  }, 2000)
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener("keydown", (e) => {
  // Ctrl/Cmd + Enter to generate
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
    generateBtn.click()
  }
})

// ===== SCROLL REVEAL ANIMATIONS =====
function revealOnScroll() {
  const elements = document.querySelectorAll(".code-card")

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }
  })
}

window.addEventListener("scroll", revealOnScroll)

// ===== PARTICLE EFFECTS =====
function createFloatingParticle() {
  const particle = document.createElement("div")
  particle.style.position = "fixed"
  particle.style.width = "4px"
  particle.style.height = "4px"
  particle.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`
  particle.style.borderRadius = "50%"
  particle.style.pointerEvents = "none"
  particle.style.zIndex = "1000"
  particle.style.left = Math.random() * window.innerWidth + "px"
  particle.style.top = window.innerHeight + "px"
  particle.style.boxShadow = `0 0 10px ${particle.style.background}`

  document.body.appendChild(particle)

  // Animate particle
  let yPos = window.innerHeight
  let xPos = Number.parseFloat(particle.style.left)
  const xVel = (Math.random() - 0.5) * 2

  function animateParticle() {
    yPos -= 2
    xPos += xVel

    particle.style.top = yPos + "px"
    particle.style.left = xPos + "px"
    particle.style.opacity = yPos / window.innerHeight

    if (yPos > -10) {
      requestAnimationFrame(animateParticle)
    } else {
      particle.remove()
    }
  }

  animateParticle()
}

// Create particles periodically
setInterval(createFloatingParticle, 500)

// ===== INITIALIZE =====
document.addEventListener("DOMContentLoaded", () => {
  // Initial robot greeting
  setTimeout(() => {
    updateRobotSpeech("Ready to code! 🚀")
  }, 1000)

  // Focus on input
  promptInput.focus()

  // Add some initial particles
  for (let i = 0; i < 5; i++) {
    setTimeout(createFloatingParticle, i * 200)
  }
})

// ===== EASTER EGGS =====
let konamiCode = []
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
]

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.code)

  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift()
  }

  if (konamiCode.join(",") === konamiSequence.join(",")) {
    // Easter egg activated!
    updateRobotSpeech("KONAMI CODE ACTIVATED! 🎮")
    document.body.style.animation = "rainbow 2s linear infinite"

    setTimeout(() => {
      document.body.style.animation = ""
      updateRobotSpeech("That was epic! 😎")
    }, 5000)

    konamiCode = []
  }
})

// Add rainbow animation
const rainbowStyle = document.createElement("style")
rainbowStyle.textContent = `
@keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
}
`
document.head.appendChild(rainbowStyle)
