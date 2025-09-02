// Colorful Brain Rot Assessment App JavaScript - FIXED VERSION

// Global variables
let currentQuestion = 0;
let quizScore = 0;
let selectedAnswers = [];
let isQuizActive = false;

// Quiz data with emojis
const quizQuestions = [
    {"question": "How many hours per day do you typically spend on your smartphone? 📱", "options": [{"text": "Less than 2 hours ✅", "points": 1}, {"text": "2-4 hours ⚠️", "points": 2}, {"text": "4-6 hours ⚠️", "points": 3}, {"text": "More than 6 hours ❌", "points": 4}]},
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
    {"question": "How often do you mindlessly reach for your phone? 🤏📱", "options": [{"text": "Never - I'm always intentional ✅", "points": 1}, {"text": "Rarely ⚠️", "points": 2}, {"text": "Several times a day ⚠️", "points": 3}, {"text": "Constantly - it's automatic ❌", "points": 4}]}
];

// Complete articles data - ALL 7 articles with full content
const articles = [
    {
        "id": 1,
        "title": "🧠 The 'Brain Rot' Epidemic: Understanding the Cognitive Impact of Your Digital Habits",
        "slug": "brain-rot-epidemic-cognitive-impact-digital-habits", 
        "excerpt": "Explore how the Oxford Word of the Year 2024 reflects a serious concern about digital overconsumption and its measurable impact on cognitive function and brain health.",
        "category": "Brain Health 🧠",
        "readTime": "12 min read",
        "emoji": "🧠"
    },
    {
        "id": 2,
        "title": "📱 Beyond the Screen: How Digital Addiction Fuels Anxiety, Depression, and Loneliness",
        "slug": "digital-addiction-mental-health-anxiety-depression",
        "excerpt": "Discover the complex relationship between excessive digital use and mental health challenges, and learn why technology often becomes a harmful coping mechanism.",
        "category": "Mental Health 💚", 
        "readTime": "10 min read",
        "emoji": "💚"
    },
    {
        "id": 3,
        "title": "🌿 Digital Detox Solutions for Mental Clarity",
        "slug": "digital-detox-strategies-mental-clarity",
        "excerpt": "Practical solutions to reduce screen time and improve cognitive function through digital detoxing.",
        "category": "Digital Wellness 🌟",
        "readTime": "6 min read", 
        "emoji": "🌿"
    },
    {
        "id": 4,
        "title": "💚 Screen Time and Mental Health: Recovery Solutions",
        "slug": "screen-time-mental-health-guide",
        "excerpt": "Explore the relationship between excessive screen time and mental health, plus actionable recovery solutions.",
        "category": "Mental Health 💚",
        "readTime": "7 min read",
        "emoji": "💚"
    },
    {
        "id": 5,
        "title": "🎯 Focus Solutions for the Digital Age", 
        "slug": "improving-focus-digital-age",
        "excerpt": "Evidence-based solutions to restore and maintain focus despite digital distractions.",
        "category": "Productivity 🚀",
        "readTime": "5 min read",
        "emoji": "🎯"
    },
    {
        "id": 6,
        "title": "🧠 Brain Health Solutions for the Modern World",
        "slug": "brain-health-tips-modern-world", 
        "excerpt": "Comprehensive solutions to maintain cognitive health while navigating digital demands.",
        "category": "Brain Health 🧠",
        "readTime": "9 min read",
        "emoji": "🧠"
    },
    {
        "id": 7,
        "title": "📱 Social Media Recovery Solutions",
        "slug": "signs-need-social-media-break",
        "excerpt": "Recognize the warning signs and implement recovery solutions for social media addiction.",
        "category": "Digital Wellness 🌟",
        "readTime": "4 min read",
        "emoji": "📱"
    }
];

