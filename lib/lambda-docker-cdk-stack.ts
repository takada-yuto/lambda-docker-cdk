import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class LambdaDockerCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new cdk.aws_lambda.DockerImageFunction(this, "cdk-docker-container-lambda", {
      code: cdk.aws_lambda.DockerImageCode.fromImageAsset("src"),
    });
  }
}
