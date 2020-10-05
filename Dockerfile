FROM mhart/alpine-node:latest AS build
ADD . /website
WORKDIR /website
RUN npm install
RUN npm run build
FROM mhart/alpine-node:latest
WORKDIR /website
COPY --from=build /website/build /website/build
ARG REACT_APP_CDN_URL
ENV REACT_APP_CDN_URL=$REACT_APP_CDN_URL
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL
RUN npm install -g serve
EXPOSE 5000
CMD ["serve", "-s", "build"]