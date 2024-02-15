# このリポジトリについて

このリポジトリは私がAWSから公開された[LLRT](https://github.com/awslabs/llrt)を試すために作成したリポジトリです

```
$ npx cdk bootstrap -c environment=dev --profile sandbox-matsura
⏳ Bootstrapping environment aws://{account_id}/ap-northeast-1...
Trusted accounts for deployment: (none)
Trusted accounts for lookup: (none)
Using default execution policy of 'arn:aws:iam::aws:policy/AdministratorAccess'. Pass '--cloudformation-execution-policies' to customize.
CDKToolkit: creating CloudFormation changeset...
✅ Environment aws://{account_id}/ap-northeast-1 bootstrapped.
```

```
$ npx cdk deploy --all -c environment=dev --require-approval never --profile sandbox-matsura

✨  Synthesis time: 3.41s

LlrtPracticeStack:  start: Building f1744cf6b0f6443a50362fdd1bed72c06463167d1fe3797a4d3e0f4da301b17d:current_account-ap-northeast-1
LlrtPracticeStack:  success: Built f1744cf6b0f6443a50362fdd1bed72c06463167d1fe3797a4d3e0f4da301b17d:current_account-ap-northeast-1
LlrtPracticeStack:  start: Publishing f1744cf6b0f6443a50362fdd1bed72c06463167d1fe3797a4d3e0f4da301b17d:current_account-ap-northeast-1
LlrtPracticeStack:  success: Published f1744cf6b0f6443a50362fdd1bed72c06463167d1fe3797a4d3e0f4da301b17d:current_account-ap-northeast-1
LlrtPracticeStack: deploying... [1/1]
LlrtPracticeStack: creating CloudFormation changeset...

 ✅  LlrtPracticeStack

✨  Deployment time: 49.42s

Stack ARN:
arn:aws:cloudformation:ap-northeast-1:{account_id}:stack/LlrtPracticeStack/*******************************

✨  Total time: 52.83s
```
