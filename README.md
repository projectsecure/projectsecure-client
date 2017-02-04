# Project Secure - Client
A single page application client for "Project Secure" made with ES6, react and webpack.

![Screenshot](https://raw.githubusercontent.com/projectsecure/projectsecure-client/master/screenshot.png)

## Requirements

- NodeJS
- Nodemon
- Webpack
- [projectsecure-api](https://github.com/projectsecure/projectsecure-api)

## Setup

This client will be deployed automatically into a docker container when setting up "[projectsecure-api](https://github.com/projectsecure/projectsecure-api)".

**Manual setup for development:**

(Run steps from "[projectsecure-api](https://github.com/projectsecure/projectsecure-api)" to start the backend).

1. Clone this repo into a local directory
1. Open directory and execute `npm install`
1. Execute `npm run dev` to run webpack watcher that deploys files into `/dist/` using babel as compiler engine
1. Parallely execute `npm run startd` to run nodemon or something similar to run a server that delivers the files from `/dist/`
1. Go to `http://localhost:3100`

## Extend Project

This project mostly follows the [Mantra Architecture](https://kadirahq.github.io/mantra/) to allow developers to easily extend the project. 

All views are bundled into [modules](https://kadirahq.github.io/mantra/#sec-Mantra-Modules) including [actions](https://kadirahq.github.io/mantra/#sec-Actions), [components](https://kadirahq.github.io/mantra/#sec-React-as-the-UI) and [containers](https://kadirahq.github.io/mantra/#sec-Containers). <br>
*See Mantra specification for proper explanations on the purpose of this separation.*
 
 This project uses eslinter to enforce a common coding style. You can run the linter by executing `npm test`.
