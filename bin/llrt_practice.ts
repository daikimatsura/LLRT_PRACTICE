#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { LlrtPracticeStack } from "../lib/llrt_practice-stack";

const app = new cdk.App();
new LlrtPracticeStack(app, "LlrtPracticeStack", {
  env: { region: process.env.CDK_DEFAULT_REGION },
});
