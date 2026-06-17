const vscode = require('vscode');
const createConfigScript = require('./scripts/createConfig');
const reactStructureScript = require('./scripts/reactStructure');

/**
 * Activate the extension and register all commands
 */
function activate(context) {
  console.log('Zustic Snippets extension is now active');

  // Register Create Config command
  const createConfigCommand = vscode.commands.registerCommand('myExtension.createConfig',() => createConfigScript.execute(vscode));
  const reactStructureCommand = vscode.commands.registerCommand('myExtension.reactStructure',() => reactStructureScript.execute(vscode));
  context.subscriptions.push(createConfigCommand);
  context.subscriptions.push(reactStructureCommand);
}

/**
 * Deactivate the extension
 */
function deactivate() {
  console.log('Zustic Snippets extension is now deactivated');
}

module.exports = {
  activate,
  deactivate
};
