# Publishing Guide

## Prerequisites

1. **npm account**: Make sure you have an npm account. If not, create one at [npmjs.com](https://www.npmjs.com/)
2. **npm login**: Login to npm in your terminal:
   ```bash
   npm login
   ```

## Publishing Steps

### 1. Build the library
```bash
npm run build
```

### 2. Test the build locally (optional)
You can test your package locally before publishing:
```bash
npm pack
```
This creates a `.tgz` file that you can install in another project to test.

### 3. Publish to npm
```bash
npm publish --access public
```

Note: Since your package name starts with `@gthangaraj-fr/`, it's a scoped package and requires the `--access public` flag for the first publish.

### 4. Version Updates
For future updates:

1. Update the version in `package.json`:
   ```bash
   npm version patch  # for bug fixes (1.0.0 → 1.0.1)
   npm version minor  # for new features (1.0.0 → 1.1.0)
   npm version major  # for breaking changes (1.0.0 → 2.0.0)
   ```

2. Publish the new version:
   ```bash
   npm publish
   ```

## Installing in Other Projects

Once published, other developers can install your library:

```bash
npm install @gthangaraj-fr/react-button-library
```

Or with a specific version:
```bash
npm install @gthangaraj-fr/react-button-library@1.0.0
```
