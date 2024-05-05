# Redux News Reader

This project is a news reader application where users can view and comment on various articles. It provides an opportunity to practice using Redux Toolkit’s `createAsyncThunk` and `createSlice` utilities to add asynchronous functionality to Redux applications.

## Project Overview

The Redux News Reader is a dynamic web application that allows users to browse, read, and comment on news articles. The application is built with React and Redux, and uses Redux Toolkit for efficient Redux coding.

## Current Features

- **Article Previews**: The application fetches and displays a list of all articles in their preview form. Users can browse through the list and select an article to read in full.
- **Current Article**: The application fetches and displays the current article selected by the user. Users can switch between articles as they wish.

The code for these features is accessible in the `features/articlePreviews` and `features/currentArticle` directories respectively.

## Task

Your task will be to complete the comments feature. This involves the following:

- **Fetch Comments**: Whenever the featured article changes, you will asynchronously fetch the comments for that article and add them to your store so they display under the article.
- **Submit Comments**: When a user submits a new comment, you will submit it to the server via an asynchronous request and display it in the article’s list of comments once it has been successfully created.

## Getting Started

Before you get started, spend some time familiarizing yourself with the project’s starting code. In particular, take note of the way the project employs `createSlice` and `createAsyncThunk` in `currentArticleSlice.js` and `articlePreviewsSlice.js`, as your work on the comments slice will resemble these files.

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-repo/redux-news-reader.git
cd redux-news-reader
npm install