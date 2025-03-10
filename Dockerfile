FROM node:18-alpine
WORKDIR /app
ENV PORT=5000
COPY . .
RUN npm install
EXPOSE $PORT
CMD ["node", "index.js"]
