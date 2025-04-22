# Avatar Generation Suite

This tool generates avatar images by combining different layers of PNG images according to the specifications in `generation-data.json`.

## Setup

1. Make sure you have Node.js installed
2. Install dependencies:
   ```
   npm install
   ```

## Usage

Run the avatar generation script:

```
npm run generate
```

This will:

1. Read the avatar specifications from `generation-data.json`
2. Combine the image layers in the correct order
3. Generate PNG avatars in the `avatars` directory

## Layer Order

The layers are combined in the following order (from bottom to top):

1. Background
2. Face
3. Headgear
4. Mask
5. Glass
6. Mic
7. Suit
8. Visor

## Adjusting Layer Offsets

If the layers don't align correctly, you can adjust the offsets in the `LAYER_OFFSETS` object in `generate.ts`. Each layer has `x` and `y` offset values that determine its position.

Example:

```typescript
const LAYER_OFFSETS: Record<LayerType, { x: number; y: number }> = {
  Background: { x: 0, y: 0 },
  Face: { x: 0, y: 0 },
  // Adjust these values as needed
  Headgear: { x: 10, y: -5 },
  // ...
};
```

## Output

The generated avatars will be saved in the `avatars` directory with filenames in the format `avatar_[id].png`. Each avatar will be 512x512 pixels with a transparent background.
