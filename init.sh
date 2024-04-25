#!/bin/bash

echo "Deleting existing .git repo"
rm -rf ./.git

echo "Initialize new git repo"
git init

echo "Deleting LICENSE and README files"
rm -rf ./LICENSE ./README.md

echo "Running npm install"
npm install

echo "Updating npm packages"
npm run update-deps

echo "Repo is now setup"
echo "init.sh can be deleted"
