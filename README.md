# News Explorer

News Explorer is a responsive web application that allows users to search for news articles by keyword, view article details, and save articles for later reading.

This project was developed as part of the TripleTen Software Engineering program.

## Live Website

[View News Explorer](https://timely-begonia-f1244f.netlify.app/)

## Technologies Used

- React
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite
- React Router
- NewsAPI
- Git and GitHub
- Netlify

## Features

- Search for news articles using keywords
- Display articles retrieved from NewsAPI
- Show additional articles using the "Show more" button
- Display loading, error, and no-results messages
- Simulated user registration and login
- Save and remove articles
- View saved articles on a separate page
- Responsive layout for different screen sizes

**Note:** Authentication and saved-article storage are simulated in this project stage.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jrives37/se_project_news_explorer.git
   ```

2. Navigate into the project directory:

   ```bash
   cd se_project_news_explorer
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.local` file in the project root and add your NewsAPI key:

   ```env
   VITE_NEWS_API_KEY=your_newsapi_key
   ```

## Running Locally

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

## Building for Production

Run:

```bash
npm run build
```

The production files will be generated in the `dist` directory.

## Deployment

This application is deployed using Netlify.

To deploy your own version:

1. Push the project to a GitHub repository.
2. Connect the repository to Netlify.
3. Set the build command to `npm run build`.
4. Set the publish directory to `dist`.
5. Configure `VITE_NEWS_API_KEY` in Netlify's environment variables.
6. Trigger a deployment and wait for it to finish.

The application uses a NewsAPI proxy in production.

The `public/_redirects` file configures Netlify to serve the React application when users refresh client-side routes.

## Project Repository

https://github.com/jrives37/se_project_news_explorer
