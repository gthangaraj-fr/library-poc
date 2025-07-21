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
- `npm run test` - Run tests
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production

### Building

The library is built using Rollup and outputs:

- CommonJS (`dist/index.js`)
- ES Modules (`dist/index.esm.js`)
- TypeScript declarations (`dist/index.d.ts`)

## License

MIT
