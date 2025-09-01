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
        content: `<h2>What is Brain Rot?</h2>
        <p>Brain rot has officially been named Oxford's Word of the Year 2024, reflecting our collective concerns about digital overconsumption and its impact on cognitive function. This term describes the perceived deterioration of mental faculties caused by excessive consumption of low-quality digital content.</p>
        
        <h2>The Science Behind Brain Rot</h2>
        <p>Research shows that constant exposure to rapid-fire digital stimuli can alter our brain's reward systems and attention mechanisms. The endless scroll of social media platforms triggers dopamine releases that create addictive patterns, making it harder to focus on meaningful tasks.</p>
        
        <h2>Solutions-Based Recovery</h2>
        <p>The key to overcoming brain rot lies in implementing evidence-based solutions that gradually restore cognitive function. This includes digital detox periods, mindful technology use, and replacing low-quality content with enriching activities.</p>
        
        <h2>Recognizing the Signs</h2>
        <p>Common symptoms include decreased attention span, difficulty with deep thinking, memory problems, and increased anxiety when separated from devices. Many people report feeling mentally exhausted after prolonged screen time.</p>
        
        <h2>Your Path to Recovery</h2>
        <p>Recovery from brain rot is entirely possible with the right approach. By implementing structured solutions and building healthy digital habits, you can reclaim your mental clarity and cognitive strength.</p>`,
        readTime: "8 min read",
        category: "Brain Health",
        image: "https://pplx-res.cloudinary.com/image/upload/v1755172242/pplx_project_search_images/b35f235d36d61f8943ee6febadcdfa7fa2a1c625.png"
    },
    {
        title: "Digital Detox Solutions for Mental Clarity",
        slug: "digital-detox-strategies-mental-clarity", 
        excerpt: "Practical solutions to reduce screen time and improve cognitive function through digital detoxing.",
        content: `<h2>Why Digital Detox Works</h2>
        <p>Digital detox is one of the most effective solutions for restoring mental clarity and cognitive function. By strategically reducing screen time, you allow your brain to reset and rebuild its natural attention mechanisms.</p>
        
        <h2>The 24-Hour Digital Reset Solution</h2>
        <p>Start with a complete 24-hour digital detox once per week. Use this time for reading, exercise, social interaction, or creative pursuits. This solution helps break automatic usage patterns and restores natural dopamine balance.</p>
        
        <h2>Progressive Screen Time Reduction</h2>
        <p>Implement a gradual reduction strategy: decrease daily screen time by 30 minutes each week until you reach your target. Replace this time with brain-healthy activities like meditation, journaling, or outdoor exercise.</p>
        
        <h2>Creating Tech-Free Recovery Zones</h2>
        <p>Designate specific areas of your home as technology-free recovery spaces. Your bedroom, dining room, or a reading corner become sanctuaries for mental restoration and deep thinking.</p>
        
        <h2>Mindful Technology Solutions</h2>
        <p>Before reaching for your device, implement the "Purpose Pause" - ask yourself: "What specific goal am I trying to accomplish?" This solution breaks automatic usage patterns and promotes intentional technology use.</p>`,
        readTime: "6 min read",
        category: "Digital Wellness",
        image: "https://pplx-res.cloudinary.com/image/upload/v1754806113/pplx_project_search_images/d8107fe7c2199d87666eb5d106ec0c017ff83255.png"
    },
    {
        title: "Screen Time and Mental Health: Recovery Solutions",
        slug: "screen-time-mental-health-guide",
        excerpt: "Explore the relationship between excessive screen time and mental health, plus actionable recovery solutions.",
        content: `<h2>Understanding the Mental Health Impact</h2>
        <p>Excessive screen time significantly impacts mental health, contributing to increased rates of anxiety, depression, and attention disorders. The good news is that these effects are largely reversible with the right solutions.</p>
        
        <h2>Dopamine Reset Solutions</h2>
        <p>Implement a dopamine fasting approach: take regular breaks from high-stimulation digital content. Engage in low-stimulation activities like reading, walking, or meditation to restore natural reward sensitivity.</p>
        
        <h2>Sleep Recovery Solutions</h2>
        <p>Create a "digital sunset" routine: no screens 1-2 hours before bedtime. Use blue light filters after sunset and keep devices out of the bedroom. Quality sleep is crucial for mental health recovery.</p>
        
        <h2>Social Connection Solutions</h2>
        <p>Replace virtual interactions with face-to-face connections. Schedule regular device-free social activities, join local groups, or engage in community volunteering to rebuild real-world relationships.</p>
        
        <h2>Professional Support Solutions</h2>
        <p>If screen time significantly impacts your mental health, consider working with a therapist who specializes in digital wellness. Many professionals now offer targeted solutions for technology-related mental health issues.</p>`,
        readTime: "7 min read", 
        category: "Mental Health",
        image: "https://pplx-res.cloudinary.com/image/upload/v1754773712/pplx_project_search_images/f74ebc1b27a66c13f67d433ed6f31d02791c2426.png"
    },
    {
        title: "Focus Solutions for the Digital Age",
        slug: "improving-focus-digital-age",
        excerpt: "Evidence-based solutions to restore and maintain focus despite digital distractions.",
        content: `<h2>The Focus Recovery Solution</h2>
        <p>Rebuilding focus in the digital age requires targeted solutions that gradually strengthen your attention span. The average person can restore significant focus capacity within 4-6 weeks of consistent practice.</p>
        
        <h2>The Enhanced Pomodoro Solution</h2>
        <p>Use focused work periods of 25 minutes with all digital distractions eliminated, followed by 5-minute analog breaks. During breaks, engage in physical movement or breathing exercises rather than checking devices.</p>
        
        <h2>Environmental Design Solutions</h2>
        <p>Create distraction-free zones optimized for focus: remove visual clutter, use noise-canceling headphones, and position devices completely out of sight during focused work periods.</p>
        
        <h2>Attention Training Solutions</h2>
        <p>Practice daily attention training: start with 5-10 minutes of focused breathing or mindfulness meditation. Gradually increase duration as your attention span strengthens. This builds the neural pathways needed for sustained focus.</p>
        
        <h2>Single-Tasking Mastery Solutions</h2>
        <p>Implement strict single-tasking protocols: when reading, just read; when eating, just eat. This solution rebuilds the neural pathways associated with sustained attention and deep processing.</p>`,
        readTime: "5 min read",
        category: "Productivity",
        image: "https://pplx-res.cloudinary.com/image/upload/v1754742469/pplx_project_search_images/d8dcbab35fbd2442e576aa84d493ce42bc33e49f.png"
    },
    {
        title: "Brain Health Solutions for the Modern World", 
        slug: "brain-health-tips-modern-world",
        excerpt: "Comprehensive solutions to maintain cognitive health while navigating digital demands.",
        content: `<h2>Foundations of Brain Health Solutions</h2>
        <p>Protecting your brain health requires intentional solutions tailored to our digital environment. The key is implementing multiple complementary strategies that work together to optimize cognitive function.</p>
        
        <h2>Physical Exercise Solutions</h2>
        <p>Implement a daily 30-minute exercise routine focused on aerobic activity. This increases BDNF (brain-derived neurotrophic factor), promotes new neural connections, and directly counters the cognitive decline associated with excessive screen time.</p>
        
        <h2>Nutrition Solutions for Cognitive Recovery</h2>
        <p>Adopt a brain-healthy diet rich in omega-3 fatty acids, antioxidants, and complex carbohydrates. Reduce caffeine and sugar intake, which can disrupt sleep and attention. Consider intermittent fasting to promote brain cell regeneration.</p>
        
        <h2>Sleep Optimization Solutions</h2>
        <p>Implement strict sleep hygiene: 7-9 hours of quality sleep, consistent sleep schedule, and a complete digital shutdown 2 hours before bed. Quality sleep is when your brain clears toxins and consolidates memories.</p>
        
        <h2>Social Connection Solutions</h2>
        <p>Schedule regular face-to-face interactions: join clubs, attend community events, or engage in team sports. Real-world social connections are crucial for cognitive health and emotional well-being.</p>
        
        <h2>Continuous Learning Solutions</h2>
        <p>Challenge your brain with new skills: learn a language, play a musical instrument, or engage in complex puzzles. This builds cognitive reserve and protects against age-related decline while countering digital brain rot.</p>`,
        readTime: "9 min read",
        category: "Brain Health",
        image: "https://pplx-res.cloudinary.com/image/upload/v1755172242/pplx_project_search_images/84125a721af125f0d0cfc8762406af21e177f1a0.png"
    },
    {
        title: "Social Media Recovery Solutions",
        slug: "signs-need-social-media-break",
        excerpt: "Recognize the warning signs and implement recovery solutions for social media addiction.",
        content: `<h2>When Social Media Becomes Problematic</h2>
        <p>Social media addiction affects millions, but recovery is possible with targeted solutions. Knowing when to take action and having a clear recovery plan is crucial for mental health and cognitive well-being.</p>
        
        <h2>Physical Recovery Solutions</h2>
        <p>Address physical symptoms with targeted solutions: use the 20-20-20 rule for eye strain, perform neck stretches every hour, and establish a strict digital curfew to restore sleep patterns.</p>
        
        <h2>Emotional Recovery Solutions</h2>
        <p>Combat social media-induced anxiety and depression with replacement activities: practice gratitude journaling, engage in creative hobbies, and build self-esteem through real-world accomplishments rather than online validation.</p>
        
        <h2>Productivity Recovery Solutions</h2>
        <p>Implement app blockers during work hours, create phone-free work zones, and use the "phone in another room" strategy during focused tasks. Replace social media breaks with physical movement or deep breathing.</p>
        
        <h2>Relationship Recovery Solutions</h2>
        <p>Prioritize face-to-face interactions: establish device-free meal times, plan regular social activities without phones, and practice active listening during conversations. Real connections are far more fulfilling than virtual ones.</p>
        
        <h2>The 30-Day Recovery Challenge</h2>
        <p>Commit to a structured 30-day social media reduction plan: Week 1 - reduce usage by 50%, Week 2 - eliminate during work hours, Week 3 - weekend digital detox, Week 4 - social media only for essential communication.</p>`,
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
        if (e.target.matches('button[onclick*="showPage(\'quiz\')"]') || 
            e.target.closest('button[onclick*="showPage(\'quiz\')"]')) {
            e.preventDefault();
            showPage('quiz');
        }
        
        if (e.target.matches('button[onclick*="showPage(\'home\')"]') || 
            e.target.closest('button[onclick*="showPage(\'home\')"]')) {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Enhanced newsletter functionality
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

            // Simulate newsletter signup with delay
            setTimeout(() => {
                const successDiv = document.getElementById('newsletterSuccess');
                if (successDiv) {
                    successDiv.style.display = 'block';
                    newsletterForm.style.display = 'none';
                    
                    // Reset form after 8 seconds
                    setTimeout(() => {
                        successDiv.style.display = 'none';
                        newsletterForm.style.display = 'block';
                        newsletterForm.reset();
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                    }, 8000);
                }
            }, 1500);
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
            <div class="article-card" data-slug="${article.slug}">
                ${article.image ? `<div class="article-image-container">
                    <img src="${article.image}" alt="${article.title}" class="article-image" loading="lazy">
                    <div class="article-image-overlay"></div>
                </div>` : ''}
                <div class="article-card-content">
                    <span class="article-category">${article.category}</span>
                    <h3>${article.title}</h3>
                    <p class="article-excerpt">${article.excerpt}</p>
                    <div class="article-meta">
                        <span>${article.readTime}</span>
                        <span class="read-more">Read Solutions →</span>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Add click handlers for article cards
        articlesGrid.addEventListener('click', function(e) {
            const articleCard = e.target.closest('.article-card');
            if (articleCard) {
                const slug = articleCard.getAttribute('data-slug');
                if (slug) {
                    showArticle(slug);
                }
            }
        });
        
        // Add styles for article images
        const style = document.createElement('style');
        style.textContent = `
            .article-image-container {
                position: relative;
                height: 200px;
                overflow: hidden;
            }
            .article-image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.3s ease;
            }
            .article-card:hover .article-image {
                transform: scale(1.05);
            }
            .article-image-overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(transparent, rgba(0, 0, 0, 0.3));
            }
            .read-more {
                color: var(--color-primary-gradient);
                font-weight: var(--font-weight-semibold);
            }
        `;
        document.head.appendChild(style);
    }
}

