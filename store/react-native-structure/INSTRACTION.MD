# React Native Structure Setup

This folder is the template copied into your current workspace when you run the VS Code command:

- `Zustic: Create React Structure`

It provides a ready-made React Native app structure with navigation, state helpers, UI components, asset handling, localization, and native integrations.

---

## 1. What to do first

1. Open a project folder in VS Code.
2. Run the command `Zustic: Create React Structure`.
3. Confirm the template files were copied into your workspace root.

---

## 2. Required libraries to install

This template uses the following React Native libraries and native modules:

- `react`
- `react-native`
- `@react-navigation/native`
- `@react-navigation/native-stack`
- `react-native-gesture-handler`
- `react-native-reanimated`
- `react-native-worklets`
- `react-native-safe-area-context`
- `react-native-svg`
- `react-native-mmkv`
- `react-native-image-picker`
- `react-native-image-crop-picker`
- `react-native-simple-toast`
- `react-native-size-matters`
- `@react-native-community/netinfo`
- `@react-native-firebase/messaging`
- `@react-native-firebase/app`
- `react-native-permissions`
- `@notifee/react-native`
- `@hot-updater/react-native`
- `@hot-updater/bare`
- `@hot-updater/supabase`
- `zustic`
- `react-native-dotenv`
- `dotenv`

If you are using TypeScript, also install:

- `typescript`
- `@react-native/typescript-config`

> `@src` is a local path alias configured by `babel.config.js` and `tsconfig.json`; it is not a separate npm package.

---

## 3. Recommended install command

Run this in your workspace root after the files are copied:

```bash
npm install @react-navigation/native @react-navigation/native-stack react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-svg react-native-mmkv react-native-image-picker react-native-image-crop-picker react-native-simple-toast react-native-size-matters @react-native-community/netinfo @react-native-firebase/app @react-native-firebase/messaging @notifee/react-native react-native-permissions react-native-worklets
```

```bash
npm install --save-dev @hot-updater/react-native @hot-updater/bare @hot-updater/supabase zustic zustic/i18n react-native-dotenv dotenv
```

For TypeScript projects, also install:

```bash
npm install --save-dev typescript @react-native/typescript-config
```

---

## 4. Native setup after installation

Because this template includes native modules, run these commands:

```bash
npx pod-install ios
```

Then start the app with:

```bash
npx react-native run-android
npx react-native run-ios
```

If you already have Metro running, restart it after installing packages.

---

## 5. Important post-copy tasks

- Update the `.env` file values. The template includes a `.env` file with placeholders such as `BASE_URL`.
- Check `babel.config.js` for the `@src` alias and `react-native-dotenv` setup.
- Make sure `react-native.config.js` remains present so assets/fonts are linked correctly.
- If you use `@react-native-firebase/messaging`, follow Firebase setup guides and add `google-services.json` / `GoogleService-Info.plist`.
- If you use `@notifee/react-native`, follow Notifee’s native installation instructions for Android and iOS.

---

## 6. Notes

- This template is intended for a React Native CLI / bare workflow project, not an Expo managed workflow.
- The command copies the template into the workspace root. If you already have existing files, the copy logic does not overwrite existing files.
- After install, reopen VS Code if IntelliSense does not immediately resolve the `@src` alias.

---

## 7. Quick start after install

```bash
npm install
npx pod-install ios
npx react-native start
npx react-native run-android
```

Or for iOS:

```bash
npx react-native run-ios
```

If you want, remove native modules you do not plan to use to simplify your final app.
