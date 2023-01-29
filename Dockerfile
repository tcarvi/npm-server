FROM node:16
WORKDIR /website

COPY ./package.json /website/
COPY ./server.js /website/

# Install only server dependencies
RUN npm install

# Copie website estático para /website/
