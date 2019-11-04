export IMAGE = graphql-gateway
export TAG = latest

export REPO_URI="jcuffney/${IMAGE}:${TAG}"

.DEFAULT_GOAL := build

build::
	docker build \
		-t $(REPO_URI) \
		.;

push::
	docker push $(REPO_URI)

run::
	docker run \
		-ti \
		--rm \
		-v /var/run/docker.sock:/var/run/docker.sock \
		$(REPO_URI);