// Complete article content - ALL articles with full content
const articleContent = {
    "brain-rot-epidemic-cognitive-impact-digital-habits": {
        title: "🧠 The 'Brain Rot' Epidemic: Understanding the Cognitive Impact of Your Digital Habits",
        category: "Brain Health 🧠",
        readTime: "12 min read",
        body: `
            <p>The term 'Brain Rot' has exploded into mainstream consciousness, earning recognition as Oxford's Word of the Year 2024 with a staggering 230% increase in usage. But behind this viral slang lies a serious scientific reality about how our digital habits are reshaping our brains and cognitive capabilities. 🧠💔</p>
            
            <h2>🤯 What is 'Brain Rot'? From Viral Slang to a Modern Anxiety</h2>
            <p>Oxford defines 'Brain Rot' as 'the supposed deterioration of a person's mental or intellectual state' due to overconsumption of 'trivial or unchallenging' online content. While not a medical diagnosis, this term captures a genuine anxiety experienced by millions, particularly Gen Z and Gen Alpha, who intuitively recognize something troubling about their digital consumption patterns. 📱😵‍💫</p>

            <p>The phenomenon extends beyond simple time management issues. Brain rot represents a fundamental concern about cognitive quality degradation—the sense that constant exposure to rapid-fire, low-quality digital content is literally changing how we think, process information, and engage with the world. 🔄💭</p>
            
            <h2>🔬 The Science of 'Brain Rot': How Screens Change Your Brain</h2>
            <p>Neuroscientific research validates many concerns behind the brain rot phenomenon. Studies consistently demonstrate that excessive digital use, especially during critical developmental periods, leads to measurable structural brain changes. 🧬⚡</p>
            
            <p>Research indicates reductions in both gray and white matter volume in brain regions responsible for:</p>
            <ul>
                <li>🎯 Executive function and decision-making</li>
                <li>🎮 Reward processing and impulse control</li>
                <li>😌 Emotional regulation and stress response</li>
                <li>📖 Attention span and sustained focus</li>
                <li>🧠 Memory consolidation and recall</li>
            </ul>

            <p>These changes aren't merely correlational—they represent actual neuroplasticity in response to digital stimulation patterns. The brain, designed to adapt to environmental demands, restructures itself based on repetitive digital behaviors, often in ways that compromise higher-order thinking skills. 🧠🔄</p>
            
            <h2>🔄 The Vicious Cycle of Low-Quality Content</h2>
            <p>Digital platforms are engineered to capture and hold attention through sophisticated behavioral psychology. Short-form content, infinite scroll mechanisms, and variable reward schedules create what researchers term 'cognitive overload'—a state where the brain becomes overwhelmed by rapid information processing demands. ⚡🤯</p>
            
            <p>This overload manifests as:</p>
            <ul>
                <li>💭 Decreased ability to engage in deep, sustained thinking</li>
                <li>⏰ Reduced tolerance for activities requiring patience or concentration</li>
                <li>⚡ Heightened need for constant stimulation and novelty</li>
                <li>🚫 Difficulty with tasks that don't provide immediate gratification</li>
                <li>😐 Emotional desensitization requiring increasingly intense content for engagement</li>
            </ul>

            <p>The cycle becomes self-reinforcing: as attention spans decrease, individuals gravitate toward even shorter, more stimulating content, further compromising cognitive capabilities. 🔄📉</p>
            
            <h2>📱💀 Beyond the Scroll: Understanding Doomscrolling and Zombie Scrolling</h2>
            <p>Two specific behaviors exemplify the brain rot phenomenon:</p>

            <p><strong>😰 Doomscrolling</strong> involves compulsive consumption of negative news and distressing content. This behavior triggers chronic stress responses, flooding the brain with cortisol and other stress hormones that impair memory formation, emotional regulation, and immune function. 💔⚡</p>

            <p><strong>🧟‍♂️ Zombie Scrolling</strong> represents passive, purposeless content consumption where individuals scroll through feeds without conscious intention or meaningful engagement. This behavioral pattern develops automatic neural pathways that bypass critical thinking and intentional decision-making. 🤖🔄</p>

            <p>Both behaviors contribute to what neuroscientists call 'attentional residue'—the lingering cognitive effects that persist even after device use ends, making it difficult to fully engage in offline activities. 🧠💫</p>

            <h2>🌟 Recovery is Possible!</h2>
            <p>The good news is that brain rot symptoms are largely reversible! Through structured digital detox programs, mindful technology use, and cognitive rehabilitation exercises, individuals can restore their mental clarity and focus. 💪✨</p>
            
            <p>Take our comprehensive assessment to understand your current digital wellness level and receive personalized recovery recommendations! 🎯📊</p>
        `
    },
    "digital-addiction-mental-health-anxiety-depression": {
        title: "📱 Beyond the Screen: How Digital Addiction Fuels Anxiety, Depression, and Loneliness",
        category: "Mental Health 💚",
        readTime: "10 min read",
        body: `
            <p>The relationship between digital technology and mental health is far more nuanced than simple cause-and-effect. While technology itself isn't inherently harmful, excessive and compulsive use patterns can exacerbate existing psychological vulnerabilities and create new mental health challenges. 💚📱</p>
            
            <h2>😔 The Paradox of Online Connection: From FOMO to Isolation</h2>
            <p>Social media platforms promise connection but often deliver the opposite. The phenomenon known as Fear of Missing Out (FOMO) illustrates this paradox perfectly. Constant exposure to others' curated experiences creates a persistent anxiety about one's own life choices and experiences. 😰📸</p>

            <p>Research consistently shows that heavy social media users report higher levels of loneliness and social isolation, despite being more 'connected' than ever before. This occurs because:</p>
            <ul>
                <li>👥 Virtual interactions often lack the emotional depth of face-to-face communication</li>
                <li>📸 Curated content creates unrealistic comparison standards</li>
                <li>🤳 Passive consumption replaces active social engagement</li>
                <li>🌐 Users become 'suspended from the physical world' while engaging online</li>
            </ul>
            
            <h2>👍❤️ The Search for Validation: Low Self-Esteem and Social Media</h2>
            <p>Individuals with pre-existing self-esteem issues are particularly vulnerable to problematic social media use. The platforms' design around likes, comments, and shares creates external validation systems that can become psychologically addictive. 💔📲</p>

            <p>This creates a 'vicious cycle of negative self-perceptions':</p>
            <ol>
                <li>📈 Low self-esteem drives increased social media use seeking validation</li>
                <li>📉 Exposure to idealized content worsens self-comparison and self-image</li>
                <li>🔄 Decreased self-esteem increases reliance on external validation</li>
                <li>💔 The cycle intensifies, making it harder to develop authentic self-worth</li>
            </ol>

            <p>For females especially, research indicates heightened vulnerability to anxiety related to aesthetic standards and beautification promoted on visual platforms like Instagram and TikTok. 💄📱</p>
            
            <h2>🧠💔 The Neurological Link: Brain Changes and Emotional Health</h2>
            <p>The structural brain changes associated with excessive digital use directly impact emotional regulation capabilities. Alterations in the prefrontal cortex—responsible for executive function and emotional control—can manifest as:</p>
            <ul>
                <li>🎭 Increased impulsivity and decreased emotional regulation</li>
                <li>😰 Heightened anxiety and stress responses</li>
                <li>😤 Difficulty managing frustration and disappointment</li>
                <li>🤝 Reduced empathy and social awareness</li>
                <li>⏰ Impaired ability to delay gratification</li>
            </ul>

            <p>These neurological changes help explain why digital addiction often co-occurs with anxiety, depression, and attention disorders. The brain literally becomes less equipped to handle emotional challenges and stressors. 🧠⚡</p>
            
            <h2>🆘 When to Seek Help: Recognizing the Signs of a Problem</h2>
            <p>Digital use becomes problematic when it significantly impacts daily functioning and well-being. Warning signs include:</p>
            <ul>
                <li>⚠️ Inability to control usage despite negative consequences</li>
                <li>🤥 Lying about or hiding the extent of digital use</li>
                <li>📵 Experiencing anxiety, irritability, or depression when unable to access devices</li>
                <li>💼 Neglecting relationships, work, or personal care due to digital activities</li>
                <li>🙈 Using technology primarily to avoid or cope with negative emotions</li>
                <li>🏥 Physical symptoms like sleep disruption, eye strain, or repetitive motion injuries</li>
            </ul>

            <p>Professional help should be considered when these patterns persist despite attempts at self-regulation, or when digital use significantly interferes with mental health, relationships, or life goals. 👨‍⚕️💚</p>

            <h2>🌟 Recovery and Hope</h2>
            <p>Remember, recovery is absolutely possible! With the right strategies, support, and commitment, you can rebuild a healthy relationship with technology and restore your mental wellbeing. 💪✨</p>
        `
    },
    "digital-detox-strategies-mental-clarity": {
        title: "🌿 Digital Detox Solutions for Mental Clarity",
        category: "Digital Wellness 🌟",
        readTime: "6 min read",
        body: `
            <p>Digital detox is one of the most effective solutions for restoring mental clarity and cognitive function. By strategically reducing screen time, you allow your brain to reset and rebuild its natural attention mechanisms. 🧠🌿</p>
            
            <h2>🔄 Start Small: The 24-Hour Reset</h2>
            <p>Start with a complete 24-hour digital detox once per week. Use this time for reading 📚, exercise 🏃‍♂️, social interaction 👥, or creative pursuits 🎨. This solution helps break automatic usage patterns and restores natural dopamine balance. ⚖️✨</p>
            
            <h2>📉 Gradual Reduction Strategy</h2>
            <p>Implement a gradual reduction strategy: decrease daily screen time by 30 minutes each week until you reach your target. Replace this time with brain-healthy activities like meditation 🧘‍♀️, journaling ✍️, or outdoor exercise 🌳. 📝💪</p>
            
            <h2>🏠 Create Tech-Free Sanctuaries</h2>
            <p>Designate specific areas of your home as technology-free recovery spaces. Your bedroom 🛏️, dining room 🍽️, or a reading corner 📖 become sanctuaries for mental restoration and deep thinking. 🧠🌟</p>
            
            <h2>⏸️ The Purpose Pause Technique</h2>
            <p>Before reaching for your device, implement the 'Purpose Pause' - ask yourself: 'What specific goal am I trying to accomplish?' This solution breaks automatic usage patterns and promotes intentional technology use. 🎯💭</p>

            <h2>🌱 Alternative Activities for Mental Clarity</h2>
            <p>Replace screen time with activities that actively restore cognitive function:</p>
            <ul>
                <li>📚 Reading physical books or magazines</li>
                <li>🎨 Creative hobbies like drawing, painting, or crafting</li>
                <li>🌳 Nature walks and outdoor activities</li>
                <li>🧘‍♀️ Meditation and mindfulness practices</li>
                <li>👥 Face-to-face social interactions</li>
                <li>🎵 Playing musical instruments</li>
                <li>🍳 Cooking and baking</li>
                <li>🧩 Puzzles and brain games</li>
            </ul>

            <h2>📱 Digital Boundaries That Work</h2>
            <p>Establish clear boundaries to maintain your digital detox:</p>
            <ul>
                <li>📵 No phones during meals</li>
                <li>🛏️ Charge devices outside the bedroom</li>
                <li>⏰ Set specific times for checking messages</li>
                <li>🌅 Create morning and evening phone-free periods</li>
                <li>📱 Use app timers and website blockers</li>
            </ul>

            <h2>🎯 Measuring Your Progress</h2>
            <p>Track improvements in:</p>
            <ul>
                <li>⏰ Attention span duration</li>
                <li>😴 Sleep quality</li>
                <li>😌 Stress levels</li>
                <li>💭 Mental clarity</li>
                <li>👥 Relationship quality</li>
                <li>🎯 Productivity levels</li>
            </ul>

            <p>Remember, digital detox is a journey, not a destination. Start small, be consistent, and celebrate your progress! 🌟💪</p>
        `
    },
    "screen-time-mental-health-guide": {
        title: "💚 Screen Time and Mental Health: Recovery Solutions",
        category: "Mental Health 💚",
        readTime: "7 min read",
        body: `
            <p>Excessive screen time significantly impacts mental health, contributing to increased rates of anxiety, depression, and attention disorders. The good news is that these effects are largely reversible with the right solutions. 💚🌟</p>
            
            <h2>🧠⚡ Dopamine Fasting Approach</h2>
            <p>Implement a dopamine fasting approach: take regular breaks from high-stimulation digital content. Engage in low-stimulation activities like reading 📚, walking 🚶‍♀️, or meditation 🧘‍♂️ to restore natural reward sensitivity. ⚖️✨</p>
            
            <h2>🌅 Digital Sunset Routine</h2>
            <p>Create a 'digital sunset' routine: no screens 1-2 hours before bedtime. Use blue light filters after sunset 🌙 and keep devices out of the bedroom. Quality sleep is crucial for mental health recovery. 😴💤</p>
            
            <h2>👥💝 Real-World Connections</h2>
            <p>Replace virtual interactions with face-to-face connections. Schedule regular device-free social activities, join local groups 🏘️, or engage in community volunteering 🤝 to rebuild real-world relationships. 🌍💖</p>
            
            <h2>👨‍⚕️👩‍⚕️ Professional Support</h2>
            <p>If screen time significantly impacts your mental health, consider working with a therapist who specializes in digital wellness. Many professionals now offer targeted solutions for technology-related mental health issues. 🏥💚</p>

            <h2>🧠 Understanding the Mental Health Impact</h2>
            <p>Excessive screen time affects mental health through multiple pathways:</p>
            <ul>
                <li>😰 Increased cortisol and stress hormones</li>
                <li>💔 Disrupted social connections and empathy</li>
                <li>😴 Poor sleep quality and circadian rhythm disruption</li>
                <li>🎭 Emotional dysregulation and mood swings</li>
                <li>🧠 Reduced attention span and cognitive flexibility</li>
                <li>📉 Decreased self-esteem from social comparison</li>
            </ul>

            <h2>🌟 Recovery Timeline and Expectations</h2>
            <p>Mental health recovery from excessive screen use typically follows this timeline:</p>
            <ul>
                <li>📅 <strong>Week 1-2:</strong> Improved sleep quality, reduced anxiety</li>
                <li>📅 <strong>Week 3-4:</strong> Better mood stability, increased focus</li>
                <li>📅 <strong>Week 5-8:</strong> Enhanced social connections, improved self-esteem</li>
                <li>📅 <strong>Month 3+:</strong> Sustained mental health improvements, new healthy habits</li>
            </ul>

            <p>Remember, seeking help is a sign of strength, not weakness. Mental health recovery is a journey, and you don't have to do it alone! 💪💚</p>
        `
    },
    "improving-focus-digital-age": {
        title: "🎯 Focus Solutions for the Digital Age",
        category: "Productivity 🚀",
        readTime: "5 min read",
        body: `
            <p>Rebuilding focus in the digital age requires targeted solutions that gradually strengthen your attention span. The average person can restore significant focus capacity within 4-6 weeks of consistent practice. 🎯⏰</p>
            
            <h2>🍅⏰ The Pomodoro Power Method</h2>
            <p>Use focused work periods of 25 minutes with all digital distractions eliminated, followed by 5-minute analog breaks. During breaks, engage in physical movement 🏃‍♂️ or breathing exercises 🌬️ rather than checking devices. 📵💪</p>
            
            <h2>🚫📱 Distraction-Free Zones</h2>
            <p>Create distraction-free zones optimized for focus: remove visual clutter, use noise-canceling headphones 🎧, and position devices completely out of sight during focused work periods. 🎯✨</p>
            
            <h2>🧘‍♀️🎯 Daily Attention Training</h2>
            <p>Practice daily attention training: start with 5-10 minutes of focused breathing or mindfulness meditation. Gradually increase duration as your attention span strengthens. This builds the neural pathways needed for sustained focus. 🧠💪</p>
            
            <h2>1️⃣ Single-Tasking Protocol</h2>
            <p>Implement strict single-tasking protocols: when reading, just read 📖; when eating, just eat 🍽️. This solution rebuilds the neural pathways associated with sustained attention and deep processing. 🧠🔄</p>

            <h2>📊 Understanding Attention in the Digital Age</h2>
            <p>Digital distractions fragment our attention through:</p>
            <ul>
                <li>⚡ Constant notifications and interruptions</li>
                <li>🔄 Rapid task-switching and multitasking</li>
                <li>📱 Endless scroll mechanisms designed to capture attention</li>
                <li>🎮 Variable reward schedules that create addiction-like patterns</li>
                <li>⏰ Shortened content formats that reduce attention span</li>
            </ul>

            <h2>🏋️‍♂️ Progressive Focus Training Exercises</h2>
            <p>Build attention strength gradually:</p>
            <ul>
                <li>📅 <strong>Week 1-2:</strong> 5-10 minute focused sessions</li>
                <li>📅 <strong>Week 3-4:</strong> 15-20 minute focused sessions</li>
                <li>📅 <strong>Week 5-6:</strong> 25-30 minute focused sessions</li>
                <li>📅 <strong>Week 7+:</strong> 45-60+ minute deep work sessions</li>
            </ul>

            <p>Remember, focus is like a muscle—the more you exercise it, the stronger it becomes! Start small and be consistent. 💪🎯</p>
        `
    },
    "brain-health-tips-modern-world": {
        title: "🧠 Brain Health Solutions for the Modern World",
        category: "Brain Health 🧠",
        readTime: "9 min read",
        body: `
            <p>Protecting your brain health requires intentional solutions tailored to our digital environment. The key is implementing multiple complementary strategies that work together to optimize cognitive function. 🧠✨</p>
            
            <h2>💪🧠 Exercise for Cognitive Power</h2>
            <p>Implement a daily 30-minute exercise routine focused on aerobic activity. This increases BDNF (brain-derived neurotrophic factor), promotes new neural connections, and directly counters the cognitive decline associated with excessive screen time. 🏃‍♂️⚡</p>
            
            <h2>🥗🐟 Brain-Healthy Nutrition</h2>
            <p>Adopt a brain-healthy diet rich in omega-3 fatty acids 🐟, antioxidants 🫐, and complex carbohydrates 🍠. Reduce caffeine ☕ and sugar 🍬 intake, which can disrupt sleep and attention. Consider intermittent fasting to promote brain cell regeneration. 🌟</p>
            
            <h2>😴🌙 Sleep Hygiene Excellence</h2>
            <p>Implement strict sleep hygiene: 7-9 hours of quality sleep, consistent sleep schedule, and a complete digital shutdown 2 hours before bed. Quality sleep is when your brain clears toxins and consolidates memories. 🧠💤</p>
            
            <h2>👥💕 Social Connection Power</h2>
            <p>Schedule regular face-to-face interactions: join clubs 🏘️, attend community events 🎪, or engage in team sports ⚽. Real-world social connections are crucial for cognitive health and emotional well-being. 🤝💖</p>
            
            <h2>🧩🎼 Cognitive Challenges</h2>
            <p>Challenge your brain with new skills: learn a language 🗣️, play a musical instrument 🎹, or engage in complex puzzles 🧩. This builds cognitive reserve and protects against age-related decline while countering digital brain rot. 💪🧠</p>

            <h2>🧬 Understanding Brain Neuroplasticity</h2>
            <p>Your brain's ability to change and adapt (neuroplasticity) means recovery is always possible! Key principles:</p>
            <ul>
                <li>🔄 Neurons that fire together, wire together</li>
                <li>🏋️‍♂️ Challenge creates growth</li>
                <li>⏰ Consistency is more important than intensity</li>
                <li>🌱 New experiences promote new neural pathways</li>
                <li>🧘‍♀️ Mindfulness enhances neuroplastic changes</li>
            </ul>

            <h2>🍎 Comprehensive Nutrition for Brain Health</h2>
            <p>Feed your brain with these essential nutrients:</p>
            <ul>
                <li>🐟 <strong>Omega-3s:</strong> Salmon, walnuts, chia seeds</li>
                <li>🫐 <strong>Antioxidants:</strong> Blueberries, dark chocolate, green tea</li>
                <li>🥬 <strong>Folate:</strong> Leafy greens, legumes, avocado</li>
                <li>🥜 <strong>Vitamin E:</strong> Nuts, seeds, olive oil</li>
                <li>🍳 <strong>Choline:</strong> Eggs, fish, broccoli</li>
                <li>🌶️ <strong>Curcumin:</strong> Turmeric, curry spices</li>
            </ul>

            <p>Remember, brain health is a lifelong journey. Start implementing these solutions today, and your future self will thank you! 🧠💪✨</p>
        `
    },
    "signs-need-social-media-break": {
        title: "📱 Social Media Recovery Solutions",
        category: "Digital Wellness 🌟",
        readTime: "4 min read",
        body: `
            <p>Social media addiction affects millions, but recovery is possible with targeted solutions. Knowing when to take action and having a clear recovery plan is crucial for mental health and cognitive well-being. 📱💚</p>
            
            <h2>👀💪 Physical Symptoms Solutions</h2>
            <p>Address physical symptoms with targeted solutions: use the 20-20-20 rule for eye strain 👁️, perform neck stretches every hour 🤸‍♀️, and establish a strict digital curfew 🌙 to restore sleep patterns. 😴✨</p>
            
            <h2>💚🌈 Mental Health Recovery</h2>
            <p>Combat social media-induced anxiety and depression with replacement activities: practice gratitude journaling ✍️, engage in creative hobbies 🎨, and build self-esteem through real-world accomplishments 🏆 rather than online validation. 🌟💪</p>
            
            <h2>📵🚫 App Management Strategy</h2>
            <p>Implement app blockers during work hours, create phone-free work zones 💼, and use the 'phone in another room' strategy during focused tasks. Replace social media breaks with physical movement 🏃‍♀️ or deep breathing 🌬️. ⚡🎯</p>
            
            <h2>👥💝 Real Connection Priority</h2>
            <p>Prioritize face-to-face interactions: establish device-free meal times 🍽️, plan regular social activities without phones 🚫📱, and practice active listening 👂 during conversations. Real connections are far more fulfilling than virtual ones. 💖🤝</p>
            
            <h2>📅✨ 30-Day Recovery Plan</h2>
            <p>Commit to a structured 30-day social media reduction plan:</p>
            <ul>
                <li>📅 <strong>Week 1:</strong> Reduce usage by 50% 📉</li>
                <li>📅 <strong>Week 2:</strong> Eliminate during work hours 💼</li>
                <li>📅 <strong>Week 3:</strong> Weekend digital detox 🌿</li>
                <li>📅 <strong>Week 4:</strong> Social media only for essential communication 💬</li>
            </ul>

            <h2>🚨 Warning Signs You Need a Break</h2>
            <p>Recognize these red flags:</p>
            <ul>
                <li>😰 Anxiety when unable to check social media</li>
                <li>👀 Eye strain and headaches from excessive scrolling</li>
                <li>😴 Sleep disruption from late-night social media use</li>
                <li>📉 Decreased productivity at work or school</li>
                <li>💔 Feelings of inadequacy after viewing others' posts</li>
                <li>⏰ Losing track of time while scrolling</li>
                <li>😢 Using social media to cope with negative emotions</li>
                <li>👥 Preferring online interactions over face-to-face</li>
            </ul>

            <h2>🌟 Healthy Social Media Habits</h2>
            <p>Once you've recovered, maintain balance with:</p>
            <ul>
                <li>⏰ Set specific times for social media use</li>
                <li>🎯 Follow accounts that inspire and educate</li>
                <li>🚫 Unfollow accounts that make you feel bad</li>
                <li>💭 Practice mindful scrolling with intention</li>
                <li>📵 Use app timers to limit daily usage</li>
                <li>🌅 No social media first/last hour of day</li>
                <li>👥 Prioritize real-world relationships</li>
            </ul>

            <p>Remember, taking a social media break isn't about perfection—it's about creating a healthier relationship with technology. Start small, be kind to yourself, and celebrate every step forward! 🌟💪</p>
        `
    }
};

