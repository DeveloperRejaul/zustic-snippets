const fs = require('fs');
const path = require('path');

/**
 * Recursively copy a directory from src to dest.
 * If a file already exists, it is skipped.
 * @param {string} srcDir
 * @param {string} destDir
 */
function copyDirectory(srcDir, destDir) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const entries = fs.readdirSync(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
      continue;
    }

    if (fs.existsSync(destPath)) {
      continue;
    }

    fs.copyFileSync(srcPath, destPath);
  }
}

/**
 * Execute the create react native structure script
 * @param {Object} vscode - VS Code API
 */
async function execute(vscode) {
  try {
    if (!vscode.workspace.workspaceFolders || vscode.workspace.workspaceFolders.length === 0) {
      vscode.window.showErrorMessage('❌ No workspace folder is open. Please open a project first.');
      return;
    }

    const workspacePath = vscode.workspace.workspaceFolders[0].uri.fsPath;
    const templatePath = path.join(__dirname, '..', 'store', 'react-native-structure');

    if (!fs.existsSync(templatePath)) {
      vscode.window.showErrorMessage('❌ React Native template folder not found in extension.');
      return;
    }

    vscode.window.showInformationMessage('Creating React Native structure...');
    copyDirectory(templatePath, workspacePath);
    vscode.window.showInformationMessage('✅ React Native structure created successfully!');
  } catch (error) {
    console.error('Error creating React Native structure:', error);
    vscode.window.showErrorMessage(`❌ Failed to create React Native structure: ${error.message}`);
  }
}

module.exports = {
  execute
};
