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
#   - One or more members approval

# Logging error symbols:
# c - create
# m - modify
# d - delete
# f - filename
# p - policy group
# u - username
# 


import boto3
import argparse
import secrets
import string
import sys
import logging
import json
import typing


logger = logging.getLogger(__name__)

DEFAULT_PASSWORD = "Cloud@computing1"

def create_random_password(length = 16) -> str:
    chars = string.ascii_letters + string.digits + string.punctuation
    password = ""
    for i in range(length):
        password += secrets.choice(chars)
    logger.info(f"Password created, length: {length}")
    return password



# Function to create an IAM account
def create_user(args: any, username: str, password: typing.Optional[str] = None, policy_group: typing.Optional[str] = None):
    iam = boto3.client("iam")
    # Check if user exists
    try:
        iam.get_user(UserName = username)
        if (args.verbose):
            print(f"IAM User Creation failed: Username taken")
        if (args.logging):
            logger.warning("IAM User Creation failed: Username taken")
    except iam.exceptions.NoSuchEntityException:
        try:    
            if password is None:
                password = create_random_password()
            iam.create_user(UserName=username)
            iam.create_login_profile(UserName=username, Password=password, PasswordResetRequired=True)
            if (args.verbose):
                print(f"New IAM user '{username}' created sucessfully with password: '{password}'. Be sure to change ASAP.")
            if (args.logging):
                logger.info(f"New IAM user '{username}' created sucessfully with password: '{password}'.")

            if policy_group is not None:
                try:
                    iam.add_user_to_group(GroupName='UML_Students', UserName=username)
                    if (args.verbose):
                        print(f"Policy group {policy_group} added to '{username}'")
                    if (args.logging):
                        logger.error(f"Policy group {policy_group} added to '{username}'")
                except Exception as e:
                    if (args.verbose):
                        print(f"Error adding '{username}' to the policy group '{policy_group}'. {e}")
                    if (args.logging):
                        logger.error(f"Error adding '{username}' to policy group '{policy_group}'. {e}")
        except Exception as e:
            # ADD VERBOSE
            if (args.verbose):
                print(f"Error creating the new IAM user '{username}'. {e}")
            if (args.logging):
                logger.error(f"Error creating IAM user '{username}'. {e}")


# Function to modify IAM account password or Policy Group


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
            op_objects = json.loads(read_file)
            for op_object in op_objects:
                if op_object["operation"] == "create":
                    password = DEFAULT_PASSWORD if op_object["use_default_password"] else None
                    create_user(op_object["username"], password, policy_group="UML_Students")
                elif op_object["operation"] == "modify":
                    
                elif op_object["operation"] == "delete":

                else:
                    if (args.logging):
                        logger.error(f"Invalid operation specified: {op_object["operation"]}")
                    print(f"Operation invalid: {op_object["operation"]}")
                
                
        # with open(args.filename, 'r') as file:
        #     lines = file.read().splitlines()
        # for line in lines:
        #     username, policy_group = line.split()

        #     # If you want all users to be of UML_Students
        #     policy_group = 'UML_Students'
            
        #     create_user(args, username, password, policy_group)
    else:
        create_user(args, args.username, password, args.policy_group)