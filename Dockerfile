ARG UBUNTU_VERSION=latest
ARG NODE_VERSION=latest
ARG TERRAFORM_VERSION=0.11.11

FROM ubuntu:${UBUNTU_VERSION}

LABEL maintainer="josephcuffney@gmail.com"

# ENV TERRAFORM_VERSION=${TERRAFORM_VERSION}

# update packages
RUN apt-get update -yq 

# install linux packages
RUN apt-get install -yq \
  git \
  ssh \
  tar \
  gzip \
  ca-certificates \
  apt-transport-https \
  sudo \
  unzip \
  zip \
  wget \
  curl \
  gnupg2 \ 
  make

USER jcuffney

EXPOSE 443
EXPOSE 80
EXPOSE 4000
EXPOSE 4001
EXPOSE 4002
EXPOSE 4003

CMD ["/bin/bash"]