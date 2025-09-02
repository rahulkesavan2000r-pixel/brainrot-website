// Brain Rot Assessment App - v3.0 FINAL

// --- Data ---
const quizQuestions = [{"question": "How many hours per day do you typically spend on your smartphone? 📱", "options": [{"text": "Less than 2 hours ✅", "points": 1}, {"text": "2-4 hours ⚠️", "points": 2}, {"text": "4-6 hours ⚠️", "points": 3}, {"text": "More than 6 hours ❌", "points": 4}]},
    {"question": "How often do you check social media throughout the day? 📲", "options": [{"text": "Rarely or never ✅", "points": 1}, {"text": "A few times ⚠️", "points": 2}, {"text": "Every hour ⚠️", "points": 3}, {"text": "Constantly throughout the day ❌", "points": 4}]},
    {"question": "Do you frequently lose track of time while scrolling? ⏰", "options": [{"text": "Never ✅", "points": 1}, {"text": "Rarely ⚠️", "points": 2}, {"text": "Sometimes ⚠️", "points": 3}, {"text": "Very often ❌", "points": 4}]},
    {"question": "How is your attention span for tasks requiring focus? 🎯", "options": [{"text": "Excellent - I can focus for hours ✅", "points": 1}, {"text": "Good - Usually 30+ minutes ⚠️", "points": 2}, {"text": "Poor - Hard to focus more than 15 minutes ⚠️", "points": 3}, {"text": "Very poor - Can barely focus for 5 minutes ❌", "points": 4}]},
    {"question": "How often do you feel mentally exhausted after screen time? 😴", "options": [{"text": "Never ✅", "points": 1}, {"text": "Rarely ⚠️", "points": 2}, {"text": "Often ⚠️", "points": 3}, {"text": "Almost always ❌", "points": 4}]},
    {"question": "Do you use your phone within an hour of bedtime? 🌙", "options": [{"text": "Never ✅", "points": 1}, {"text": "Rarely ⚠️", "points": 2}, {"text": "Most nights ⚠️", "points": 3}, {"text": "Every night ❌", "points": 4}]},
    {"question": "How do you feel when separated from your phone? 😰", "options": [{"text": "Completely fine ✅", "points": 1}, {"text": "Slightly uncomfortable ⚠️", "points": 2}, {"text": "Anxious or restless ⚠️", "points": 3}, {"text": "Extremely anxious or panicked ❌", "points": 4}]},
    {"question": "How often do you engage in face-to-face conversations without checking your device? 👥", "options": [{"text": "Always - I'm fully present ✅", "points": 1}, {"text": "Usually ⚠️", "points": 2}, {"text": "Sometimes I get distracted ⚠️", "points": 3}, {"text": "I frequently check my phone during conversations ❌", "points": 4}]},
    {"question": "What type of content do you primarily consume online? 📺", "options": [{"text": "Educational, news, or meaningful content ✅", "points": 1}, {"text": "Mix of educational and entertainment ⚠️", "points": 2}, {"text": "Mostly entertainment and social media ⚠️", "points": 3}, {"text": "Mindless scrolling and viral content ❌", "points": 4}]},
    {"question": "How has your memory been lately? 🧠", "options": [{"text": "Excellent - I remember things clearly ✅", "points": 1}, {"text": "Good - Occasional forgetfulness ⚠️", "points": 2}, {"text": "Poor - Frequently forgetting things ⚠️", "points": 3}, {"text": "Very poor - Constant brain fog ❌", "points": 4}]},
    {"question": "Do you multitask with multiple screens or apps? 📺💻📱", "options": [{"text": "Never - I focus on one thing ✅", "points": 1}, {"text": "Rarely ⚠️", "points": 2}, {"text": "Often ⚠️", "points": 3}, {"text": "Constantly switching between multiple screens ❌", "points": 4}]},
    {"question": "How often do you take breaks from digital devices? 🌿", "options": [{"text": "Daily digital detox periods ✅", "points": 1}, {"text": "Regular breaks throughout the day ⚠️", "points": 2}, {"text": "Occasional breaks ⚠️", "points": 3}, {"text": "Rarely or never ❌", "points": 4}]},
    {"question": "Has your sleep quality been affected by screen use? 😴", "options": [{"text": "No impact - I sleep great ✅", "points": 1}, {"text": "Slight impact occasionally ⚠️", "points": 2}, {"text": "Noticeable impact on sleep ⚠️", "points": 3}, {"text": "Severely disrupted sleep patterns ❌", "points": 4}]},
    {"question": "How do you feel about your current digital habits? 🤔", "options": [{"text": "Very satisfied - I have good balance ✅", "points": 1}, {"text": "Mostly satisfied with some concerns ⚠️", "points": 2}, {"text": "Concerned about my usage ⚠️", "points": 3}, {"text": "Very worried - I feel out of control ❌", "points": 4}]},
    {"question": "How often do you mindlessly reach for your phone? 🤏📱", "options": [{"text": "Never - I'm always intentional ✅", "points": 1}, {"text": "Rarely ⚠️", "points": 2}, {"text": "Several times a day ⚠️", "points": 3}, {"text": "Constantly - it's automatic ❌", "points": 4}]}];
