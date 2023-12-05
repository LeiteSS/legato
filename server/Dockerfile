FROM node:lts
WORKDIR /src
COPY . .
RUN npm ci
EXPOSE 3003
CMD ["npm", "start"]