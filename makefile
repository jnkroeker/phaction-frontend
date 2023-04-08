FRONTEND_VERSION := 0.0.11

docker:
	docker build \
		-f zarf/docker/Dockerfile \
		-t jnkroeker/phaction-frontend:$(FRONTEND_VERSION) \
		.

frontend-apply:
	kustomize build zarf/k8s/cluster | kubectl apply -f -