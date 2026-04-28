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

### JavaScript / JSX

#### `zs` – Zustic Counter Store

```javascript
import { create } from 'zustic';

const useCounter = create((set, get) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set({ count: get().count - 1 }),
  reset: () => set({ count: 0 }),
}));
```

---

#### `zsm` – Zustic Logger Middleware

```javascript
import { type Middleware } from 'zustic';

const logger = (set, get) => (next) => async (partial) => {
  console.log('Previous state:', get());
  console.log('Update:', partial);

  await next(partial);

  console.log('Updated state:', get());
};
```

---

### TypeScript / TSX

#### `zs` – Typed Counter Store

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

#### `zsm` – Typed Logger Middleware

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

## Usage

1. Open a `.js`, `.jsx`, `.ts`, or `.tsx` file
2. Type a snippet prefix:

   * `zs` → create store
   * `zsm` → logger middleware
3. Press **Tab** or **Enter** to expand
4. Use **Tab** to navigate placeholders

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
