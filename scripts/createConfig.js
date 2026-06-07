const fs = require('fs');
const path = require('path');

const vscodeDir = path.join(__dirname, '..', '.vscode');

// Ensure .vscode directory exists
if (!fs.existsSync(vscodeDir)) {
  fs.mkdirSync(vscodeDir, { recursive: true });
  console.log('Created .vscode directory');
}

// Create settings.json
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

fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
console.log('✓ Created .vscode/settings.json');