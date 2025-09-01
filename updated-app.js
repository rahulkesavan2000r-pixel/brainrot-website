// Brain Rot Website JavaScript - Enhanced with Solutions Focus and Fixed Navigation
// Quiz data and articles from provided JSON
const quizData = [
    {
        question: "How many hours per day do you typically spend on your smartphone?",
        options: [
            {text: "Less than 2 hours", points: 1},
            {text: "2-4 hours", points: 2},
            {text: "4-6 hours", points: 3},
            {text: "More than 6 hours", points: 4}
        ]
    },
    {
        question: "How often do you check social media throughout the day?",
        options: [
            {text: "Rarely or never", points: 1},
            {text: "A few times", points: 2},
            {text: "Every hour", points: 3},
            {text: "Constantly throughout the day", points: 4}
        ]
    },
    {
        question: "Do you frequently lose track of time while scrolling?",
        options: [
            {text: "Never", points: 1},
            {text: "Rarely", points: 2},
            {text: "Sometimes", points: 3},
            {text: "Very often", points: 4}
        ]
    },
    {
        question: "How is your attention span for tasks requiring focus?",
        options: [
            {text: "Excellent - I can focus for hours", points: 1},
            {text: "Good - Usually 30+ minutes", points: 2},
            {text: "Poor - Hard to focus more than 15 minutes", points: 3},
            {text: "Very poor - Can barely focus for 5 minutes", points: 4}
        ]
    },
    {
        question: "How often do you feel mentally exhausted after screen time?",
        options: [
            {text: "Never", points: 1},
            {text: "Rarely", points: 2},
            {text: "Often", points: 3},
            {text: "Almost always", points: 4}
        ]
    },
    {
        question: "Do you use your phone within an hour of bedtime?",
        options: [
            {text: "Never", points: 1},
            {text: "Rarely", points: 2},
            {text: "Most nights", points: 3},
            {text: "Every night", points: 4}
        ]
    },
    {
        question: "How do you feel when separated from your phone?",
        options: [
            {text: "Completely fine", points: 1},
            {text: "Slightly uncomfortable", points: 2},
            {text: "Anxious or restless", points: 3},
            {text: "Extremely anxious or panicked", points: 4}
        ]
    },
    {
        question: "How often do you engage in face-to-face conversations without checking your device?",
        options: [
            {text: "Always - I'm fully present", points: 1},
            {text: "Usually", points: 2},
            {text: "Sometimes I get distracted", points: 3},
            {text: "I frequently check my phone during conversations", points: 4}
        ]
    },
    {
        question: "What type of content do you primarily consume online?",
        options: [
            {text: "Educational, news, or meaningful content", points: 1},
            {text: "Mix of educational and entertainment", points: 2},
            {text: "Mostly entertainment and social media", points: 3},
            {text: "Mindless scrolling and viral content", points: 4}
        ]
    },
    {
        question: "How has your memory been lately?",
        options: [
            {text: "Excellent - I remember things clearly", points: 1},
            {text: "Good - Occasional forgetfulness", points: 2},
            {text: "Poor - Frequently forgetting things", points: 3},
            {text: "Very poor - Constant brain fog", points: 4}
        ]
    },
    {
        question: "Do you multitask with multiple screens or apps?",
        options: [
            {text: "Never - I focus on one thing", points: 1},
            {text: "Rarely", points: 2},
            {text: "Often", points: 3},
            {text: "Constantly switching between multiple screens", points: 4}
        ]
    },
    {
        question: "How often do you take breaks from digital devices?",
        options: [
            {text: "Daily digital detox periods", points: 1},
            {text: "Regular breaks throughout the day", points: 2},
            {text: "Occasional breaks", points: 3},
            {text: "Rarely or never", points: 4}
        ]
    },
    {
        question: "Has your sleep quality been affected by screen use?",
        options: [
            {text: "No impact - I sleep great", points: 1},
            {text: "Slight impact occasionally", points: 2},
            {text: "Noticeable impact on sleep", points: 3},
            {text: "Severely disrupted sleep patterns", points: 4}
        ]
    },
    {
        question: "How do you feel about your current digital habits?",
        options: [
            {text: "Very satisfied - I have good balance", points: 1},
            {text: "Mostly satisfied with some concerns", points: 2},
            {text: "Concerned about my usage", points: 3},
            {text: "Very worried - I feel out of control", points: 4}
        ]
    },
    {
        question: "How often do you mindlessly reach for your phone?",
        options: [
            {text: "Never - I'm always intentional", points: 1},
            {text: "Rarely", points: 2},
            {text: "Several times a day", points: 3},
            {text: "Constantly - it's automatic", points: 4}
        ]
    }
];

