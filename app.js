// ... existing code ... -->
// Complete article content - ALL articles with full content
const articleContent = {
    "digital-addiction-mental-health-anxiety-depression": {
        title: "📱 Beyond the Screen: How Digital Addiction Fuels Anxiety, Depression, and Loneliness",
        category: "Mental Health 💚",
        readTime: "10 min read",
// ... existing code ... -->
        articleCard.className = 'article-card';
        articleCard.innerHTML = `
            <div class="article-card__body">
                <div class="article-card__category">${article.category}</div>
                <h3 class="article-card__title">${article.title}</h3>
                <p class="article-card__excerpt">${article.excerpt}</p>
                <div class="article-card__meta">${article.readTime}</div>
            </div>
        `;
        
        // Wrap the card in an anchor tag to link to the new page
        const articleLink = document.createElement('a');
        // For the first article, link to the new html page. Others still use the old JS method for now.
        if (article.slug === "brain-rot-epidemic-cognitive-impact-digital-habits") {
            articleLink.href = `articles/${article.slug}.html`;
        } else {
            articleLink.href = `#`; // Fallback for other articles
            articleCard.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('📖 Opening article via JS:', article.slug);
                showArticle(article.slug);
            });
        }
        
        articleLink.style.textDecoration = 'none'; // Remove underline from link
        articleLink.appendChild(articleCard);
        
        // Make it clear the card is clickable
        articleCard.style.cursor = 'pointer';
        
        articlesGrid.appendChild(articleLink);
    });
}

function showArticle(slug) {
// ... existing code ... -->
