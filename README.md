# NCD.computer-shop
This is project was created for NCD qualification.

## Overview

This repository includes a complete project structure for AssemblyScript contracts targeting the NEAR platform.

The project contains:
- a single contract with name ComputerShopContract
- unit tests for contract
- basic scripts to deploy and use contract

## Project requirements

This project required:
- NodeJS version 14.*
- installed yarn (npm i -g yarn)
- installed near-cli (npm i -g near-cli)

## Getting started
(see below for video recordings of each of the following steps)

1) clone this repo to a local folder
2) run "yarn"
3) run "yarn build"
4) run tests "yarn test". Check that all tests are passed.

Next steps should be run only in bash
5) run "./scripts/1.dev-deploy.sh"
6) run "./scripts/2.use-contract.sh"
7) run "./scripts/3.cleanup.sh"

### Project structure

Project contains main folders:
- scripts:
    Contain scripts for deploying and running smart contracts.
    Additionally contain README.md file which describe how to work with scripts.
- src:
    Contain source files of contracts and related logic.

ComputerShopContract located in src/project/assembly/index.ts

### Videos

**`1.dev-deploy.sh`**

This video shows the build and deployment of the contract.
https://www.loom.com/share/657a3b11a7f14d58ab6243aa75349f7a

**`2.use-contract.sh`**

This video shows contract methods being called.
https://www.loom.com/share/12d49bd09a41435cbb600daacd544d4b

**`3.cleanup.sh`**

This video shows the cleanup script running.  Make sure you add the `BENEFICIARY` environment variable. The script will remind you if you forget.
https://www.loom.com/share/4daf307c024c4040ac458a05764899da

```sh
export BENEFICIARY=<your-account-here>   # this account receives contract account balance
```