// FAQ Data with emojis
const faqs = [
    {
        "question": "What is technology addiction? 🤔💻",
        "answer": "Technology addiction is a behavioral disorder characterized by the excessive and compulsive use of digital technologies. It is defined not by the amount of time spent online, but by a person's inability to control their usage, their continued use despite negative consequences, and the resulting distress and functional impairment in their daily life. The American Psychiatric Association recognizes various forms including online gaming, social media, internet surfing, and online shopping addictions. 📱⚠️"
    },
    {
        "question": "What are the signs of technology addiction? ⚠️📱",
        "answer": "Key behaviors that may indicate technology addiction include an inability to control use, lying to others about the frequency of use, having obsessive thoughts or cravings about technology, and experiencing withdrawal symptoms like anxiety or irritability when unable to access devices. Physical symptoms such as eye strain, headaches, sleep disruption, and neglect of personal hygiene may also occur. The behavior continues despite knowing it has negative consequences on relationships, work, or health. 🚨💔"
    },
    {
        "question": "What are some effective digital detox strategies? 🌿📵",
        "answer": "Effective digital detox strategies involve making intentional choices to reduce screen time and regain control. Examples include scheduling technology breaks during the day, setting aside 'no-phone areas' in the home like the bedroom and dining room, adjusting phone settings to limit access to certain apps with timers or app blockers, implementing a 'digital sunset' routine where screens are avoided 1-2 hours before bedtime, and in some cases, temporarily downgrading to a simpler phone. The key is gradual reduction rather than complete elimination, making the changes sustainable long-term. 🎯💪"
    },
    {
        "question": "How does screen time affect mental health? 💚📱",
        "answer": "Excessive screen time is linked to numerous mental health challenges, including heightened levels of anxiety, depression, and low self-esteem. This can occur as a result of social comparison on social media, fear of missing out (FOMO), and using technology as an avoidance or coping mechanism that ultimately worsens feelings of isolation and stress. Research shows structural brain changes in areas responsible for emotional regulation, leading to increased impulsivity and decreased ability to manage negative emotions. The constant stimulation can also disrupt sleep patterns, which significantly impacts mental health. 😰💔"
    },
    {
        "question": "How can I tell if I'm addicted to social media? 📲❤️",
        "answer": "Social media addiction signs include compulsively checking apps throughout the day, feeling anxious when unable to access social platforms, experiencing FOMO when seeing others' posts, spending more time online than intended, neglecting real-world relationships and responsibilities, using social media to cope with negative emotions, and continuing to use platforms despite knowing they make you feel worse. Physical signs may include poor posture from device use, eye strain, and sleep disruption from late-night scrolling. 📱😵‍💫"
    },
    {
        "question": "What is brain rot and is it real? 🧠🤯",
        "answer": "Brain rot, Oxford's Word of the Year 2024, refers to the perceived deterioration of mental or intellectual state due to overconsumption of trivial or unchallenging online content. While not a formal medical diagnosis, the phenomenon reflects real concerns backed by neuroscientific research. Studies show that excessive digital consumption can lead to structural brain changes, including reduced gray and white matter in areas responsible for attention, memory, and executive function. The term captures the genuine cognitive fatigue and mental numbness many people experience from low-quality digital content consumption. 🧬⚡"
    },
    {
        "question": "How long does it take to recover from digital addiction? ⏰🌱",
        "answer": "Recovery timelines vary significantly based on the severity of addiction, individual circumstances, and commitment to change. Most people notice initial improvements in sleep quality and anxiety levels within 1-2 weeks of reducing screen time. Meaningful changes in attention span and focus typically occur within 4-6 weeks of consistent digital wellness practices. Full cognitive recovery and establishment of healthy digital habits generally takes 2-3 months of sustained effort. However, like other behavioral addictions, ongoing maintenance and mindfulness are required to prevent relapse into problematic patterns. 📈💪"
    },
    {
        "question": "What are the physical symptoms of too much screen time? 👀💪",
        "answer": "Physical symptoms of excessive screen time include eye strain and dry eyes, headaches and migraines, neck and shoulder pain from poor posture ('tech neck'), disrupted sleep patterns, increased risk of obesity from sedentary behavior, repetitive strain injuries in hands and wrists, and weakened immune function from chronic stress and poor sleep. Some individuals also experience digestive issues from irregular eating patterns and vitamin D deficiency from lack of outdoor activity. These symptoms often improve relatively quickly once screen time is reduced and healthy habits are established. 🏥⚡"
    },
    {
        "question": "How can parents help children with digital addiction? 👨‍👩‍👧‍👦📱",
        "answer": "Parents can help by establishing clear, consistent digital boundaries and family rules about device use, creating tech-free zones and times (especially bedrooms and meals), modeling healthy digital behavior themselves, providing engaging offline activities and alternatives, having open conversations about digital wellness and online experiences, using parental controls and monitoring apps appropriately for the child's age, encouraging face-to-face social activities and outdoor time, and seeking professional help if the child shows signs of serious digital addiction such as declining grades, social withdrawal, or extreme emotional reactions to digital restrictions. 👨‍👩‍👧‍👦💖"
    },
    {
        "question": "When should I seek professional help for digital addiction? 🆘👨‍⚕️",
        "answer": "Professional help should be considered when digital use significantly interferes with daily functioning, relationships, work, or school performance despite multiple attempts at self-regulation. Specific indicators include experiencing severe anxiety or depression when unable to access devices, lying about or hiding the extent of digital use, neglecting basic self-care or responsibilities, having thoughts of self-harm related to online experiences, showing signs of other mental health conditions like anxiety or depression that may be exacerbated by digital use, or when family relationships are severely strained by digital behavior. Mental health professionals specializing in behavioral addictions can provide personalized treatment plans and support. 🏥💚"
    }
];

