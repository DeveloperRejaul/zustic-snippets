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
    vscode.window.showInformationMessage('Creating VS Code configuration...');

    const vscodeDir = path.join(workspacePath, '.vscode');

    // Create .vscode directory if it doesn't exist
    if (!fs.existsSync(vscodeDir)) {
      fs.mkdirSync(vscodeDir, { recursive: true });
    }

    // Define editor settings
    const settingsPath = path.join(vscodeDir, 'settings.json');
    const settings = {
      "files.autoSave": "onFocusChange",
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "[javascript]": {
        "editor.formatOnSave": true
      },
      "[javascriptreact]": {
        "editor.formatOnSave": true
      },
      "[typescript]": {
        "editor.formatOnSave": true
      },
      "[typescriptreact]": {
        "editor.formatOnSave": true
      },
      "editor.codeActionsOnSave": {
        "source.fixAll": "explicit"
      },
      "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
      ],
      "editor.formatOnSave": true,
      "cSpell.words": [
        "actualy",
        "Reportcontent"
      ],
      "nuxt.isNuxtApp": false
    };

    // Write settings.json
    fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
    console.log('✓ VS Code configuration created at:', settingsPath);

    vscode.window.showInformationMessage(`✅ VS Code configuration created successfully!`);
  } catch (error) {
    console.error('Error creating config:', error);
    vscode.window.showErrorMessage(`❌ Failed to create configuration: ${error.message}`);
  }
}

module.exports = {
  execute
};