

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
3. A working Python interpreter since the script is written in Python.



Logging Error symbols: <br/>
| Symbol | Definition |
| ------ | ---------- |
| c      | create     |
| m      | modify     |
| d      | delete     |
| f      | filename/file   |
| p      | policy group |
| u      | username   |


### Account Deletion Pre-reqs:

As per the Boto3 Docs, removing an IAM user requires the following be removed first:

- Password (DeleteLoginProfile)
- Access keys (Delete Access Keys)
- Signing certificate(DeleteSigningCertificate)
- SSH public key (DeleteSSHPublicKey)
- Git credentials (DeleteServiceSpecificCredential)
- MFA (DeactivateMFADevice, DeleteVirtualMFADevice)
- Inline policies (DeleteUserPolicy)
- Attached managed policies (DetachUserPolicy)
- Group memberships (RemoveUserFromGroup)

Only after all those removals can the IAM user be removed validly.


### E-Board Policy Group admission (Policy Group addition)
Only the E-Board (Members of Student_Leaders) have the privilage to add other members to the Student_Leaders Policy Group. 
In order to add a user:
From the client-end:
1. Sufficiently privilaged user navigates to add user to E-Board menu
2. Places the username of the individual to be added into an input field. 
3. Once submitted, the backend will handle the process to promote the specified user to the Student_Leaders Policy group.

From the back-end:
1. E-Board status is determined for a user on their existence in the Student_Leaders Policy group.
2. When a username is submitted via a sufficiently privilaged user, the script is run to add the user to the specified user group.
3. The update for the user is as fast as the AWS user group can update on the cloud. 
4. The client-end should poll the user's policy_group at each load of the user's profile page. Each load prompts a refetch for the user's data.


---
Copyright &copy; 2024 UML Cloud Computing Club All rights reserved