const scoreRanges = [
    {"min": 0, "max": 15, "level": "🌟 Excellent Digital Health", "color": "#10b981", "description": "🎉 Congratulations! You have excellent digital habits and a healthy relationship with technology! ✨", "solutions": ["🌟 Continue your balanced approach to technology use", "👥 Share your healthy habits with friends and family", "🎓 Consider becoming a digital wellness mentor", "🧘‍♀️ Try mindful tech use practices", "🤝 Help others in online communities"]},
    {"min": 16, "max": 30, "level": "⚠️ Mild Digital Fatigue", "color": "#f59e0b", "description": "📊 You're experiencing some signs of digital fatigue but are in a great position for quick recovery! 💪", "solutions": ["⏰ Set specific times for checking social media", "👀 Practice the 20-20-20 rule", "🏠 Establish tech-free zones in bedroom and dining area", "📱 Use app timers to create boundaries", "🏃‍♂️ Replace one hour of screen time with exercise"]},
    {"min": 31, "max": 45, "level": "🔄 Moderate Recovery Needed", "color": "#f97316", "description": "⚠️ Your digital habits show concerning signs, but focused solutions can help you recover within 4-6 weeks! 🌟", "solutions": ["🌿 Implement daily 2-hour digital detox periods", "📱 Limit social media to 30 minutes per day", "🎯 Replace 2 hours of screen time with offline activities", "🧘‍♀️ Practice 15 minutes of daily meditation", "📵 Create a phone parking station", "👥 Join local groups for real-world connections"]},
    {"min": 46, "max": 60, "level": "🆘 Intensive Recovery Plan Needed", "color": "#ef4444", "description": "🚨 You're experiencing significant brain rot symptoms, but complete recovery is possible with our intensive plan! 💪✨", "solutions": ["🌿 Start with a complete 48-hour digital detox", "📉 Reduce screen time by 3 hours per week", "🏃‍♂️ Replace 4+ hours daily with exercise and social activities", "🌙 Implement no phones after 8pm rule", "👨‍⚕️ Consider professional digital wellness coaching", "👥 Join a digital detox support group", "🚫 Use website blockers and app restrictions", "🧘‍♀️ Practice 20 minutes daily meditation"]}
];

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing colorful Brain Rot Assessment app...');
    initializeApp();
    setupEventListeners();
    populateArticles();
    populateFAQs();
    setupScrollEffects();
});

