

# IAM Account Creation Automation 

Author: Gurpreet Singh <br/>
Date: 8/30/2024 <br/>

### Functionality

The IAM account automation script supports:
- Account creation
- Account removal/deletion
- Account password and/or policy group modification

It can also operate on:
- A singular user via the CLI
- A JSON user operation object
- A JSON file with a list of user operation objects

### Requirements:
1. A CLI configured with valid AWS Credentials to perform CRUD operations on IAM users. Specifically one with adequate permissions.
2. Access to the boto3 API in Python
3. A working Python interpreter since the script is written in Python



Logging Error symbols: <br/>
| Symbol | Definition |
| ------ | ---------- |
| c      | create     |
| m      | modify     |
| d      | delete     |
| f      | filename/file   |
| p      | policy group |
| u      | username   |




---
Copyright &copy; 2024 UML Cloud Computing Club All rights reserved