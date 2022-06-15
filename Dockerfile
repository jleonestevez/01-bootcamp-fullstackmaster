FROM mongo as dockerthreepoint
WORKDIR /usr/src/app
COPY ./loadData.sh /
COPY ./sample_mflix /
RUN chmod +x /loadData.sh
EXPOSE 27017


FROM node:16 as api
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]