// App Initialization
function initializeApp() {
    showPage('home');
    resetQuiz();
}

// Event Listeners Setup
function setupEventListeners() {
    console.log('🎯 Setting up event listeners...');
    
    // Navigation toggle for mobile
    const navToggle = document.getElementById('navToggle');
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileNav);
    }
    
    // Navigation links - Fix the event handling
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const target = href.substring(1);
                console.log('🔗 Navigation click:', target);
                showPage(target);
                closeMobileNav();
            }
        });
    });
    
    // Hero buttons - Add proper event listeners
    const takeAssessmentBtn = document.querySelector('.hero__buttons .btn--primary');
    if (takeAssessmentBtn) {
        takeAssessmentBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('🧠 Take Assessment clicked');
            showPage('quiz');
        });
    }
    
    const learnMoreBtn = document.querySelector('.hero__buttons .btn--outline');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('📖 Learn More clicked');
            scrollToSection('about');
        });
    }
    
    // Window scroll events
    window.addEventListener('scroll', handleScroll);
}

// Global functions for inline event handlers
window.showPage = function(pageId) {
    console.log('📄 Showing page:', pageId);
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo(0, 0);
        
        // Initialize quiz if showing quiz page
        if (pageId === 'quiz' && !isQuizActive) {
            setTimeout(() => {
                initializeQuiz();
            }, 100);
        }
    } else {
        console.error('❌ Page not found:', pageId);
    }
};

