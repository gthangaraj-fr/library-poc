# React Button Library

A simple, customizable React button component library.

## Installation

```bash
npm install @gthangaraj-fr/react-button-library
```

## Usage

```tsx
import React from "react";
import { Button } from "@gthangaraj-fr/react-button-library";

function App() {
  return (
    <div>
      <Button variant="primary" size="medium" onClick={() => alert("Clicked!")}>
        Click Me
      </Button>
    </div>
  );
}
```

## Props

| Prop        | Type                                                   | Default     | Description                              |
| ----------- | ------------------------------------------------------ | ----------- | ---------------------------------------- |
| `children`  | `React.ReactNode`                                      | -           | The content to display inside the button |
| `variant`   | `'primary' \| 'secondary' \| 'outline'`                | `'primary'` | Button variant style                     |
| `size`      | `'small' \| 'medium' \| 'large'`                       | `'medium'`  | Button size                              |
| `disabled`  | `boolean`                                              | `false`     | Is the button disabled?                  |
| `onClick`   | `(event: React.MouseEvent<HTMLButtonElement>) => void` | -           | Click handler                            |
| `className` | `string`                                               | `''`        | Additional CSS class names               |
| `type`      | `'button' \| 'submit' \| 'reset'`                      | `'button'`  | Button type                              |

## Examples

### Variants

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
```

### Sizes

```tsx
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
```

### Disabled

```tsx
<Button disabled>Disabled Button</Button>
```

## Development

### Scripts

- `npm run build` - Build the library
- `npm run build:watch` - Build in watch mode
- `npm run test` - Run tests
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production
- `npm run version:patch` - Bump patch version (1.0.0 → 1.0.1)
- `npm run version:minor` - Bump minor version (1.0.0 → 1.1.0)
- `npm run version:major` - Bump major version (1.0.0 → 2.0.0)
- `npm run publish:manual` - Build and publish manually

### Building

The library is built using Rollup and outputs:

- CommonJS (`dist/index.js`)
- ES Modules (`dist/index.esm.js`)
- TypeScript declarations (`dist/index.d.ts`)

### Publishing

#### Automated (Recommended)

Use the GitHub Actions workflow for automated publishing:

1. Go to Actions tab → "Patch and Publish"
2. Click "Run workflow"
3. Select version bump type (patch/minor/major)
4. The workflow will handle building, versioning, changelog generation, and publishing

See [WORKFLOW_SETUP.md](WORKFLOW_SETUP.md) for setup instructions.

#### Manual Publishing

```bash
npm run build
npm version patch  # or minor/major
npm publish --access public
git push origin main --follow-tags
```

## License

MIT