const articles = [
    { "id": 1, "title": "🧠 The 'Brain Rot' Epidemic: Understanding the Cognitive Impact of Your Digital Habits", "slug": "brain-rot-epidemic-cognitive-impact-digital-habits", "excerpt": "Explore how the Oxford Word of the Year 2024 reflects a serious concern about digital overconsumption...", "category": "Brain Health 🧠", "readTime": "12 min read"},
    { "id": 2, "title": "📱 Beyond the Screen: How Digital Addiction Fuels Anxiety, Depression, and Loneliness", "slug": "digital-addiction-mental-health-anxiety-depression", "excerpt": "Discover the complex relationship between excessive digital use and mental health challenges...", "category": "Mental Health 💚", "readTime": "10 min read"},
    { "id": 3, "title": "🌿 Digital Detox Solutions for Mental Clarity", "slug": "digital-detox-strategies-mental-clarity", "excerpt": "Practical solutions to reduce screen time and improve cognitive function through digital detoxing.", "category": "Digital Wellness 🌟", "readTime": "6 min read"},
    { "id": 4, "title": "💚 Screen Time and Mental Health: Recovery Solutions", "slug": "screen-time-mental-health-guide", "excerpt": "Explore the relationship between excessive screen time and mental health, plus actionable recovery solutions.", "category": "Mental Health 💚", "readTime": "7 min read"},
    { "id": 5, "title": "🎯 Focus Solutions for the Digital Age", "slug": "improving-focus-digital-age", "excerpt": "Evidence-based solutions to restore and maintain focus despite digital distractions.", "category": "Productivity 🚀", "readTime": "5 min read"},
    { "id": 6, "title": "🧠 Brain Health Solutions for the Modern World", "slug": "brain-health-tips-modern-world", "excerpt": "Comprehensive solutions to maintain cognitive health while navigating digital demands.", "category": "Brain Health 🧠", "readTime": "9 min read"},
    { "id": 7, "title": "📱 Social Media Recovery Solutions", "slug": "signs-need-social-media-break", "excerpt": "Recognize the warning signs and implement recovery solutions for social media addiction.", "category": "Digital Wellness 🌟", "readTime": "4 min read"}
];
const faqs = [{"question": "What is technology addiction? 🤔💻", "answer": "Technology addiction is a behavioral disorder characterized by the excessive and compulsive use of digital technologies. It is defined not by the amount of time spent online, but by a person's inability to control their usage, their continued use despite negative consequences, and the resulting distress and functional impairment in their daily life."}, {"question": "What are the signs of technology addiction? ⚠️📱", "answer": "Key behaviors that may indicate technology addiction include an inability to control use, lying to others about the frequency of use, having obsessive thoughts or cravings about technology, and experiencing withdrawal symptoms like anxiety or irritability when unable to access devices."}, {"question": "What are some effective digital detox strategies? 🌿📵", "answer": "Effective digital detox strategies involve making intentional choices to reduce screen time and regain control. Examples include scheduling technology breaks, setting aside 'no-phone areas' in the home, and implementing a 'digital sunset' routine where screens are avoided 1-2 hours before bedtime."}, {"question": "How does screen time affect mental health? 💚📱", "answer": "Excessive screen time is linked to numerous mental health challenges, including heightened levels of anxiety, depression, and low self-esteem. This can occur as a result of social comparison on social media, fear of missing out (FOMO), and using technology as an avoidance or coping mechanism."}, {"question": "What is brain rot and is it real? 🧠🤯", "answer": "Brain rot, Oxford's Word of the Year 2024, refers to the perceived deterioration of mental or intellectual state due to overconsumption of trivial or unchallenging online content. While not a formal medical diagnosis, the phenomenon reflects real concerns backed by neuroscientific research showing that excessive digital consumption can lead to structural brain changes."}, {"question": "How long does it take to recover from digital addiction? ⏰🌱", "answer": "Recovery timelines vary significantly based on the severity of addiction, individual circumstances, and commitment to change. Most people notice initial improvements in sleep quality and anxiety levels within 1-2 weeks of reducing screen time. Meaningful changes in attention span and focus typically occur within 4-6 weeks of consistent digital wellness practices."}];
const scoreRanges = [{"min": 0, "max": 15, "level": "🌟 Excellent Digital Health", "color": "#10b981", "description": "🎉 Congratulations! You have excellent digital habits and a healthy relationship with technology! ✨", "solutions": ["🌟 Continue your balanced approach", "👥 Share your healthy habits", "🎓 Consider becoming a digital wellness mentor"]}, {"min": 16, "max": 30, "level": "⚠️ Mild Digital Fatigue", "color": "#f59e0b", "description": "📊 You're experiencing some signs of digital fatigue but are in a great position for quick recovery! 💪", "solutions": ["⏰ Set specific times for social media", "🏠 Establish tech-free zones", "🏃‍♂️ Replace screen time with exercise"]}, {"min": 31, "max": 45, "level": "🔄 Moderate Recovery Needed", "color": "#f97316", "description": "⚠️ Your digital habits show concerning signs, but focused solutions can help you recover! 🌟", "solutions": ["🌿 Implement daily digital detox periods", "📱 Limit social media to 30 mins/day", "🧘‍♀️ Practice daily meditation"]}, {"min": 46, "max": 60, "level": "🆘 Intensive Recovery Plan Needed", "color": "#ef4444", "description": "🚨 You're experiencing significant brain rot symptoms, but complete recovery is possible! 💪✨", "solutions": ["🌿 Start with a 48-hour digital detox", "📉 Reduce screen time by 3 hours weekly", "👨‍⚕️ Consider professional coaching"]}];

