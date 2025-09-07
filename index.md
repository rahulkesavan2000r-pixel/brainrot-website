---
layout: default
title: "🧠 Beat Brain Rot - Digital Wellness Hub"
---

<div class="section">
  <h2>🧠 Take the Assessment</h2>
  <div class="card quiz-card">
    <h3>🎯 Brain Rot Assessment Quiz</h3>
    <p>Discover your digital wellness level with our comprehensive 15-question assessment and get personalized recovery solutions!</p>
    <p><strong>15 Questions • Personalized Results</strong></p>
    <a href="/quizzes/brain-rot-assessment.html" class="quiz-link">Take the Quiz →</a>
  </div>
</div>

<div class="section">
  <h2>📚 Expert Articles on Digital Wellness</h2>
  <div class="grid">
    {% for post in site.posts %}
    <div class="card">
      <h3>{{ post.title }}</h3>
      <p>{{ post.excerpt }}</p>
      <div class="meta">
        <span>{{ post.categories | join: ", " }}</span> • <span>{{ post.reading_time }} min read</span>
      </div>
      <a href="{{ post.url }}">Read Article →</a>
    </div>
    {% endfor %}
  </div>
</div>

<div class="section">
  <h2>❓ Frequently Asked Questions</h2>
  <div class="faq-grid">
    {% for faq in site.faqs %}
    <div class="card faq-card">
      <h3>{{ faq.title }}</h3>
      <a href="{{ faq.url }}">Read Answer →</a>
    </div>
    {% endfor %}
  </div>
</div>