const articles = [
    {
        title: "Understanding Brain Rot: The Oxford Word of the Year 2024",
        slug: "understanding-brain-rot-oxford-word-2024",
        excerpt: "Learn about brain rot, Oxford's Word of the Year 2024, its causes, effects, and how to combat digital cognitive decline.",
        content: `Brain rot has officially been named Oxford's Word of the Year 2024, reflecting our collective concerns about digital overconsumption and its impact on cognitive function. This term describes the perceived deterioration of mental faculties caused by excessive consumption of low-quality digital content.

Research shows that constant exposure to rapid-fire digital stimuli can alter our brain's reward systems and attention mechanisms. The endless scroll of social media platforms triggers dopamine releases that create addictive patterns, making it harder to focus on meaningful tasks.

The key to overcoming brain rot lies in implementing evidence-based solutions that gradually restore cognitive function. This includes digital detox periods, mindful technology use, and replacing low-quality content with enriching activities.

Common symptoms include decreased attention span, difficulty with deep thinking, memory problems, and increased anxiety when separated from devices. Many people report feeling mentally exhausted after prolonged screen time.

Recovery from brain rot is entirely possible with the right approach. By implementing structured solutions and building healthy digital habits, you can reclaim your mental clarity and cognitive strength.`,
        readTime: "8 min read",
        category: "Brain Health",
        image: "https://pplx-res.cloudinary.com/image/upload/v1755172242/pplx_project_search_images/b35f235d36d61f8943ee6febadcdfa7fa2a1c625.png"
    },
    {
        title: "Digital Detox Solutions for Mental Clarity",
        slug: "digital-detox-strategies-mental-clarity",
        excerpt: "Practical solutions to reduce screen time and improve cognitive function through digital detoxing.",
        content: `Digital detox is one of the most effective solutions for restoring mental clarity and cognitive function. By strategically reducing screen time, you allow your brain to reset and rebuild its natural attention mechanisms.

Start with a complete 24-hour digital detox once per week. Use this time for reading, exercise, social interaction, or creative pursuits. This solution helps break automatic usage patterns and restores natural dopamine balance.

Implement a gradual reduction strategy: decrease daily screen time by 30 minutes each week until you reach your target. Replace this time with brain-healthy activities like meditation, journaling, or outdoor exercise.

Designate specific areas of your home as technology-free recovery spaces. Your bedroom, dining room, or a reading corner become sanctuaries for mental restoration and deep thinking.

Before reaching for your device, implement the "Purpose Pause" - ask yourself: "What specific goal am I trying to accomplish?" This solution breaks automatic usage patterns and promotes intentional technology use.`,
        readTime: "6 min read",
        category: "Digital Wellness",
        image: "https://pplx-res.cloudinary.com/image/upload/v1754806113/pplx_project_search_images/d8107fe7c2199d87666eb5d106ec0c017ff83255.png"
    },
    {
        title: "Screen Time and Mental Health: Recovery Solutions",
        slug: "screen-time-mental-health-guide",
        excerpt: "Explore the relationship between excessive screen time and mental health, plus actionable recovery solutions.",
        content: `Excessive screen time significantly impacts mental health, contributing to increased rates of anxiety, depression, and attention disorders. The good news is that these effects are largely reversible with the right solutions.

Implement a dopamine fasting approach: take regular breaks from high-stimulation digital content. Engage in low-stimulation activities like reading, walking, or meditation to restore natural reward sensitivity.

Create a "digital sunset" routine: no screens 1-2 hours before bedtime. Use blue light filters after sunset and keep devices out of the bedroom. Quality sleep is crucial for mental health recovery.

Replace virtual interactions with face-to-face connections. Schedule regular device-free social activities, join local groups, or engage in community volunteering to rebuild real-world relationships.

If screen time significantly impacts your mental health, consider working with a therapist who specializes in digital wellness. Many professionals now offer targeted solutions for technology-related mental health issues.`,
        readTime: "7 min read",
        category: "Mental Health",
        image: "https://pplx-res.cloudinary.com/image/upload/v1754773712/pplx_project_search_images/f74ebc1b27a66c13f67d433ed6f31d02791c2426.png"
    },
    {
        title: "Focus Solutions for the Digital Age",
        slug: "improving-focus-digital-age",
        excerpt: "Evidence-based solutions to restore and maintain focus despite digital distractions.",
        content: `Rebuilding focus in the digital age requires targeted solutions that gradually strengthen your attention span. The average person can restore significant focus capacity within 4-6 weeks of consistent practice.

Use focused work periods of 25 minutes with all digital distractions eliminated, followed by 5-minute analog breaks. During breaks, engage in physical movement or breathing exercises rather than checking devices.

Create distraction-free zones optimized for focus: remove visual clutter, use noise-canceling headphones, and position devices completely out of sight during focused work periods.

Practice daily attention training: start with 5-10 minutes of focused breathing or mindfulness meditation. Gradually increase duration as your attention span strengthens. This builds the neural pathways needed for sustained focus.

Implement strict single-tasking protocols: when reading, just read; when eating, just eat. This solution rebuilds the neural pathways associated with sustained attention and deep processing.`,
        readTime: "5 min read",
        category: "Productivity",
        image: "https://pplx-res.cloudinary.com/image/upload/v1754742469/pplx_project_search_images/d8dcbab35fbd2442e576aa84d493ce42bc33e49f.png"
    },
    {
        title: "Brain Health Solutions for the Modern World",
        slug: "brain-health-tips-modern-world",
        excerpt: "Comprehensive solutions to maintain cognitive health while navigating digital demands.",
        content: `Protecting your brain health requires intentional solutions tailored to our digital environment. The key is implementing multiple complementary strategies that work together to optimize cognitive function.

Implement a daily 30-minute exercise routine focused on aerobic activity. This increases BDNF (brain-derived neurotrophic factor), promotes new neural connections, and directly counters the cognitive decline associated with excessive screen time.

Adopt a brain-healthy diet rich in omega-3 fatty acids, antioxidants, and complex carbohydrates. Reduce caffeine and sugar intake, which can disrupt sleep and attention. Consider intermittent fasting to promote brain cell regeneration.

Implement strict sleep hygiene: 7-9 hours of quality sleep, consistent sleep schedule, and a complete digital shutdown 2 hours before bed. Quality sleep is when your brain clears toxins and consolidates memories.

Schedule regular face-to-face interactions: join clubs, attend community events, or engage in team sports. Real-world social connections are crucial for cognitive health and emotional well-being.

Challenge your brain with new skills: learn a language, play a musical instrument, or engage in complex puzzles. This builds cognitive reserve and protects against age-related decline while countering digital brain rot.`,
        readTime: "9 min read",
        category: "Brain Health",
        image: "https://pplx-res.cloudinary.com/image/upload/v1755172242/pplx_project_search_images/84125a721af125f0d0cfc8762406af21e177f1a0.png"
    },
    {
        title: "Social Media Recovery Solutions",
        slug: "signs-need-social-media-break",
        excerpt: "Recognize the warning signs and implement recovery solutions for social media addiction.",
        content: `Social media addiction affects millions, but recovery is possible with targeted solutions. Knowing when to take action and having a clear recovery plan is crucial for mental health and cognitive well-being.

Address physical symptoms with targeted solutions: use the 20-20-20 rule for eye strain, perform neck stretches every hour, and establish a strict digital curfew to restore sleep patterns.

Combat social media-induced anxiety and depression with replacement activities: practice gratitude journaling, engage in creative hobbies, and build self-esteem through real-world accomplishments rather than online validation.

Implement app blockers during work hours, create phone-free work zones, and use the "phone in another room" strategy during focused tasks. Replace social media breaks with physical movement or deep breathing.

Prioritize face-to-face interactions: establish device-free meal times, plan regular social activities without phones, and practice active listening during conversations. Real connections are far more fulfilling than virtual ones.

Commit to a structured 30-day social media reduction plan: Week 1 - reduce usage by 50%, Week 2 - eliminate during work hours, Week 3 - weekend digital detox, Week 4 - social media only for essential communication.`,
        readTime: "4 min read",
        category: "Digital Wellness",
        image: "https://pplx-res.cloudinary.com/image/upload/v1755172242/pplx_project_search_images/11d1246e72a659df43d7f4d659d4b823de958d3e.png"
    }
];

