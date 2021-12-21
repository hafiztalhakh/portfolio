## Portfolio website for Developers!

## Features 
✔️ Summary and About me\
✔️ Skills\
✔️ Education\
✔️ Experience\
✔️ Open Source Projects Connected with Github\
✔️ Contact \
✔️ Github Profile


## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```

## How To Use 🔧

From your command line, clone and run portfolio:

```bash
# Clone this repository
$ git clone https://github.com/Talha619/portfolio.git

# Go into the repository
$ cd portfolio

# Install dependencies
$ npm i

#Start's development server
$ npm start
```
## Github Setup For Open Source Projects

Generate a Github personal access token using these [Instructions](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) `Make sure you don't select any scope just generate a simple token`

1. Create a .env file in the root directory of your project.

2. Inside the .env file, add key `REACT_APP_GITHUB_TOKEN` and assign your github token like this.

```bash
  REACT_APP_GITHUB_TOKEN = "YOUR GITHUB TOKEN HERE"
```

Set `showGithubProfile` to true or false to show Contact Profile using Github, defaults to false.

#### Personalize page content in `/src/Portfolio/portfolio.js` & modify it as per your need.

## Technologies used 🛠️

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/) 
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/) 
- [axios](https://github.com/axios/axios)

