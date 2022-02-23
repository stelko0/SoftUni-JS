function getArticleGenerator(articles) {
    let array = articles;
    let content = document.getElementById('content');

    return () => {
        if(array.length != 0) {
            let article = document.createElement('article');
            article.textContent = array.shift();
            content.appendChild(article)
        }
    }
}


