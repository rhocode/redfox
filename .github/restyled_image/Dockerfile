FROM node:21.2-slim
LABEL maintainer="Pat Brisbin <pbrisbin@gmail.com>"
ENV LANG en_US.UTF-8
RUN mkdir -p /app
WORKDIR /app
COPY package.json .
RUN yarn install && yarn cache clean
RUN cd node_modules/typescript && yarn link
RUN cd node_modules/tailwindcss && yarn link
RUN cd node_modules/prettier-plugin-organize-imports && yarn link
RUN cd node_modules/prettier-plugin-tailwindcss && yarn link
ENV PATH=/app/node_modules/.bin:$PATH
COPY prettier-with-tailwindcss /usr/local/bin/prettier-with-tailwindcss
RUN mkdir -p /code
WORKDIR /code
ENTRYPOINT []
CMD ["prettier-with-tailwindcss", "--help"]