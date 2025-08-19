FROM node

WORKDIR /myapp

COPY . .

RUN npm install

# do with expose port
EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
