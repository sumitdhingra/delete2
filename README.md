# Item Player Starter Kit
## Overview
The Item Players are currently developed by just copying any existing Item Player and making the changes with respect to the new Item Player. Thus, there was a need for a Starter Kit through which the new developers can get up and running quickly.

We have developed a starter kit generator through which the developer can just run a simple script and get a basic Item Player starter code ready. There are two modes for the same:

1. Admin: In the admin mode, the starter kit generator generates the new Item Player & pushes the code into a Bitbucket repository. This repository can then be shared with the developers who can clone it and get started with the development.

2. Developer: In the developer mode, the starter kit generator generates the new Item Player but does not push the code in any repository as the developer might not have sufficient permissions to create a new repository. This will help the developer to start creating the Item Player even without the admin.

## Player Naming Convention
Currently the player naming convention is as follows:

> libs-x-item-player

The "x" here is the section of the name which specifies the type of item player.
The following are the rules for this section:
1. Only alphabets allowed (No number, underscore, or special characters).

Some examples on player names are: mcsr, fib-dnd, etc.

More information on player naming conventions can be found in the following document:
**[Item Player | File Naming Convention](https://docs.google.com/spreadsheets/d/1qccHRFvSrrpRBKVCVi-UnaHARLdJn6BDR8ruDklDP2g/edit#gid=0)**
## For Admins:
1. Download the [create-item-player-admin.sh](https://bitbucket.org/comprodls/item-player-starter-kit/src/master/create-item-player-admin.sh).
2. Double click on the file OR Type the command: `sh create-item-player-admin.sh`.
3. Enter Item Player Name (Defined according to Player Naming Convention). For example, for multiple choice single response question - "mcsr".
4. Enter the Bitbucket Username & Password.
5. Run `npm start` inside the generated item player and see if the starter code works by going to localhost:3000.

This will create a new git repository of Item Player (say, libs-mcmr-item-player) and also push the code to Bitbucket ([https://bitbucket.org/account/user/comprodls/projects/ASP](https://bitbucket.org/account/user/comprodls/projects/ASP)).
## For Developers:
1. Download the [create-item-player-developer.sh](https://bitbucket.org/comprodls/item-player-starter-kit/src/master/create-item-player-developer.sh).
2. Double click on the file OR Type the command: `sh create-item-player-developer.sh`.
3. Enter Item Player Name (Defined according to the Player Naming Convention).
4. Run npm start inside the generated item player and see if the starter code works by going to localhost:3000.

This will create a new Item Player.