FROM node:lts-alpine AS dev

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .    

COPY index.html index.html

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]