// Updated score ranges with solution focus
const scoreRanges = [
    {
        min: 0,
        max: 15,
        level: "Excellent Digital Health",
        color: "#10b981",
        description: "Congratulations! You have excellent digital habits and a healthy relationship with technology. You're a role model for balanced digital living.",
        solutions: [
            "Continue your balanced approach to technology use",
            "Share your healthy habits with friends and family to help them",
            "Consider becoming a digital wellness mentor or advocate",
            "Try mindful tech use practices to maintain your excellent balance",
            "Help others by sharing your strategies in online communities"
        ]
    },
    {
        min: 16,
        max: 30,
        level: "Mild Digital Fatigue",
        color: "#f59e0b",
        description: "You're experiencing some signs of digital fatigue but are in a great position for quick recovery with targeted solutions.",
        solutions: [
            "Set specific times for checking social media (e.g., only at 12pm and 6pm)",
            "Practice the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds",
            "Establish tech-free zones in your bedroom and dining area",
            "Use app timers to create healthier boundaries (start with 2-hour daily limits)",
            "Replace one hour of screen time daily with physical exercise or reading"
        ]
    },
    {
        min: 31,
        max: 45,
        level: "Moderate Recovery Needed",
        color: "#f97316",
        description: "Your digital habits are showing concerning signs, but with focused solutions, you can recover your cognitive health within 4-6 weeks.",
        solutions: [
            "Implement daily 2-hour digital detox periods (start with 1pm-3pm screen-free time)",
            "Use app timers to limit social media to 30 minutes per day maximum",
            "Replace 2 hours of screen time daily with offline activities: exercise, hobbies, or socializing",
            "Practice 15 minutes of daily meditation to rebuild focus and attention span",
            "Create a 'phone parking station' - charge devices outside your bedroom",
            "Join a local club or group to increase real-world social connections"
        ]
    },
    {
        min: 46,
        max: 60,
        level: "Intensive Recovery Plan Needed",
        color: "#ef4444",
        description: "You're experiencing significant brain rot symptoms, but don't worry - complete recovery is possible with our intensive solution plan.",
        solutions: [
            "Start immediately with a complete 48-hour digital detox this weekend",
            "Reduce total screen time by 3 hours per week until reaching 4 hours daily maximum",
            "Replace 4+ hours of daily digital time with physical exercise and real-world social activities",
            "Implement a strict 'no phones after 8pm' rule to restore sleep quality",
            "Consider professional digital wellness coaching for personalized support",
            "Join a digital detox support group for accountability and encouragement",
            "Use website blockers and app restrictions to eliminate access to time-wasting content",
            "Practice 20 minutes of daily meditation and mindfulness to rebuild attention span"
        ]
    }
];

