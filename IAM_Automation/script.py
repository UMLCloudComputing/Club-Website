# Author: Gurpreet Singh
# Date: 7/1/2024
# Copyright 2024
# Property of UML Cloud Computing Club

## WIP

# TODO:
# Add IAM account removal functionality
#   - Batch file
#   - Single User
# Add IAM account group policy modification functionality (Change user groups)
#   - Batch file
#   - Single User
# Add approval system for adding IAM account to Club_Leaders group
#   - OTC


import boto3
import argparse
import secrets
import string
import csv
import sys
import logging
import json
import typing
from typing import Literal
import aws_creds

logger = logging.getLogger(__name__)

DEFAULT_PASSWORD = "Cloud@computing1"



iam = boto3.client("iam", aws_access_key=aws_creds.key, aws_secret_access_key=aws_creds.secret)

special_policy_groups = ["UML_Students"]

with open('permissive_policy_groups.csv', newline='')  as csvfile:
    reader = csv.reader(csvfile)
    special_policy_groups = list(reader)


def create_random_password(length = 16) -> str:
    chars = string.ascii_letters + string.digits + string.punctuation
    password = ""
    for i in range(length):
        password += secrets.choice(chars)
    logger.log(f"Password created, length: {length}")
    return password

# Function to create an IAM account
def create_user(args: any, username: str, password: typing.Optional[str] = None, policy_group: typing.Optional[str] = None):
    # Check if user exists
    try:
        iam.get_user(UserName = username)
        if (args.verbose):
            print(f"IAM User Creation failed: Username taken")
        if (args.logging):
            logger.warning("IAM User Creation failed: Username taken")
        status = False
    except iam.exceptions.NoSuchEntityException:
        try:    
            if password is None:
                password = create_random_password()
            iam.create_user(UserName=username)
            iam.create_login_profile(UserName=username, Password=password, PasswordResetRequired=True)
            if (args.verbose):
                print(f"New IAM user '{username}' created sucessfully with password: '{password}'. Be sure to change ASAP.")
            if (args.logging):
                logger.log(f"New IAM user '{username}' created sucessfully with password: '{password}'.")
            status = True
            if policy_group is not None:
                try:
                    iam.add_user_to_group(GroupName='UML_Students', UserName=username)
                    if (args.verbose):
                        print(f"Policy group added to '{username}'")
                    if (args.logging):
                        logger.log(f"Policy group added to '{username}'")
                    status = True
                except Exception as e:
                    if (args.verbose):
                        print(f"Error adding '{username}' to the policy group. {e}")
                    if (args.logging):
                        logger.error(f"Error adding '{username}' to policy group. {e}")
                    status = False
        except Exception as e:
            if (args.verbose):
                print(f"Error creating the new IAM user '{username}'. {e}")
            if (args.logging):
                logger.error(f"Error creating IAM user '{username}'. {e}")
            status = False
    return status

# Function to modify IAM account password or Policy Group
_TYPES = Literal["password", "policy_group"]
def modify_user(args: any, operation_dict: dict):

    # Check if the user exists
    try: 
        iam.get_user(UserName = operation_dict["username"])
        if (args.verbose):
            print(f"IAM User Modification failed: Username taken")
        if (args.logging):
            logger.warning("IAM User Modification failed: Username taken")
        status = False
    except iam.exceptions.NoSuchEntityException:
        if (operation_dict["type"] == "password"):
            status = modify_user_password(args, 
                                    operation_dict["username"], 
                                    operation_dict["new_password"])
        elif (operation_dict["type"] == "policy_group"):
            status = modify_user_policy_group(args,
                                        operation_dict["username"],
                                        operation_dict["policy_group"])
    return status        

# TODO
# Function to modify user password (Email based recovered not yet supported)
# Assumes the username is valid and exists
def modify_user_password(args: any, username: str, new_password: str):    
    try:
        iam.UpdateLoginProfile(
            UserName = username,
            Password = new_password,
        )
        if (args.verbose):
            print(f"Password modified for username: {username}")
        if (args.logging):
            logger.log(f"Password successfully modified for username: {username}")
        status = True

    except Exception as e:
        if e == iam.exceptions.EntityTemporarilyUnmodifiable:
            if (args.verbose):
                print(f"Unable to modify password for username: {username}")
                print(f"Username was recently reset/reconfigured, retry in a few minutes.")
            if (args.logging):
                logger.warning(f"Unable to modify username: {username}. Entity temporarily unmodifiable. (Error-code: 409)")
        elif e == iam.exceptions.LimitExceeded:
            if (args.verbose):
                print(f"Unable to modify password for username: {username}")
                print(f"Operation beyond AWS account limits: {e}")
            if (args.logging):
                logger.error(f"Unable to modify password for username: {username}. Operation beyond AWS account limits: {e}. (Error-code: 409)")
        elif e == iam.exceptions.NoSuchEntity:
            if (args.verbose):
                print(f"Unable to modify password for username: {username}. Username DNE!")
            if (args.logging):
                logger.error(f"Unable to modify password for username: {username}. Username DNE! (Error-code: 404)")
        elif e == iam.exceptions.PasswordPolicyViolation:
            if (args.verbose):
               print(f"Unable to modify password for username: {username}. Password does not meet account password policy!")
            if (args.logging):
                logger.error(f"Unable to modify password for username: {username}. Failed account password policy! (Error-code: 400)")
        elif e == iam.exceptions.ServiceFailure:
            if (args.verbose):
                print(f"Unable to modify password for username {username}. Unknown Error")
            if (args.logging):
                print(f"Unable to modify password for username {username}. Error unknown (Error-code: 500)")
        status = False
    
    return status
    

