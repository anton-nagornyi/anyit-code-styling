#!/usr/bin/env node

const { execSync } = require('child_process');
const {join} = require('path');

const runCommand = (command) => {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to execute ${command}`, error);
    process.exit(1);
  }
};

runCommand(`node ${join(process.env.PROJECT_CWD, '.yarn', 'sdks', 'eslint', 'bin', 'eslint.js')} --config="${join(__dirname, '..', 'dist', '.eslintrc.js')}" "{src,tests}/**/*.ts"`);
