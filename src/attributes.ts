import fs from "fs";
import path from "path";

const professions = ["Explorer", "Engineer", "Warlord"];

export const rewriteAttributes = () => {
  // Read the attributes file
  const attributesPath = path.join(__dirname, "attributes-mainnet.json");
  const attributes = JSON.parse(fs.readFileSync(attributesPath, "utf-8"));

  // Transform the attributes
  const transformedAttributes: { [key: string]: any } = {};

  Object.entries(attributes).forEach(([key, value]: [string, any]) => {
    // Remove Attributes_Path
    const { Attributes_Path, ...rest } = value;

    // Assign profession in a round-robin fashion based on the token ID
    const tokenId = parseInt(key);
    rest.Profession = professions[tokenId % professions.length];

    // Determine rarity
    let rarity = "Common";
    if (
      Object.values(rest.Attributes).some(
        (value: any) => typeof value === "string" && value.includes("Legendary")
      )
    ) {
      rarity = "Legendary";
    } else if (
      Object.values(rest.Attributes).some(
        (value: any) => typeof value === "string" && value.includes("Rare")
      )
    ) {
      rarity = "Rare";
    }

    transformedAttributes[key] = {
      ...rest,
      Rarity: rarity,
    };
  });

  // Write the transformed attributes to a new file
  const outputPath = path.join(__dirname, "colonists-attributes.json");
  fs.writeFileSync(outputPath, JSON.stringify(transformedAttributes, null, 2));

  // Count rarity distribution
  const rarityCounts = Object.values(transformedAttributes).reduce(
    (acc: any, attr: any) => {
      acc[attr.Rarity] = (acc[attr.Rarity] || 0) + 1;
      return acc;
    },
    {}
  );

  console.log("Rarity distribution:");
  console.log(`Legendary: ${rarityCounts.Legendary || 0}`);
  console.log(`Rare: ${rarityCounts.Rare || 0}`);
  console.log(`Common: ${rarityCounts.Common || 0}`);
};

rewriteAttributes();