window.scrollToSection = function(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

window.nextQuestion = function() {
    console.log('➡️ Next question clicked, current:', currentQuestion + 1);
    
    if (selectedAnswers[currentQuestion] === undefined) {
        alert('🤔 Please select an answer before continuing!');
        return;
    }
    
    currentQuestion++;
    
    if (currentQuestion < quizQuestions.length) {
        showQuestion();
        updateProgress();
        updateNavigationButtons();
    } else {
        finishQuiz();
    }
};

window.previousQuestion = function() {
    console.log('⬅️ Previous question clicked, current:', currentQuestion + 1);
    
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
        updateProgress();
        updateNavigationButtons();
    }
};

window.resetQuiz = function() {
    console.log('🔄 Resetting quiz...');
    
    currentQuestion = 0;
    quizScore = 0;
    selectedAnswers = [];
    isQuizActive = false;
    
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (progressFill) progressFill.style.width = '0%';
    if (progressText) progressText.textContent = 'Question 1 of 15';
};

window.scrollToTop = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.showResults = function() {
    console.log('📊 Showing results...');
    
    const resultsContent = document.getElementById('resultsContent');
    
    // Find appropriate score range
    const result = scoreRanges.find(range => quizScore >= range.min && quizScore <= range.max);
    
    console.log('🎯 Result found:', result);
    
    if (resultsContent && result) {
        resultsContent.innerHTML = `
            <div class="results-card">
                <div class="results-card__score" style="color: ${result.color}">
                    ${quizScore}/60 📊
                </div>
                <div class="results-card__level" style="background-color: ${result.color}; color: white;">
                    ${result.level}
                </div>
                <p class="results-card__description">
                    ${result.description}
                </p>
                <div class="solutions-list">
                    <h3>🎯 Recommended Solutions:</h3>
                    <ul>
                        ${result.solutions.map(solution => `<li>${solution}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }
    
    showPage('results');
};

