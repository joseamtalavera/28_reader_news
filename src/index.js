import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



/*
reader-news/
├── public/
│   └── index.html
└── src/
    ├── app/
    │   ├── App.css
    │   ├── App.js
    │   └── store.js
    ├── components/
    │   ├── ArticleListItem.js
    │   ├── Comment.js
    │   ├── CommentForm.js
    │   ├── CommentList.js
    │   └── FullArticle.js
    ├── features/
    │   ├── articlePreviews/
    │   │   ├── ArticlePreviews.js
    │   │   └── articlePreviewsSlice.js
    │   ├── comments/
    │   │   ├── Comments.js
    │   │   └── commentsSlice.js
    │   └── currentArticle/
    │       ├── CurrentArticle.js
    │       └── currentArticleSlice.js
    ├── mocks/
    │   ├── article.json
    │   ├── browser.js
    │   ├── comments.json
    │   └── handlers.js
    ├── index.compiled.js
    ├── index.css
    ├── mockServiceWorker.js
    └── index.js (assuming you have an index.js as an entry point)

    */
