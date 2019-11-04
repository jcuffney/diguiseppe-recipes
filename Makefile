export IMAGE = diguiseppe-recipes
export TAG = latest
export UBUNTU_VERSION = 18.04
export NODE_VERSION = latest

export REPO_URI="jcuffney/${IMAGE}:${TAG}"

.DEFAULT_GOAL := build

build::
	docker build \
		-t $(REPO_URI) \
		--build-arg UBUNTU_VERSION=$(UBUNTU_VERSION) \
		--build-arg NODE_VERSION=$(NODE_VERSION) \
		.;

push::
	docker push $(REPO_URI)

run::
	docker run \
		-ti \
		--rm \
		-v /var/run/docker.sock:/var/run/docker.sock \
		$(REPO_URI);