#!/usr/bin/env node

const { program } = require('commander');

// Define the version of your CLI
program.version('1.0.0');

// Define the 'greet' command with an optional '--name' option
program
  .command('hello-world')
  .description('Greet the user')
  .option('-n, --name <name>', 'Your name')
  .action((options) => {
    const name = options.name || 'rusio';
    console.log(`Hello world, ${name}!`);
  });


// Parse the command-line arguments
program.parse(process.argv);

// If no command is specified, show help
if (!program.args.length) {
  program.help();
}