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

[![asciicast](https://asciinema.org/a/409575.svg)](https://asciinema.org/a/409575)

**`2.use-contract.sh`**

This video shows contract methods being called.  You should run the script twice to see the effect it has on contract state.

[![asciicast](https://asciinema.org/a/409577.svg)](https://asciinema.org/a/409577)

**`3.cleanup.sh`**

This video shows the cleanup script running.  Make sure you add the `BENEFICIARY` environment variable. The script will remind you if you forget.

```sh
export BENEFICIARY=<your-account-here>   # this account receives contract account balance
```

[![asciicast](https://asciinema.org/a/409580.svg)](https://asciinema.org/a/409580)
