# Usage Examples

## Basic Usage

```tsx
import React from "react";
import { Button } from "@gthangaraj-fr/react-button-library";
import "@gthangaraj-fr/react-button-library/dist/index.css";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h1>My App</h1>

      {/* Primary button */}
      <Button onClick={handleClick}>Click Me</Button>

      {/* Secondary button */}
      <Button variant="secondary" size="large">
        Secondary Button
      </Button>

      {/* Outline button */}
      <Button variant="outline" size="small">
        Outline Button
      </Button>

      {/* Disabled button */}
      <Button disabled>Disabled Button</Button>
    </div>
  );
}

export default App;
```

## With Custom Styling

```tsx
import React from 'react';
import { Button } from '@gthangaraj-fr/react-button-library';
import '@gthangaraj-fr/react-button-library/dist/index.css';

function App() {
  return (
    <div>
      {/* Button with custom className */}
      <Button
        className="my-custom-button"
        variant="primary"
        onClick={() => console.log('Custom button clicked')}
      >
        Custom Styled Button
      </Button>
    </div>
  );
}

// In your CSS file
.my-custom-button {
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 12px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
}
```

## Form Usage

```tsx
import React from "react";
import { Button } from "@gthangaraj-fr/react-button-library";
import "@gthangaraj-fr/react-button-library/dist/index.css";

function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const handleReset = () => {
    console.log("Form reset");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />

      <div style={{ marginTop: "1rem", gap: "0.5rem", display: "flex" }}>
        <Button type="submit" variant="primary">
          Submit
        </Button>

        <Button type="button" variant="secondary" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </form>
  );
}
```

## All Variants Example

```tsx
import React from "react";
import { Button } from "@gthangaraj-fr/react-button-library";
import "@gthangaraj-fr/react-button-library/dist/index.css";

function ButtonShowcase() {
  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      {/* Variants */}
      <section>
        <h2>Variants</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2>Sizes</h2>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
      </section>

      {/* States */}
      <section>
        <h2>States</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>
    </div>
  );
}
```
