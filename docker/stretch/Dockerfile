FROM debian:stretch
RUN apt-get update && apt-get install -y --force-yes nodejs nodejs-legacy git wget build-essential python libcairo2-dev libgif-dev libpango1.0-dev libjpeg62-turbo-dev fonts-dejavu libboost-filesystem-dev libboost-program-options-dev libboost-regex-dev libboost-system-dev libboost-thread-dev libgdal-dev libicu-dev libpq-dev libcurl4-gnutls-dev libproj-dev libtiff-dev apt-transport-https libmapbox-variant-dev libmapnik-dev mapnik-utils && rm -rf /var/lib/apt/lists/*
ENV NVM_DIR /usr/local/nvm
RUN wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash && . $NVM_DIR/nvm.sh && nvm install 6.11.1
ENV HOME=/root/ LINK=g++
ENV IN_DOCKER=1
COPY . /home/codes
WORKDIR /home/code
CMD . $NVM_DIR/nvm.sh && nvm use 6.11.1 && npm install --build-from-source=mapnik --fallback-to-build=false && npm test
