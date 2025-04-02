FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

#expose the port your app runs on (default for many Node.js apps)
EXPOSE 3500

CMD ["node", "index.js"]