// Global state
let currentQuestionIndex = 0;
let quizAnswers = [];
let currentPage = 'home';

// DOM Elements
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const backToTop = document.getElementById('backToTop');
const newsletterForm = document.getElementById('newsletterForm');
const articlesGrid = document.getElementById('articlesGrid');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeBackToTop();
    initializeNewsletter();
    renderArticles();
    initializeQuiz();
    showPage('home');
    initializeAnimations();
    setupGlobalClickHandlers();
});

// Setup global click handlers for all buttons and links
function setupGlobalClickHandlers() {
    // Handle all quiz buttons
    document.addEventListener('click', function(e) {
        if (e.target.matches('button[onclick*="showPage(\'quiz\')"]') || e.target.closest('button[onclick*="showPage(\'quiz\')"]')) {
            e.preventDefault();
            showPage('quiz');
        }
        if (e.target.matches('button[onclick*="showPage(\'home\')"]') || e.target.closest('button[onclick*="showPage(\'home\')"]')) {
            e.preventDefault();
            showPage('home');
        }
        if (e.target.matches('*[onclick*="scrollToSection"]')) {
            e.preventDefault();
            const sectionMatch = e.target.getAttribute('onclick').match(/scrollToSection\('([^']+)'\)/);
            if (sectionMatch) {
                scrollToSection(sectionMatch[1]);
            }
        }
    });

    // Handle logo click
    const logo = document.querySelector('.nav-brand');
    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            showPage('home');
        });
    }
}

