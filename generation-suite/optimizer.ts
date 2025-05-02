import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

async function optimizeImages() {
  const inputDir = path.join(__dirname, "avatars");
  const outputDir = path.join(__dirname, "optimized-avatars");

  try {
    // Create output directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true });

    // Read all files in the input directory
    const files = await fs.readdir(inputDir);

    // Filter for PNG files
    const pngFiles = files.filter(
      (file) => path.extname(file).toLowerCase() === ".png"
    );

    // Process each PNG file
    for (const file of pngFiles) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file.replace(".png", ".webp"));

      try {
        await sharp(inputPath)
          .webp({
            quality: 80,
            effort: 1,
          })
          .toFile(outputPath);

        console.log(`Optimized: ${file}`);
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    }

    console.log("Image optimization complete!");
  } catch (error) {
    console.error("Error:", error);
  }
}

optimizeImages();
