

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


### OTC System:

One-time-code system will be used to authenticate policy group transfers for IAM users. <br />
From the client-end:
1. User can place a request to be added to the Student_Leaders Policy group from the client-end.  
3. User will be prompted on account details page to provide an OTC. 
3. If the user enters a valid OTC they will be added to the Student_Leaders Policy Group


#### Internal structure:
- When a request for an OTC is made, a cloud service or process spools to create an OTC.
- This code will stored within the service's local secure container on the cloud for persistence through website rebuilds. 
- This code as restricted access for users and will only be accessible to users that are already part of the UML_Leaders policy group. Hence, in order to get access to the OTC, a user with sufficient Privileges would have to publish it (share with requestee). 
- 

#### OTC Properties:
- Each OTC expires in 2 days. 
- Each user is limited to one request every two days.
- Each OTC is associated with a user, two users cannot attempt to use the same OTC.
- After expiring, an OTC does not automatically re-generate for the user who request it. It must be re-requested.

---
Copyright &copy; 2024 UML Cloud Computing Club All rights reserved