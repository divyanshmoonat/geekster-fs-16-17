# Installing nodejs v20 with linux os
FROM node:hydrogen-slim

# Project folder/directory
WORKDIR /app

# Copying code from our local system to docker os
COPY . /app/

# Installing all npm packages
RUN npm i

# Project start command
CMD ["node", "index.js"]