// --- Global State ---
let currentQuestion = 0;
let quizScore = 0;
let selectedAnswers = [];
let isQuizActive = false;

// --- App Initialization ---
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
    setupEventListeners();
    populateArticles();
    populateFAQs();
    showPage('home'); 
}

function setupEventListeners() {
    // Nav links
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Page navigation buttons
    document.getElementById('start-quiz-btn').addEventListener('click', () => showPage('quiz'));
    document.getElementById('retakeQuizBtn').addEventListener('click', () => showPage('quiz'));
    document.getElementById('backToHomeBtn').addEventListener('click', () => showPage('home'));
    
    // Quiz controls
    document.getElementById('prevBtn').addEventListener('click', previousQuestion);
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
}

// --- Dynamic Content Population ---
function populateArticles() {
    const articlesGrid = document.getElementById('articlesGrid');
    if (!articlesGrid) return;
    articlesGrid.innerHTML = articles.map(article => `
        <a href="/articles/${article.slug}.html" class="article-card-link">
            <div class="article-card">
                <div class="article-card__body">
                    <div class="article-card__category">${article.category}</div>
                    <h3 class="article-card__title">${article.title}</h3>
                    <p class="article-card__excerpt">${article.excerpt}</p>
                    <div class="article-card__meta">${article.readTime}</div>
                </div>
            </div>
        </a>
    `).join('');
}

