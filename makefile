generate: generate-node generate-python
	@echo "Generated Base SDKs"

generate-node:
	@echo "Generate Node.js base SDK"
	@cd node && yarn install --frozen-lockfile && yarn build

generate-python:
	@echo "Generate python base SDK"
	@cd python && make grpc-client