function showArticle(slug) {
    const article = articles.find(a => a.slug === slug);
    if (!article) return;

    const articleContent = document.getElementById('articleContent');
    if (articleContent) {
        articleContent.innerHTML = `
            <div class="article-header">
                <span class="article-category" style="background: var(--gradient-orange-pink);">${article.category}</span>
                <h1>${article.title}</h1>
                <div class="article-meta-info">
                    <span>${article.readTime}</span>
                    <span>•</span>
                    <span>${new Date().toLocaleDateString()}</span>
                </div>
                ${article.image ? `<div class="article-hero-image" style="margin: 2rem 0;">
                    <img src="${article.image}" alt="${article.title}" style="width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow-card);">
                </div>` : ''}
            </div>
            <div class="article-body">
                ${article.content}
            </div>
            <div class="article-actions" style="text-align: center; margin-top: 2rem; padding: 2rem; background: var(--gradient-card); border-radius: var(--radius-lg);">
                <h3 style="margin-bottom: 1rem; background: var(--gradient-purple-blue); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">🚀 Ready to Transform Your Digital Life?</h3>
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <button class="btn btn--primary" data-action="quiz">Take Assessment Quiz</button>
                    <button class="btn btn--outline" data-action="home" style="color: var(--color-text); border-color: var(--color-border);">← Back to Home</button>
                </div>
            </div>
        `;

        // Add click handlers for buttons in article
        const buttons = articleContent.querySelectorAll('button[data-action]');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const action = this.getAttribute('data-action');
                showPage(action);
            });
        });

        showPage('article');
    }
}

