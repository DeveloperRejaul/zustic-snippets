const vscode = require('vscode');
const createConfigScript = require('./scripts/createConfig');
const reactNativeStructureScript = require('./scripts/reactNativeStructure');

/**
 * Activate the extension and register all commands
 */
function activate(context) {
  console.log('Zustic Snippets extension is now active');

  // Register Create Config command
  const createConfigCommand = vscode.commands.registerCommand('myExtension.createConfig',() => createConfigScript.execute(vscode));
  const reactStructureCommand = vscode.commands.registerCommand('myExtension.reactNativeStructure',() => reactNativeStructureScript.execute(vscode));
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
