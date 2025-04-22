import * as fs from "fs";
import * as path from "path";
import sharp from "sharp";

// Define the layer types
type LayerType =
  | "Background"
  | "Face"
  | "Headgear"
  | "Mask"
  | "Glass"
  | "Mic"
  | "Suit"
  | "Visor";

// Define the layer order from bottom to top
const LAYER_ORDER: LayerType[] = [
  "Background",
  "Face",
  "Headgear",
  "Mask",
  "Glass",
  "Mic",
  "Suit",
  "Visor",
];

// Define offsets for each layer type (to be adjusted experimentally)
const LAYER_OFFSETS: Record<LayerType, { x: number; y: number }> = {
  Background: { x: 0, y: 0 },
  Face: { x: 0, y: 0 },
  Headgear: { x: 0, y: 0 },
  Mask: { x: 0, y: 0 },
  Glass: { x: 0, y: 0 },
  Mic: { x: 0, y: 0 },
  Suit: { x: 0, y: 0 },
  Visor: { x: 0, y: 0 },
};

// Function to load generation data
async function loadGenerationData(): Promise<any> {
  const dataPath = path.join(
    process.cwd(),
    "generation-suite",
    "generation-data.json"
  );
  const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  return data;
}

// Function to find the correct image file
function findImageFile(basePath: string, fileName: string): string | null {
  // If the file exists directly, return it
  if (fs.existsSync(path.join(basePath, fileName))) {
    return path.join(basePath, fileName);
  }

  // Try to find the file in the images directory
  const imagesDir = path.join(process.cwd(), "generation-suite", "images");

  // Check if the file exists in the images directory
  if (fs.existsSync(path.join(imagesDir, fileName))) {
    return path.join(imagesDir, fileName);
  }

  // If not found, return null
  return null;
}

// Function to generate a single avatar
async function generateAvatar(
  avatarData: any,
  avatarId: string
): Promise<void> {
  const outputDir = path.join(process.cwd(), "generation-suite", "avatars");

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = path.join(outputDir, `avatar_${avatarId}.png`);

  // Create a composite array for sharp
  const composite: sharp.OverlayOptions[] = [];

  // Process each layer in order
  for (const layer of LAYER_ORDER) {
    const layerPath = avatarData.Attributes_Path[layer];

    // Skip if the layer path is empty or doesn't exist
    if (!layerPath || layerPath === "") {
      continue;
    }

    // Extract the filename from the path
    const fileName = path.basename(layerPath);

    // Find the correct image file
    const absoluteLayerPath = findImageFile(process.cwd(), fileName);

    // Skip if the file doesn't exist
    if (!absoluteLayerPath) {
      console.warn(`Warning: Layer file not found: ${fileName}`);
      continue;
    }

    // Add the layer to the composite with its offset
    composite.push({
      input: absoluteLayerPath,
      top: LAYER_OFFSETS[layer].y,
      left: LAYER_OFFSETS[layer].x,
    });
  }

  // Create the composite image
  try {
    await sharp({
      create: {
        width: 512,
        height: 512,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      },
    })
      .composite(composite)
      .toFile(outputPath);

    console.log(`Generated avatar ${avatarId}`);
  } catch (error) {
    console.error(`Error generating avatar ${avatarId}:`, error);
  }
}

// Main function to generate all avatars
async function generateAllAvatars(): Promise<void> {
  try {
    console.log("Loading generation data...");
    const generationData = await loadGenerationData();

    console.log(
      `Found ${Object.keys(generationData).length} avatars to generate`
    );

    // Generate each avatar
    for (const [avatarId, avatarData] of Object.entries(generationData)) {
      await generateAvatar(avatarData, avatarId);
    }

    console.log("All avatars generated successfully!");
  } catch (error) {
    console.error("Error generating avatars:", error);
  }
}

// Run the generation process
generateAllAvatars();