# Adds user to the specified new policy group
# Assumes a valid username 
def modify_user_policy_group(args: any, username: str, policy_group:str):
    # Check if user is already in group (should be handled in Exception)
    
    try:
        iam.add_user_to_group(
            GroupName = policy_group,
            UserName = username
        )
        if (args.verbose):
            print(f"Policy group added to '{username}'")
        if (args.logging):
            logger.log(f"Policy group added to '{username}'.")
        status = True
    except Exception as e:
        if (args.verbose):
            print(f"Unable to add '{username}' to new policy group. {e}")
        if (args.logging):
            logger.error(f"Unable to add new policy group for '{username}'. {e}")
        status = False
    
    return status

        

if __name__== "__main__":
    parser = argparse.ArgumentParser(
        prog = 'account_automation_script.py',
        description="AWS IAM User Creation Automation using Python",
        epilog="Contact the UML Cloud Computing Discord for help or to report any issues: https://discord.gg/7ETpHA33",
    )
    
    # Argument groups
    mode = parser.add_argument_group("Functionality mode", "Argument to modify, create, or remove a single user")
    file_group = parser.add_argument_group("Batch User Creation", "Argument for batch creation of new IAM users via a JSON file")
    single_user_group = parser.add_argument_group("Single User Creation", "Arguments for creating a single new IAM user")
    log_verbose_group = parser.add_argument_group("Logging/Verbose", "Arguments related to logging and info")
    
    # Runtime arguments
    mode.add_argument("-c", '--create', action="store_true", 
                      help="To specify new user(s) to be created. Create Mode.")
    mode.add_argument('-m', '--modify', action="store_true", 
                      help="To specify modifications on pre-existing users. Modify Mode.")
    mode.add_argument("-d", '--delete', action="store_true", 
                      help="To specify deletion mode on pre-existing users. Delete Mode.")
    single_user_group.add_argument('-u', '--username', action="store", type=str, 
                                   help="The username for the new IAM user")
    parser.add_argument('--use_default_pswd', action='store_true', 
                        help="Whether or not to use the default password: 'Cloud@computing1'", default=False)
    single_user_group.add_argument('--policy_group', action="store", type=str, 
                                   help="The Policy group to be used for the IAM user being created", default=None)
    file_group.add_argument('--filename', type=str, 
                            help="Filename for JSON file that contains IAM user details")
    log_verbose_group.add_argument('-v', '--verbose', action="store_true", 
                                   help="Enable verbose mode")
    log_verbose_group.add_argument('--logging', action="store_true", 
                                   help="Enable logging to a file")
    args = parser.parse_args()

    # Manual mutually exclusive arugment checking because argparse cannot do this natively
    if args.filename and (args.username or args.policy_group):
        print("--filename and --username|--policy_group are mutually exclusive arguments")
        if (args.logging):
            logger.error("Invalid runtime argument combination (f&(u|p))") 
        sys.exit(2)

    if args.username and not args.policy_group:
        print("Policy group not specified for user. Please specify via --policy_group.")
        if (args.logging):
            logger.error("Invalid runtime argument combination (u!p)") 
        sys.exit(2)
    
    if args.policy_group and not args.username:
        print("Username not specified. Please specify via --username")
        if (args.logging):
            logger.error("Invalid runtime argument combination (p!u)") 
        sys.exit(2)

    # Mode config checking (runtime)
    if args.create and args.modify:
        print("Cannot enter user create and modify mode simultaniously. Create and Modify mode are mutually exclusive.")
        if (args.logging):
            logger.error("Invalid runtime combination (c!m)")
        sys.exit(1)

    if args.create and args.delete:
        print("Cannot enter user create and delete mode simultaniously. Create and Delete mode are mutually exclusive.")
        if (args.logging):
            logger.error("Invalid runtime combination (c!d)")
        sys.exit(1)
    
    if args.modify and args.delete:
        print("Cannot enter user modify and delete mode simultaniously. Modify and Delete mode are mutually exclusive.")
        if (args.logging):
            logger.error("Invalid runtime combination (m!d)")
        sys.exit(1)

    if args.filename and (args.create or args.delete or args.modify):
        print("Cannot enter a specific mode when in filemode! Filename and any mode is mutually exclusive.")
        if (args.logging):
             logger.error("Invalid runtime combination (f!(c|d|m))")
        sys.exit(1)
    

    password = DEFAULT_PASSWORD if args.use_default_pswd else None

    if not any(vars(args).values()):
        parser.print_help()
        sys.exit()
    
    if args.filename:
        with open(args.filename, mode="r", encoding="utf-8") as read_file:
            op_dicts = json.loads(read_file)
            for op_dict in op_dicts:
                if op_dict["operation"] == "create":
                    password = DEFAULT_PASSWORD if op_dict["use_default_password"] else None
                    create_user(op_dict["username"], password, policy_group="UML_Students")
                elif op_dict["operation"] == "modify":
                    modify_user(args, op_dict)
                elif op_dict["operation"] == "delete":
                    # WIP
                else:
                    if (args.logging):
                        logger.error(f"Invalid operation specified: {op_dict["operation"]}")
                    print(f"Operation invalid: {op_dict["operation"]}")
                
                
        # with open(args.filename, 'r') as file:
        #     lines = file.read().splitlines()
        # for line in lines:
        #     username, policy_group = line.split()

        #     # If you want all users to be of UML_Students
        #     policy_group = 'UML_Students'
            
        #     create_user(args, username, password, policy_group)
    else:
        create_user(args, args.username, password, args.policy_group)