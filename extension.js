const vscode = require('vscode');
const { spawn } = require('child_process');
const path = require('path');

function activate(context) {
  // Command 1: Create Config
  let createConfigCommand = vscode.commands.registerCommand('myExtension.createConfig', async function () {
    await runScript('createConfig.js', 'Creating VS Code configuration...');
  });

  // Command 2: Generate Snippets
  // let generateSnippetsCommand = vscode.commands.registerCommand('myExtension.generateSnippets', async function () {
  //   await runScript('generateSnippets.js', '🚀 Generating snippets...');
  // });

  // Command 3: Open Settings
  // let openSettingsCommand = vscode.commands.registerCommand('myExtension.openSettings', async function () {
  //   const settingsPath = path.join(vscode.workspace.workspaceFolders[0].uri.fsPath, '.vscode', 'settings.json');
  //   const doc = await vscode.workspace.openTextDocument(settingsPath);
  //   await vscode.window.showTextDocument(doc);
  //   vscode.window.showInformationMessage('📝 Opened VS Code settings');
  // });

  context.subscriptions.push(
    createConfigCommand, 
    // generateSnippetsCommand, 
    // openSettingsCommand
  );
}

function runScript(scriptName, message) {
  return new Promise((resolve) => {
    vscode.window.showInformationMessage(message);

    try {
      const scriptPath = path.join(__dirname, 'scripts', scriptName);

      const child = spawn('node', [scriptPath], {
        cwd: __dirname
      });

      let output = '';
      let errorOutput = '';

      child.stdout.on('data', (data) => {
        output += data.toString();
        console.log(`[${scriptName}] ${data}`);
      });

      child.stderr.on('data', (data) => {
        errorOutput += data.toString();
        console.error(`[${scriptName} Error] ${data}`);
      });

      child.on('close', (code) => {
        if (code === 0) {
          vscode.window.showInformationMessage(`✅ ${scriptName} completed successfully!`);
          console.log('Script completed:', output);
        } else {
          vscode.window.showErrorMessage(`❌ ${scriptName} failed with code ${code}: ${errorOutput}`);
          console.error('Script failed:', errorOutput);
        }
        resolve();
      });
    } catch (error) {
      vscode.window.showErrorMessage(`Error: ${error.message}`);
      console.error('Error running script:', error);
      resolve();
    }
  });
}

function deactivate() {
  console.log('Zustic Snippets extension is now deactivated');
}

module.exports = {
  activate,
  deactivate
};