window.shareArticle = function(platform) {
    const currentUrl = window.location.href;
    const title = document.querySelector('.article__content h1')?.textContent || 'Brain Rot Assessment';
    
    let shareUrl = '';
    
    switch(platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
};

// Navigation Functions
function toggleMobileNav() {
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    
    if (navMenu && navToggle) {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    }
}

function closeMobileNav() {
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    
    if (navMenu && navToggle) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
}

function handleScroll() {
    const backToTopBtn = document.getElementById('backToTop');
    
    // Show/hide back to top button
    if (backToTopBtn) {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }
}

function setupScrollEffects() {
    // Add fade-in animation to content cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.content-card, .article-card, .resource-category, .faq-item').forEach(card => {
        observer.observe(card);
    });
}

// Quiz Functions
function initializeQuiz() {
    console.log('🧠 Initializing colorful quiz...');
    
    currentQuestion = 0;
    quizScore = 0;
    selectedAnswers = [];
    isQuizActive = true;
    
    showQuestion();
    updateProgress();
    updateNavigationButtons();
}

function showQuestion() {
    const question = quizQuestions[currentQuestion];
    const questionTitle = document.getElementById('questionTitle');
    const questionOptions = document.getElementById('questionOptions');
    
    console.log('❓ Showing question:', currentQuestion + 1, question?.question);
    
    if (questionTitle) {
        questionTitle.textContent = question.question;
    }
    
    if (questionOptions) {
        questionOptions.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option.text;
            optionElement.addEventListener('click', () => selectOption(index, option.points));
            questionOptions.appendChild(optionElement);
        });
        
        // Restore previous selection if exists
        if (selectedAnswers[currentQuestion] !== undefined) {
            const selectedIndex = selectedAnswers[currentQuestion].index;
            const selectedOption = questionOptions.children[selectedIndex];
            if (selectedOption) {
                selectedOption.classList.add('selected');
            }
        }
    }
}

