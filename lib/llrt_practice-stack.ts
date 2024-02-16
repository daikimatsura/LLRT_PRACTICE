import * as cdk from "aws-cdk-lib";
import { LlrtFunction } from "cdk-lambda-llrt";
import { Construct } from "constructs";
import * as path from "path";

export class LlrtPracticeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda Function作成
    const LlrtLambda = new LlrtFunction(this, "LlrtLambda", {
      entry: path.join(__dirname, "./lambda/index.ts"),
      handler: "index.handler",
      timeout: cdk.Duration.seconds(3),
      memorySize: 128,
      description: "LLRT Lambda",
    });
  }
}
