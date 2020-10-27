void call(params) {
    echo "Start - Extension for stage: ${params.stageName}"
    echo "Current stage config: ${params.config}"
    params.originalStage()
    echo "End - Extension for stage: ${params.stageName}"
}
return this
