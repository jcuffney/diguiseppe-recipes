ARG UBUNTU_VERSION=latest
ARG NODE_VERSION=latest

FROM ubuntu:${UBUNTU_VERSION}

LABEL maintainer="josephcuffney@gmail.com"

# update packages
RUN apt-get update -yq 

# install linux packages
RUN apt-get install -yq \
  nginx \
  nodejs

USER jcuffney

EXPOSE 443
EXPOSE 80
EXPOSE 4000
EXPOSE 4001
EXPOSE 4002
EXPOSE 4003

# CMD ["/bin/bash"]
CMD ["service nginx start"]
