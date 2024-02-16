import { Handler } from "aws-lambda";
// This is the main entry point for the Lambda function.
export const handler: Handler = async (event, context) => {
  console.log(`event: ${JSON.stringify(event)}`);
  return {
    statusCode: 200,
    body: JSON.stringify("Hello, world!"),
  };
};
