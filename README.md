# Zustic Snippets

A professional collection of JavaScript and TypeScript code snippets for Visual Studio Code to boost your development productivity.

## Features

✨ **50+ Comprehensive Snippets**
- JavaScript snippets for common patterns and operations
- TypeScript snippets for type-safe development
- Supports JavaScript, TypeScript, JSX, and TSX

🚀 **Easy to Use**
- Type the snippet prefix and press Tab or Enter to expand
- Intuitive, memorable prefixes (e.g., `log`, `arrow`, `async`)
- Fully customizable with placeholder navigation

📋 **Well Organized**
- Separate snippet sets for JavaScript and TypeScript
- Snippets for arrays, objects, loops, functions, async operations, and more
- Type-safe snippets for advanced TypeScript features

## Available Snippets

### JavaScript Snippets

| Prefix | Description |
|--------|-------------|
| `log` | Console log |
| `err` | Console error |
| `warn` | Console warn |
| `table` | Console table |
| `af` | Arrow function |
| `aaf` | Async arrow function |
| `prom` | Promise |
| `try` | Try catch block |
| `tryf` | Try catch finally |
| `for` | For loop |
| `forof` | For of loop |
| `forin` | For in loop |
| `while` | While loop |
| `if` | If statement |
| `ifelse` | If else statement |
| `map` | Array map |
| `filter` | Array filter |
| `reduce` | Array reduce |
| `find` | Array find |
| `foreach` | Array forEach |
| `dest` | Object destructuring |
| `destarray` | Array destructuring |
| `spread` | Spread operator |
| `obj` | Object shorthand |
| `fetchget` | Fetch GET request |
| `fetchpost` | Fetch POST request |
| `class` | Class declaration |
| `constructor` | Constructor |
| `method` | Class method |
| `async` | Async function |
| `await` | Await expression |
| `export` | Export constant |
| `exportdef` | Export default |
| `import` | Import module |
| `importn` | Import named exports |
| `template` | Template literal |
| `ternary` | Ternary operator |
| `and` | Logical AND |
| `or` | Logical OR |

### TypeScript Snippets

| Prefix | Description |
|--------|-------------|
| `iface` | Interface |
| `type` | Type alias |
| `enum` | Enum |
| `ifacegeneric` | Generic interface |
| `typegeneric` | Generic type |
| `funcgeneric` | Generic function |
| `aftyped` | Typed arrow function |
| `classt` | Class with types |
| `union` | Union type |
| `intersection` | Intersection type |
| `readonly` | Readonly property |
| `partial` | Partial utility type |
| `required` | Required utility type |
| `record` | Record utility type |
| `pick` | Pick utility type |
| `omit` | Omit utility type |
| `keyof` | Keyof operator |
| `arrtyped` | Typed array |
| `objtyped` | Typed object |
| `paramtype` | Function parameter type |
| `asynct` | Typed async function |
| `promt` | Typed Promise |
| `conditional` | Conditional type |
| `mapped` | Mapped type |
| `asconst` | as const assertion |
| `typeguard` | Type guard function |
| `discriminated` | Discriminated union |
| `zs` | Interface Counter Store with TypeScript |
| `zsm` | Zustic Store with Middleware Logger |

### Zustic-Specific Snippets

#### JavaScript
- **`zs`** - Zustic counter store with JavaScript
  ```javascript
  import { create } from 'zustic';
  
  const useCounter = create((set, get) => ({
    count: 0,
    inc: () => set((state) => ({ count: state.count + 1 })),
    dec: () => set({ count: get().count - 1 }),
    reset: () => set({ count: 0 }),
  }));
  ```

- **`zsm`** - Zustic logger middleware
  ```javascript
  const logger = (set, get) => (next) => async (partial) => {
    console.log('Previous state:', get());
    console.log('Update:', partial);
    await next(partial);
    console.log('Updated state:', get());
  };
  ```

#### TypeScript
- **`zs`** - Zustic counter store with TypeScript interface and type-safe implementation
- **`zsm`** - Zustic middleware logger with TypeScript types and full async support

## Installation

1. Open Visual Studio Code
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "Zustic Snippets"
4. Click Install

## Usage

1. Open a JavaScript or TypeScript file
2. Type a snippet prefix (e.g., `log`)
3. Press `Tab` or `Enter` to expand
4. Use `Tab` to navigate through placeholders
5. Edit as needed

### Example

Start typing `arrow`:
```javascript
const myFunc = (param) => {
  
};
```

The cursor will be positioned for you to customize the function.

## Contributing

Found a bug or have a suggestion? Open an issue on [GitHub](https://github.com/DeveloperRejaul/zustic-snippets/issues).

## Publishing & Releases

This extension uses GitHub Actions for automated publishing to the VS Code Marketplace.

- **Automated Releases**: Push tags matching `v*.*.*` pattern to trigger automatic publishing
- **Manual Releases**: Use GitHub Actions workflow dispatch to create releases
- **Release Notes**: Automatically generated from commit history

See [PUBLISHING.md](./PUBLISHING.md) for detailed publishing instructions and [RELEASE.md](./RELEASE.md) for release management guidelines.

## License

MIT - see LICENSE file for details

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history.