// Enhanced quiz functionality
function initializeQuiz() {
    resetQuiz();
}

function resetQuiz() {
    currentQuestionIndex = 0;
    quizAnswers = [];
    
    const quizResults = document.getElementById('quizResults');
    const quizContent = document.getElementById('quizContent');
    const quizNavigation = document.querySelector('.quiz-navigation');
    
    if (quizResults) quizResults.style.display = 'none';
    if (quizContent) quizContent.style.display = 'block';
    if (quizNavigation) quizNavigation.style.display = 'flex';
    
    renderQuestion();
    updateProgress();
}

function renderQuestion() {
    const question = quizData[currentQuestionIndex];
    const quizContent = document.getElementById('quizContent');
    
    if (quizContent) {
        quizContent.innerHTML = `
            <div class="quiz-question">
                <div class="question-number" style="color: var(--color-primary-gradient); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-8);">
                    Question ${currentQuestionIndex + 1} of ${quizData.length}
                </div>
                <h3 class="question-text">${question.question}</h3>
                <div class="quiz-options">
                    ${question.options.map((option, index) => `
                        <div class="quiz-option" data-index="${index}" data-points="${option.points}">
                            <span class="option-indicator">${String.fromCharCode(65 + index)}.</span>
                            ${option.text}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        // Add click handlers for options
        const options = quizContent.querySelectorAll('.quiz-option');
        options.forEach(option => {
            option.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                selectOption(index);
            });
        });

        // Restore previous answer if it exists
        if (quizAnswers[currentQuestionIndex] !== undefined) {
            const selectedIndex = quizAnswers[currentQuestionIndex];
            options[selectedIndex].classList.add('selected');
        }
    }

    updateNavigationButtons();
}