// Animation and interaction enhancements
function initializeAnimations() {
    // Add scroll-based animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.content-block, .article-card, .resource-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Handle navigation link clicks
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');

            // Close mobile menu
            if (navMenu) navMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');

            // Handle navigation based on href
            if (href === '#home') {
                showPage('home');
            } else if (href === '#quiz') {
                showPage('quiz');
            } else if (href === '#articles') {
                showPage('home');
                setTimeout(() => scrollToSection('articles'), 100);
            } else if (href === '#resources') {
                showPage('home');
                setTimeout(() => scrollToSection('resources'), 100);
            } else if (href === '#newsletter') {
                showPage('home');
                setTimeout(() => scrollToSection('newsletter'), 100);
            }
        });
    });

    // Handle footer links
    document.querySelectorAll('footer a[onclick*="showPage"], footer a[onclick*="scrollToSection"], footer a[onclick*="showArticle"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const onclick = this.getAttribute('onclick');
            if (onclick.includes('showPage')) {
                const pageMatch = onclick.match(/showPage\('([^']+)'\)/);
                if (pageMatch) showPage(pageMatch[1]);
            } else if (onclick.includes('scrollToSection')) {
                const sectionMatch = onclick.match(/scrollToSection\('([^']+)'\)/);
                if (sectionMatch) {
                    showPage('home');
                    setTimeout(() => scrollToSection(sectionMatch[1]), 100);
                }
            } else if (onclick.includes('showArticle')) {
                const articleMatch = onclick.match(/showArticle\('([^']+)'\)/);
                if (articleMatch) showArticle(articleMatch[1]);
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navToggle && navMenu && !navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// Page management
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageId;

        // Reset quiz if navigating to quiz page
        if (pageId === 'quiz') {
            setTimeout(() => resetQuiz(), 100);
        }

        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// Smooth scrolling to sections
function scrollToSection(sectionId) {
    // Ensure we're on the home page first
    if (currentPage !== 'home') {
        showPage('home');
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    } else {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Back to top functionality
function initializeBackToTop() {
    window.addEventListener('scroll', function() {
        if (backToTop) {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Enhanced newsletter functionality - NOW CONNECTS TO BEEHIIV
function initializeNewsletter() {
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('emailInput').value;

            // Simple email validation
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Add loading state
            const submitBtn = newsletterForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Subscribing...';
            submitBtn.disabled = true;

            // Connect to beehiiv API
            const beehiivUrl = `https://magic.beehiiv.com/v1/4aaeada4-f8d1-452c-8fcf-74aff4bc4f5a?email=${encodeURIComponent(email)}`;

            fetch(beehiivUrl, { 
                method: 'GET',
                mode: 'no-cors' // This might be needed for cross-origin requests
            })
            .then(response => {
                // Handle successful subscription
                const successDiv = document.getElementById('newsletterSuccess');
                if (successDiv) {
                    successDiv.style.display = 'block';
                    newsletterForm.style.display = 'none';
                    showNotification('Successfully subscribed to our newsletter!', 'success');
                    
                    // Reset form after 8 seconds
                    setTimeout(() => {
                        successDiv.style.display = 'none';
                        newsletterForm.style.display = 'block';
                        newsletterForm.reset();
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                    }, 8000);
                }
            })
            .catch(error => {
                // Handle error case
                console.log('Subscription error:', error);
                showNotification('There was an issue with your subscription. Please try again.', 'error');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            });
        });
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 16px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;

    if (type === 'error') {
        notification.style.background = '#ef4444';
    } else {
        notification.style.background = '#10b981';
    }

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Enhanced articles functionality
function renderArticles() {
    if (articlesGrid) {
        articlesGrid.innerHTML = articles.map(article => `
            <div class="article-card" onclick="showArticle('${article.slug}')">
                <div class="article-card-content">
                    <span class="article-category">${article.category}</span>
                    <h3>${article.title}</h3>
                    <p>${article.excerpt}</p>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 16px;">
                        <span style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">${article.readTime}</span>
                        <span style="color: var(--color-primary); font-weight: var(--font-weight-medium);">Read More →</span>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Initialize quiz functionality
function initializeQuiz() {
    resetQuiz();
}

function resetQuiz() {
    currentQuestionIndex = 0;
    quizAnswers = [];
    updateQuizDisplay();
}

function updateQuizDisplay() {
    const quizContent = document.getElementById('quizContent');
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.getElementById('progressText');

    if (!quizContent) return;

    // Update progress
    const progress = ((currentQuestionIndex) / quizData.length) * 100;
    if (progressFill) progressFill.style.width = progress + '%';
    if (progressText) progressText.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;

    if (currentQuestionIndex < quizData.length) {
        // Show current question
        const question = quizData[currentQuestionIndex];
        quizContent.innerHTML = `
            <div class="quiz-question">
                <h3 class="question-text">${question.question}</h3>
                <div class="quiz-options">
                    ${question.options.map((option, index) => `
                        <div class="quiz-option" data-points="${option.points}" onclick="selectQuizOption(this, ${option.points})">
                            ${option.text}
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="quiz-navigation">
                <button class="btn btn--secondary" onclick="previousQuestion()" ${currentQuestionIndex === 0 ? 'style="visibility: hidden"' : ''}>
                    ← Previous
                </button>
                <button class="btn btn--primary" id="nextBtn" onclick="nextQuestion()" disabled>
                    ${currentQuestionIndex === quizData.length - 1 ? 'Get Results' : 'Next →'}
                </button>
            </div>
        `;
    } else {
        // Show results
        showQuizResults();
    }
}

function selectQuizOption(element, points) {
    // Remove selection from other options
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.classList.remove('selected');
    });

    // Select clicked option
    element.classList.add('selected');

    // Store answer
    quizAnswers[currentQuestionIndex] = points;

    // Enable next button
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) nextBtn.disabled = false;
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        updateQuizDisplay();
    } else {
        // Calculate and show results
        showQuizResults();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateQuizDisplay();
    }
}

function showQuizResults() {
    const totalScore = quizAnswers.reduce((sum, score) => sum + score, 0);
    const scoreRange = scoreRanges.find(range => totalScore >= range.min && totalScore <= range.max);

    const quizContent = document.getElementById('quizContent');
    if (!quizContent) return;

    quizContent.innerHTML = `
        <div class="quiz-results">
            <div class="results-card">
                <h2>Your Digital Wellness Assessment Results</h2>
                <div class="score-display">
                    <div class="score-circle">
                        <span style="font-size: var(--font-size-xl); font-weight: var(--font-weight-bold);">${totalScore}/60</span>
                        <span style="font-size: var(--font-size-sm);">Total Score</span>
                    </div>
                    <div class="score-level" style="background: ${scoreRange.color};">
                        ${scoreRange.level}
                    </div>
                </div>
                <p style="font-size: var(--font-size-lg); margin-bottom: var(--space-24); color: var(--color-text-secondary);">
                    ${scoreRange.description}
                </p>
                <div class="recommendations">
                    <h3>📋 Your Personalized Action Plan</h3>
                    <ul style="text-align: left; margin: var(--space-16) 0;">
                        ${scoreRange.solutions.map(solution => `<li style="margin-bottom: var(--space-8);">${solution}</li>`).join('')}
                    </ul>
                </div>
                <div style="margin-top: var(--space-24);">
                    <button class="btn btn--primary btn--large" onclick="resetQuiz()">
                        🔄 Retake Assessment
                    </button>
                    <button class="btn btn--secondary btn--large" onclick="showPage('home')" style="margin-left: var(--space-16);">
                        🏠 Back to Home
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Article functionality
function showArticle(slug) {
    const article = articles.find(a => a.slug === slug);
    if (!article) return;

    // Create article page content
    const articleContent = `
        <div class="article-background"></div>
        <div class="container">
            <div class="article-content">
                <button class="btn btn--secondary" onclick="showPage('home')" style="margin-bottom: var(--space-24);">
                    ← Back to Articles
                </button>
                <span class="article-category">${article.category}</span>
                <h1 style="margin: var(--space-16) 0;">${article.title}</h1>
                <div style="color: var(--color-text-secondary); margin-bottom: var(--space-32);">
                    ${article.readTime}
                </div>
                <div style="line-height: var(--line-height-normal); font-size: var(--font-size-lg);">
                    ${article.content.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('')}
                </div>
                <div style="margin-top: var(--space-32); padding-top: var(--space-24); border-top: 1px solid var(--color-border);">
                    <button class="btn btn--primary btn--large" onclick="showPage('home')">
                        📚 Read More Articles
                    </button>
                </div>
            </div>
        </div>
    `;

    // Create temporary article page
    let articlePage = document.getElementById('article');
    if (!articlePage) {
        articlePage = document.createElement('div');
        articlePage.id = 'article';
        articlePage.className = 'page';
        document.body.appendChild(articlePage);
    }

    articlePage.innerHTML = articleContent;
    showPage('article');
}

// Newsletter success messages for better UX
function showNewsletterSuccess() {
    const successDiv = document.getElementById('newsletterSuccess');
    if (successDiv) {
        successDiv.innerHTML = `
            <div class="newsletter-success">
                <span class="success-icon">✅</span>
                <div>
                    <h4>Welcome to Brain Rot Recovery!</h4>
                    <p>Check your email for your first digital wellness tip.</p>
                </div>
            </div>
        `;
    }
}