function selectOption(index, points) {
    console.log('✅ Selected option:', index, 'Points:', points);
    
    // Remove previous selection
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selection to clicked option
    const options = document.querySelectorAll('.option');
    if (options[index]) {
        options[index].classList.add('selected');
    }
    
    // Store answer
    selectedAnswers[currentQuestion] = { index, points };
    
    // Enable next button
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.disabled = false;
    }
}

function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
    
    if (progressFill) {
        progressFill.style.width = progress + '%';
    }
    
    if (progressText) {
        progressText.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.disabled = currentQuestion === 0;
    }
    
    if (nextBtn) {
        nextBtn.disabled = selectedAnswers[currentQuestion] === undefined;
        nextBtn.textContent = currentQuestion === quizQuestions.length - 1 ? '🏁 Finish' : 'Next ➡️';
    }
}

function finishQuiz() {
    console.log('🏁 Finishing quiz...');
    
    // Calculate total score
    quizScore = selectedAnswers.reduce((total, answer) => total + answer.points, 0);
    
    console.log('📊 Final score:', quizScore);
    
    // Show newsletter gate instead of direct results
    showPage('newsletter-gate');
    isQuizActive = false;
}

// Article Functions
function populateArticles() {
    console.log('📚 Populating articles...');
    const articlesGrid = document.getElementById('articlesGrid');
    if (!articlesGrid) return;
    
    articlesGrid.innerHTML = '';
    
    articles.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.className = 'article-card';
        articleCard.innerHTML = `
            <div class="article-card__body">
                <div class="article-card__category">${article.category}</div>
                <h3 class="article-card__title">${article.title}</h3>
                <p class="article-card__excerpt">${article.excerpt}</p>
                <div class="article-card__meta">${article.readTime}</div>
            </div>
        `;
        
        // Add click event listener for each article card
        articleCard.addEventListener('click', function() {
            console.log('📖 Opening article:', article.slug);
            showArticle(article.slug);
        });
        
        // Make it clear the card is clickable
        articleCard.style.cursor = 'pointer';
        
        articlesGrid.appendChild(articleCard);
    });
}

function showArticle(slug) {
    console.log('📖 Showing article:', slug);
    
    const article = articleContent[slug];
    const articleContentEl = document.getElementById('articleContent');
    
    if (article && articleContentEl) {
        articleContentEl.innerHTML = `
            <h1>${article.title}</h1>
            <div class="article-meta">
                ${article.category} • ${article.readTime}
            </div>
            <div class="article-body">
                ${article.body}
            </div>
        `;
        
        showPage('article-view');
    } else {
        console.error('❌ Article not found:', slug);
        alert('😅 Sorry, this article is not available yet! Please try another one.');
    }
}

// FAQ Functions
function populateFAQs() {
    console.log('❓ Populating FAQs...');
    const faqGrid = document.getElementById('faqGrid');
    if (!faqGrid) return;
    
    faqGrid.innerHTML = '';
    
    faqs.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <div class="faq-question">${faq.question}</div>
            <div class="faq-answer">${faq.answer}</div>
        `;
        
        const faqQuestion = faqItem.querySelector('.faq-question');
        faqQuestion.addEventListener('click', function() {
            console.log('❓ FAQ clicked:', index);
            faqItem.classList.toggle('active');
        });
        
        // Make it clear the question is clickable
        faqQuestion.style.cursor = 'pointer';
        
        faqGrid.appendChild(faqItem);
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

console.log('🌟 Brain Rot Assessment app loaded successfully! 🚀');