# Contributing to Zustic Snippets

Thank you for your interest in contributing to Zustic Snippets!

## Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/DeveloperRejaul/zustic-snippets.git
   cd zustic-snippets
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Open in VS Code**
   ```bash
   code .
   ```

## Adding New Snippets

Snippets are defined in JSON files:
- `snippets/javascript.json` - JavaScript snippets
- `snippets/typescript.json` - TypeScript snippets

### Snippet Structure

```json
{
  "Snippet Name": {
    "prefix": "shortcut-key",
    "body": [
      "line 1",
      "line 2 with ${1:placeholder}",
      "line 3 with ${2:another placeholder}"
    ],
    "description": "Description of what this snippet does"
  }
}
```

### Placeholders

- `${1:text}` - First placeholder (cursor starts here)
- `${2:text}` - Second placeholder (Tab to navigate)
- `$0` - Final cursor position

### Example

```json
{
  "Zustic Counter Store": {
    "prefix": "zs",
    "body": [
      "import { create } from 'zustic';",
      "",
      "const ${1:useStore} = create((set) => ({",
      "  ${2:state}: ${3:initialValue},",
      "  ${4:action}: () => set({ ${2:state}: ${3:initialValue}} )",
      "}));"
    ],
    "description": "Basic Zustic store template"
  }
}
```

## Testing Snippets

1. **Press F5** to open a new VS Code window with your extension loaded
2. Create a new `.js` or `.ts` file
3. Type a snippet prefix and press `Tab` to test
4. Verify placeholders work correctly with `Tab` navigation

## Before Submitting

- [ ] Snippets tested and working
- [ ] JSON is valid (no syntax errors)
- [ ] Description is clear and concise
- [ ] Prefix is intuitive and memorable
- [ ] Added to appropriate language file (JS or TS)
- [ ] Updated README.md if adding new snippet categories

## Commit Guidelines

- Use clear, descriptive commit messages
- Prefix with type: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`
- Example: `feat: add Zustic store snippet`, `docs: update README with new snippets`

## Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-snippet`)
3. Make your changes
4. Test thoroughly
5. Commit with clear messages
6. Push to your fork
7. Open a Pull Request with description of changes

## Questions?

- Open an issue on [GitHub](https://github.com/DeveloperRejaul/zustic-snippets/issues)
- Check existing issues for similar questions

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
