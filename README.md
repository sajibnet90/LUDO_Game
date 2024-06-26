# LUDO
A multi-player LUDO game, made with `node.js`, `socket.io` and `Vanilla Javascript`.
___
![GitHub package.json dependency version (prod)](https://img.shields.io/badge/dynamic/json?color=green&label=socket.io&query=dependencies[%22socket.io%22]&url=https%3A%2F%2Fraw.githubusercontent.com%2FCyberCitizen01%2FLUDO%2Fmaster%2Fapp%2Fpackage.json&logo=socketdotio&style=flat-square)
![GitHub package.json dependency version (prod)](https://img.shields.io/badge/dynamic/json?color=green&label=express&query=dependencies[%22express%22]&url=https%3A%2F%2Fraw.githubusercontent.com%2FCyberCitizen01%2FLUDO%2Fmaster%2Fapp%2Fpackage.json&logo=express&style=flat-square)<br>
![Website](https://img.shields.io/website?down_color=red&down_message=INACTIVE&label=DEPLOYMENT&logo=heroku&logoColor=green&style=flat-square&up_color=blue&up_message=ACTIVE&url=https%3A%2F%2Fthe-ludo-game.herokuapp.com)
![GitHub last commit](https://img.shields.io/github/last-commit/CyberCitizen01/LUDO?logo=github&style=flat-square)
___
## Build
You can either build the app by cloning the repository or by pulling the Docker image.
- **By Cloning:**

  Clone the [repo](https://github.com/CyberCitizen01/LUDO/):
  ```sh
  git clone https://github.com/CyberCitizen01/LUDO/
  ```
  Install the dependencies:
  ```sh
  npm install
  ```
  Start the node server:
  ```sh
  npm start
  ```
  Head over to http://localhost:3000/, to see the Home Page.
<br>

- **By Docker:**

  **From an docker image:**
  
  ![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/cybercitizen01/the-ludo-game?logo=docker&style=flat-square)
  
  - Pull the [image](https://hub.docker.com/r/cybercitizen01/the-ludo-game) and run:
    ```sh
    docker run --name the-ludo-game -p 3000:3000 cybercitizen01/the-ludo-game
    ```
    Head over to http://localhost:3000/, to see the Home Page.
  - The above command attaches the shell of the container to your terminal, and thus when you hit ^C the container stops automatically. To run the container in detached mode:
    ```sh
    docker run --name the-ludo-game -d -p 3000:3000 cybercitizen01/the-ludo-game
    ```
  - To monitor the output of the game:
    ```sh
    docker logs the-ludo-game
    ```
  - Now, to stop the container:
    ```sh
    docker stop the-ludo-game
    ```
  - Also, to remove the container after stopping:
    ```sh
    docker rm the-ludo-game
    ```
    (add a -f flag at the end, to forcefully remove a running container)
  
<br>
(base) data_course@Mohammads-MacBook-Pro LUDO_2 % docker compose up --scale ludugame=2


FROM node:18.17.0
WORKDIR /app
COPY package*.json ./

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi

COPY . ./
ENV PORT 3000
EXPOSE $PORT
CMD ["npm","start"]