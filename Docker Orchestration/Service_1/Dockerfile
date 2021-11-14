#getting base image ubuntu
FROM node:14

ADD index.js /

MAINTAINER mohsin <mohsin.qadeer@tuni.fi>

RUN apt-get update
RUN npm install xhr2
EXPOSE 8000
CMD ["node", "./index.js"]