function selectOption(optionIndex) {
    // Remove previous selection
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.classList.remove('selected');
    });

    // Add selection to clicked option
    document.querySelectorAll('.quiz-option')[optionIndex].classList.add('selected');
    
    // Store answer
    quizAnswers[currentQuestionIndex] = optionIndex;
    
    // Enable next button
    updateNavigationButtons();
}

function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (progressFill && progressText) {
        const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
        progressFill.style.width = progress + '%';
        progressText.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn && nextBtn) {
        prevBtn.disabled = currentQuestionIndex === 0;
        
        const hasAnswer = quizAnswers[currentQuestionIndex] !== undefined;
        const isLastQuestion = currentQuestionIndex === quizData.length - 1;
        
        if (isLastQuestion && hasAnswer) {
            nextBtn.textContent = 'Get My Solutions';
            nextBtn.disabled = false;
            nextBtn.style.background = 'var(--gradient-teal-green)';
        } else {
            nextBtn.textContent = 'Next Question';
            nextBtn.disabled = !hasAnswer;
            nextBtn.style.background = 'var(--gradient-purple-blue)';
        }
    }
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
        updateProgress();
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
        updateProgress();
    }
}

function showResults() {
    const totalScore = calculateScore();
    const scoreRange = getScoreRange(totalScore);
    
    // Hide quiz content and navigation
    const quizContent = document.getElementById('quizContent');
    const quizNavigation = document.querySelector('.quiz-navigation');
    
    if (quizContent) quizContent.style.display = 'none';
    if (quizNavigation) quizNavigation.style.display = 'none';
    
    // Show results
    const resultsDiv = document.getElementById('quizResults');
    if (resultsDiv) {
        resultsDiv.style.display = 'block';
        
        // Update results display with enhanced styling
        const scoreNumber = document.getElementById('scoreNumber');
        const scoreLevel = document.getElementById('scoreLevel');
        const scoreDescription = document.getElementById('scoreDescription');
        const scoreCircle = document.getElementById('scoreCircle');
        const recommendationsList = document.getElementById('recommendationsList');
        
        if (scoreNumber) scoreNumber.textContent = totalScore;
        if (scoreLevel) {
            scoreLevel.textContent = scoreRange.level;
            scoreLevel.style.background = scoreRange.color;
            scoreLevel.style.color = 'white';
        }
        if (scoreDescription) scoreDescription.textContent = scoreRange.description;
        if (scoreCircle) scoreCircle.style.borderColor = scoreRange.color;
        
        // Render solutions with enhanced styling
        if (recommendationsList) {
            recommendationsList.innerHTML = scoreRange.solutions.map((solution, index) => `
                <li style="margin-bottom: var(--space-12); padding: var(--space-12); background: var(--gradient-card); border-radius: var(--radius-base); border-left: 4px solid ${scoreRange.color};">
                    <strong>Solution ${index + 1}:</strong> ${solution}
                </li>
            `).join('');
            
            // Add call-to-action based on score
            const ctaHTML = totalScore > 30 ? `
                <div style="margin-top: var(--space-24); padding: var(--space-20); background: var(--gradient-newsletter); color: white; border-radius: var(--radius-lg); text-align: center;">
                    <h4 style="color: white; margin-bottom: var(--space-8);">🚀 Ready to Start Your Recovery Journey?</h4>
                    <p style="margin-bottom: var(--space-16);">Join thousands who have successfully restored their cognitive health with our proven solutions.</p>
                    <button class="btn btn--outline newsletter-cta" style="background: rgba(255,255,255,0.2); border-color: rgba(255,255,255,0.5); color: white;">
                        Get Weekly Recovery Tips →
                    </button>
                </div>
            ` : `
                <div style="margin-top: var(--space-24); padding: var(--space-20); background: var(--gradient-teal-green); color: white; border-radius: var(--radius-lg); text-align: center;">
                    <h4 style="color: white; margin-bottom: var(--space-8);">✨ You're Doing Great!</h4>
                    <p style="margin-bottom: var(--space-16);">Help others by sharing your healthy digital habits and staying updated with the latest wellness research.</p>
                    <button class="btn btn--outline newsletter-cta" style="background: rgba(255,255,255,0.2); border-color: rgba(255,255,255,0.5); color: white;">
                        Join Our Wellness Community →
                    </button>
                </div>
            `;
            
            recommendationsList.insertAdjacentHTML('afterend', ctaHTML);
            
            // Add click handler for newsletter CTA
            const newsletterCTA = resultsDiv.querySelector('.newsletter-cta');
            if (newsletterCTA) {
                newsletterCTA.addEventListener('click', function() {
                    showPage('home');
                    setTimeout(() => scrollToSection('newsletter'), 300);
                });
            }
        }
        
        // Scroll to results with delay for better UX
        setTimeout(() => {
            resultsDiv.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }
}

function calculateScore() {
    return quizAnswers.reduce((total, answerIndex, questionIndex) => {
        const points = quizData[questionIndex].options[answerIndex].points;
        return total + points;
    }, 0);
}

function getScoreRange(score) {
    return scoreRanges.find(range => score >= range.min && score <= range.max);
}

function getContrastColor(hexColor) {
    // Convert hex to RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    
    // Calculate relative luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    return luminance > 0.5 ? '#000' : '#fff';
}

// Export functions for global access
window.showPage = showPage;
window.scrollToSection = scrollToSection;
window.showArticle = showArticle;
window.scrollToTop = scrollToTop;
window.nextQuestion = nextQuestion;
window.previousQuestion = previousQuestion;
window.selectOption = selectOption;
window.resetQuiz = resetQuiz;