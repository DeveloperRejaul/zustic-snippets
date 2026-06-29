# Zustic Snippets

A lightweight and productivity-focused collection of **Zustic store snippets** for **JavaScript, TypeScript, JSX, and TSX** in Visual Studio Code.

Designed to help you quickly scaffold Zustand-like state management using `zustic` with clean and reusable patterns.

---

## Features

* **Quick Store Setup** – Create Zustand-style stores instantly
* **Type-Safe (TypeScript)** – Fully typed store and middleware snippets
* **Reusable Middleware** – Built-in logger middleware pattern
* **Smart Prefixes** – Easy-to-remember snippet triggers (`zs`, `zsm`)
* **Supports JS, JSX, TS, TSX**

---

## Available Snippets

### Store Management

| Prefix | Description | Use Case |
|--------|-------------|----------|
| `zs` | Zustic Counter Store | Create a basic state store with increment, decrement, reset actions |
| `zsm` | Zustic Logger Middleware | Add logging to track state changes before and after updates |

### API & Query Management

| Prefix | Description | Use Case |
|--------|-------------|----------|
| `zbq` | Zustic Base Query | Setup a reusable query class with headers and fetch logic |
| `zq` | Zustic Query API | Create endpoints for queries and mutations with caching |

### Commands

| Command | Shortcut | Description |
|---------|----------|-------------|
| `Zustic: Create VS Code Configuration` | `Ctrl+Shift+P` then type command | Creates `.vscode/settings.json` with auto-save, formatter, and ESLint settings |
| `Zustic: Create react native structure` | `Ctrl+Shift+P` then type command | Creates react native structure file folders|

---

## Snippet Details

### 1. `zs` – Counter Store

**JavaScript:**
```javascript
import { create } from 'zustic';

const useCounter = create((set, get) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set({ count: get().count - 1 }),
  reset: () => set({ count: 0 }),
}));
```

**TypeScript:**
```typescript
import { create } from 'zustic';

type CounterStore = {
  count: number;
  inc: () => void;
  dec: () => void;
  reset: () => void;
};

const useCounter = create<CounterStore>((set, get) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set({ count: get().count - 1 }),
  reset: () => set({ count: 0 }),
}));
```

---

### 2. `zsm` – Logger Middleware

**JavaScript:**
```javascript
import { type Middleware } from 'zustic';

const logger = (set, get) => (next) => async (partial) => {
  console.log('Previous state:', get());
  console.log('Update:', partial);

  await next(partial);

  console.log('Updated state:', get());
};
```

**TypeScript:**
```typescript
import { type Middleware } from 'zustic';

type AppState = {
  count: number;
  name: string;
};

const logger: Middleware<AppState> = (set, get) => (next) => async (partial) => {
  console.log('Previous state:', get());
  console.log('Update:', partial);

  await next(partial);

  console.log('Updated state:', get());
};
```

---

### 3. `zbq` – Base Query

Setup a query class with built-in fetch, headers, and timeout handling:
```javascript
class Query {
  getHeader(args) {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(args?.headers || {})
    };
    return headers;
  }

  baseQuery = async (args) => {
    const timeout = 60000;
    const baseUrl = 'https://api.example.com';
    // ... fetch logic
  };
}
```

---

### 4. `zq` – Query API

Create API endpoints with queries and mutations:
```javascript
import { createApi } from 'zustic/query';
import query from 'base_query_path';

const api = createApi({
  baseQuery: query.baseQuery,
  cacheTimeout: 5 * 60 * 1000,
  endpoints: (builder) => ({
    getUsers: builder.query({ query: () => '/users' }),
    createUser: builder.mutation({
      query: (user) => ({ url: '/users', method: 'POST', body: user })
    })
  })
});

export const { useGetUsersQuery, useCreateUserMutation } = api;
```

---

## Usage

1. Open a `.js`, `.jsx`, `.ts`, or `.tsx` file
2. Type a snippet prefix:

   * `zs` → create store
   * `zsm` → logger middleware
   * `zbq` → base query class
   * `zq` → query API endpoints
3. Press **Tab** or **Enter** to expand
4. Use **Tab** to navigate placeholders and customize code

---

## Commands

### `Zustic: Create VS Code Configuration`

Automatically create a `.vscode/settings.json` file in your workspace with recommended Zustic project settings.

**How to use:**
1. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
2. Type `Zustic: Create VS Code Configuration`
3. Press **Enter**

**What it does:**
- Creates `.vscode/` directory if it doesn't exist
- Sets up auto-save, format-on-save, and ESLint configuration
- Applies formatter (Prettier) to JavaScript and TypeScript files
- Configures code actions for auto-fixing

---

## Zustic Documentation

To learn more about the library behind these snippets, check the official docs:

[Zustic Official Documentation](https://zustic.github.io/?utm_source=chatgpt.com)

Zustic is a **minimal state management library (~500B, zero dependencies)** with a simple API using `create`, `set`, and `get`, making it fast and easy to use in React projects. ([zustic.github.io][1])

---

## Why Zustic Snippets?

* Saves time writing repetitive store logic
* Encourages clean and consistent patterns
* Works seamlessly with modern React setups
* Helps beginners structure state properly

---

## Installation

1. Open **VS Code**
2. Go to Extensions (`Ctrl + Shift + X`)
3. Search for **Zustic Snippets**
4. Click **Install**

---

## Contributing

Have ideas or improvements?

* Open an issue
* Suggest new snippets
* Improve existing patterns

---

## License

MIT License

---
