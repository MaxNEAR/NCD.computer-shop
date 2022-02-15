#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

echo
echo ---------------------------------------------------------
echo "Step 0: Check for environment variable with contract name"
echo ---------------------------------------------------------
echo

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$CONTRACT" ] || echo "Found it! \$CONTRACT is set to [ $CONTRACT ]"

echo
echo
echo ---------------------------------------------------------
echo "Step 1: Call 'view' functions on the contract"
echo
echo "(run this script again to see changes made by this file)"
echo ---------------------------------------------------------
echo
echo "Called function to show current state"
near view $CONTRACT showCurrentShopState --accountId $CONTRACT
echo
echo ---------------------------------------------------------
echo "Step 2: Call 'change' functions on the contract"
echo ---------------------------------------------------------
echo
echo "Called function to buy 2 laptops and 3 desktops"
near call $CONTRACT buyComputers '{"laptopCount": 2, "desktopCount": 3}' --accountId $CONTRACT
echo
echo "Called function to sell 1 laptop"
near call $CONTRACT sellLaptops '{"count": 1}' --accountId $CONTRACT
echo
echo "Called function to sell 2 desktops"
near call $CONTRACT sellDesktops '{"count": 2}' --accountId $CONTRACT
echo
echo "Called function to show current state"
near view $CONTRACT showCurrentShopState --accountId $CONTRACT

echo
echo "now run this script again to see changes made by this file"
exit 0
