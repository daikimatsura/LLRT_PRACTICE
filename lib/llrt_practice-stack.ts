import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import * as path from "path";

export class LlrtPracticeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda Layer作成
    const LlrtLayer = new lambda.LayerVersion(this, "LlrtLayer", {
      code: lambda.Code.fromAsset(
        path.join(__dirname, "./lambda-layer/llrt-lambda-x64.zip")
      ),
      compatibleRuntimes: [lambda.Runtime.PROVIDED_AL2023],
      description: "LLRT Layer",
    });

    // Lambda Function作成
    const LlrtLambda = new cdk.aws_lambda.Function(this, "LlrtLambda", {
      runtime: lambda.Runtime.PROVIDED_AL2023,
      code: lambda.Code.fromAsset(path.join(__dirname, "./lambda/")),
      handler: "index.handler",
      layers: [LlrtLayer],
      timeout: cdk.Duration.seconds(3),
      memorySize: 128,
      description: "LLRT Lambda",
    });
  }
}
