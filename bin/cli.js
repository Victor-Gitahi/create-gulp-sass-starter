#!/usr/bin/env node

const { execSync } = require('child_process');
const { exitCode } = require('process');

const runCommand = command => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (e) {
    console.error(`Failed to execute command ${command}`, e);
    return false;
  }

  return true;
};

const repositoryName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/Victor-Gitahi/create-gulp-sass-starter.git ${repositoryName}`;

const installDepsCommand = `cd ${repositoryName} && npm install`;

console.log(`Cloning the repository with name: ${repositoryName}`);

const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(exitCode);

console.log(`installing dependencies for ${repositoryName}`);
const installedDependencies = runCommand(installDepsCommand);
if (!installedDependencies) process.exit(exitCode);

console.log('Congratulations, youre now ready. Follow the following commands to start');
console.log(' ');
console.log(`cd ${repositoryName} && gulp`);