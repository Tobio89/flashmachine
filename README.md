# Flashmachine
A React app that turns a word list into flashcards for Anki!

This React app pulls data from an API located in a separate repository - https://github.com/BruceJi7/flashmachine_backend

### About Flashmachine

Flashmachine is a React.js app.

It uses React-router to serve the main page, a how-to page, and an about page.

Flashmachine allows the user to enter words in a textarea. When user is finished they may request the definitions of these words (up to 30) from the API.

Each returned definition is presented to the user in a textarea. As the user edits the words, the relevant part of state is updated.

*N.B Ultimately, Flashmachine will allow the user to download their edited flashcards in a .txt file so they can be added to Anki, the popular SRS flashcard learning app.
This functionality has not yet been implemented.*


### How to use:
This app should be ready to run once you clone or download the files.
Open the project in an IDE such as VSCode, and type `npm start` in the terminal.
Make sure the API is also running!