function populateFAQs() {
    const faqGrid = document.getElementById('faqGrid');
    if (!faqGrid) return;
    faqGrid.innerHTML = faqs.map(faq => `
        <div class="faq-item">
            <button class="faq-question" aria-expanded="false">${faq.question}</button>
            <div class="faq-answer"><p>${faq.answer}</p></div>
        </div>
    `).join('');
    
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            const isActive = faqItem.classList.toggle('active');
            button.setAttribute('aria-expanded', isActive);
        });
    });
}

// --- Page Visibility ---
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId)?.classList.add('active');
    window.scrollTo(0, 0);

    if (pageId === 'quiz') {
        initializeQuiz();
    }
}

// --- Quiz Logic ---
function initializeQuiz() {
    isQuizActive = true;
    currentQuestion = 0;
    quizScore = 0;
    selectedAnswers = new Array(quizQuestions.length).fill(undefined);
    showQuestion();
}

function showQuestion() {
    const question = quizQuestions[currentQuestion];
    document.getElementById('questionTitle').textContent = question.question;
    const optionsContainer = document.getElementById('questionOptions');
    optionsContainer.innerHTML = question.options.map((option, index) => 
        `<div class="option" data-index="${index}" data-points="${option.points}">${option.text}</div>`
    ).join('');

    optionsContainer.querySelectorAll('.option').forEach(optionEl => {
        optionEl.addEventListener('click', e => {
            const target = e.currentTarget;
            selectOption(parseInt(target.dataset.index), parseInt(target.dataset.points));
        });
    });
    
    updateProgress();
    updateNavigationButtons();
    restoreSelection();
}

function selectOption(index, points) {
    selectedAnswers[currentQuestion] = { index, points };
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    document.querySelector(`.option[data-index='${index}']`)?.classList.add('selected');
    updateNavigationButtons();
}

function restoreSelection() {
    const answer = selectedAnswers[currentQuestion];
    if (answer !== undefined) {
         document.querySelector(`.option[data-index='${answer.index}']`)?.classList.add('selected');
    }
}

function nextQuestion() {
    if (selectedAnswers[currentQuestion] === undefined) return;
    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        finishQuiz();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    document.getElementById('progressText').textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
}

function updateNavigationButtons() {
    document.getElementById('prevBtn').disabled = currentQuestion === 0;
    document.getElementById('nextBtn').disabled = selectedAnswers[currentQuestion] === undefined;
    document.getElementById('nextBtn').textContent = currentQuestion === quizQuestions.length - 1 ? '🏁 Finish' : 'Next ➡️';
}

function finishQuiz() {
    quizScore = selectedAnswers.reduce((total, answer) => total + (answer ? answer.points : 0), 0);
    isQuizActive = false;
    displayResults();
}

function displayResults() {
    const result = scoreRanges.find(range => quizScore >= range.min && quizScore <= range.max);
    const resultsContent = document.getElementById('resultsContent');
    if (resultsContent && result) {
        resultsContent.innerHTML = `
            <div class="results-card">
                <div class="results-card__score" style="color: ${result.color}">${quizScore}/60 📊</div>
                <div class="results-card__level" style="background-color: ${result.color}; color: white;">${result.level}</div>
                <p class="results-card__description">${result.description}</p>
                <div class="solutions-list">
                    <h3>🎯 Recommended Solutions:</h3>
                    <ul>${result.solutions.map(s => `<li>${s}</li>`).join('')}</ul>
                </div>
            </div>
        `;
    }
    showPage('results');
}

