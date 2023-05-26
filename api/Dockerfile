FROM node
WORKDIR /app/api
COPY package.json .
RUN npm install
COPY . .
EXPOSE 7000
CMD ["npm","start"]