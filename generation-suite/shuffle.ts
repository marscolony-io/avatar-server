import * as fs from "fs";
import * as path from "path";

/**
 * Shuffles the generation data by randomly reassigning the data between keys.
 * For example, data of key 1 might become data of key 10000 and vice versa.
 */
export function shuffleGenerationData(): void {
  // Load the generation data
  const dataPath = path.join(
    process.cwd(),
    "generation-suite",
    "generation-data.json"
  );

  const outputPath = path.join(
    process.cwd(),
    "generation-suite",
    "generation-data-shuffled.json"
  );
  const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

  // Get all keys from the data
  const keys = Object.keys(data);

  // Create a copy of the original data
  const originalData = { ...data };

  // Create a shuffled array of keys
  const shuffledKeys = [...keys];
  for (let i = shuffledKeys.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledKeys[i], shuffledKeys[j]] = [shuffledKeys[j], shuffledKeys[i]];
  }

  // Reassign data based on shuffled keys
  keys.forEach((key, index) => {
    data[key] = originalData[shuffledKeys[index]];
  });

  // Write the shuffled data back to the file
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 4));

  console.log(`Successfully shuffled data for ${keys.length} NFTs.`);
}

shuffleGenerationData();
