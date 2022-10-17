export DOCKER_BUILDKIT=1

.PHONY: up
up:
	@eval $$(minikube -p minikube docker-env) ;\
	skaffold dev --cleanup=false

.PHONY: down
down:
	@eval $$(minikube -p minikube docker-env) ;\
	skaffold delete
