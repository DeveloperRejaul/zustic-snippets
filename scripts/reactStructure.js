const fs = require('fs');
const path = require('path');

/**
 * Execute the create config script
 * @param {Object} vscode - VS Code API
 */
async function execute(vscode) {
  try {
    // Validate workspace
    if (!vscode.workspace.workspaceFolders || vscode.workspace.workspaceFolders.length === 0) {
      vscode.window.showErrorMessage('❌ No workspace folder is open. Please open a project first.');
      return;
    }

    const workspacePath = vscode.workspace.workspaceFolders[0].uri.fsPath;
    vscode.window.showInformationMessage('Creating react folder structure');

    // Create src directory if it doesn't exist
    const srcDir = path.join(workspacePath, 'src');
    if (!fs.existsSync(srcDir)) {
      fs.mkdirSync(srcDir, { recursive: true });
    }

    // vscode.window.showInformationMessage(`✅ VS Code configuration created successfully!`);
  } catch (error) {
    console.error('Error creating config:', error);
    vscode.window.showErrorMessage(`❌ Failed to create configuration: ${error.message}`);
  }
}

module.exports = {
  execute
};