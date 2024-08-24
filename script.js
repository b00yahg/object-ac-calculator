// Database of objects with their default properties
const objectDatabase = {
    // Town/City Items
    "barstool": { size: "Medium", defaultdefaultMaterial: "Wood" },
    "table": { size: "Medium", defaultMaterial: "Wood" },
    "chair": { size: "Medium", defaultMaterial: "Wood" },
    "bench": { size: "Medium", defaultMaterial: "Wood" },
    "door": { size: "Large", defaultMaterial: "Wood" },
    "window": { size: "Medium", defaultMaterial: "Glass" },
    "barrel": { size: "Medium", defaultMaterial: "Wood" },
    "crate": { size: "Medium", defaultMaterial: "Wood" },
    "wagon": { size: "Large", defaultMaterial: "Wood" },
    "signpost": { size: "Medium", defaultMaterial: "Wood" },
    "streetlamp": { size: "Medium", defaultMaterial: "Iron" },
    "fountain": { size: "Large", defaultMaterial: "Stone" },
    "statue": { size: "Large", defaultMaterial: "Stone" },
    "market_stall": { size: "Large", defaultMaterial: "Wood" },
    "well": { size: "Large", defaultMaterial: "Stone" },
    "chimney": { size: "Medium", defaultMaterial: "Stone" },
    "roof": { size: "Large", defaultMaterial: "Wood" },
    "shutter": { size: "Small", defaultMaterial: "Wood" },
    "fence": { size: "Medium", defaultMaterial: "Wood" },
    "gate": { size: "Large", defaultMaterial: "Wood" },
    "cobblestone": { size: "Tiny", defaultMaterial: "Stone" },
    "rain_barrel": { size: "Medium", defaultMaterial: "Wood" },
    "weathervane": { size: "Small", defaultMaterial: "Iron" },

    // Tavern/Inn Items
    "mug": { size: "Tiny", defaultMaterial: "Wood" },
    "plate": { size: "Tiny", defaultMaterial: "Wood" },
    "bottle": { size: "Tiny", defaultMaterial: "Glass" },
    "tankard": { size: "Tiny", defaultMaterial: "Wood" },
    "keg": { size: "Medium", defaultMaterial: "Wood" },
    "chandelier": { size: "Medium", defaultMaterial: "Iron" },
    "fireplace": { size: "Large", defaultMaterial: "Stone" },
    "bed": { size: "Large", defaultMaterial: "Wood" },
    "stool": { size: "Small", defaultMaterial: "Wood" },
    "candle": { size: "Tiny", defaultMaterial: "Wax" },
    "lantern": { size: "Tiny", defaultMaterial: "Iron" },
    "tablecloth": { size: "Medium", defaultMaterial: "Cloth" },
    "menu": { size: "Tiny", defaultMaterial: "Parchment" },
    "dartboard": { size: "Small", defaultMaterial: "Wood" },
    "bar": { size: "Large", defaultMaterial: "Wood" },
    "wine_rack": { size: "Medium", defaultMaterial: "Wood" },
    "spittoon": { size: "Small", defaultMaterial: "Brass" },

    // Dungeon Items
    "torch_holder": { size: "Small", defaultMaterial: "Iron" },
    "chain": { size: "Medium", defaultMaterial: "Iron" },
    "portcullis": { size: "Large", defaultMaterial: "Iron" },
    "chest": { size: "Medium", defaultMaterial: "Wood" },
    "coffin": { size: "Large", defaultMaterial: "Wood" },
    "sarcophagus": { size: "Large", defaultMaterial: "Stone" },
    "altar": { size: "Large", defaultMaterial: "Stone" },
    "pillar": { size: "Large", defaultMaterial: "Stone" },
    "pedestal": { size: "Medium", defaultMaterial: "Stone" },
    "brazier": { size: "Medium", defaultMaterial: "Iron" },
    "cauldron": { size: "Medium", defaultMaterial: "Iron" },
    "iron_maiden": { size: "Large", defaultMaterial: "Iron" },
    "rack": { size: "Large", defaultMaterial: "Wood" },
    "stocks": { size: "Medium", defaultMaterial: "Wood" },
    "oubliette": { size: "Large", defaultMaterial: "Stone" },
    "gargoyle": { size: "Medium", defaultMaterial: "Stone" },
    "spike_trap": { size: "Medium", defaultMaterial: "Iron" },
    "pit": { size: "Large", defaultMaterial: "Stone" },
    "secret_door": { size: "Large", defaultMaterial: "Stone" },

    // Wilderness Items
    "tree": { size: "Large", defaultMaterial: "Wood" },
    "boulder": { size: "Large", defaultMaterial: "Stone" },
    "log": { size: "Medium", defaultMaterial: "Wood" },
    "campfire": { size: "Small", defaultMaterial: "Wood" },
    "tent": { size: "Medium", defaultMaterial: "Cloth" },
    "cart": { size: "Large", defaultMaterial: "Wood" },
    "bush": { size: "Medium", defaultMaterial: "Wood" },
    "rock": { size: "Medium", defaultMaterial: "Stone" },
    "stream": { size: "Large", defaultMaterial: "Water" },
    "fallen_tree": { size: "Large", defaultMaterial: "Wood" },
    "cave_entrance": { size: "Large", defaultMaterial: "Stone" },
    "vine": { size: "Medium", defaultMaterial: "Plant" },
    "mushroom": { size: "Tiny", defaultMaterial: "Plant" },
    "beehive": { size: "Small", defaultMaterial: "Wood" },

    // Castle/Keep Items
    "throne": { size: "Large", defaultMaterial: "Wood" },
    "tapestry": { size: "Large", defaultMaterial: "Cloth" },
    "suit_of_armor": { size: "Medium", defaultMaterial: "Steel" },
    "shield": { size: "Medium", defaultMaterial: "Wood" },
    "banner": { size: "Medium", defaultMaterial: "Cloth" },
    "candelabra": { size: "Medium", defaultMaterial: "Iron" },
    "drawbridge": { size: "Large", defaultMaterial: "Wood" },
    "arrow_slit": { size: "Small", defaultMaterial: "Stone" },
    "battlement": { size: "Large", defaultMaterial: "Stone" },
    "catapult": { size: "Large", defaultMaterial: "Wood" },
    "portcullis": { size: "Large", defaultMaterial: "Iron" },
    "moat": { size: "Large", defaultMaterial: "Water" },
    "coat_of_arms": { size: "Medium", defaultMaterial: "Wood" },

    // Common Items
    "book": { size: "Tiny", defaultMaterial: "Leather" },
    "scroll": { size: "Tiny", defaultMaterial: "Parchment" },
    "mirror": { size: "Small", defaultMaterial: "Glass" },
    "rug": { size: "Large", defaultMaterial: "Cloth" },
    "painting": { size: "Medium", defaultMaterial: "Wood" },
    "vase": { size: "Small", defaultMaterial: "Ceramic" },
    "chest_of_drawers": { size: "Large", defaultMaterial: "Wood" },
    "wardrobe": { size: "Large", defaultMaterial: "Wood" },
    "bookshelf": { size: "Large", defaultMaterial: "Wood" },
    "quill": { size: "Tiny", defaultMaterial: "Feather" },
    "inkwell": { size: "Tiny", defaultMaterial: "Glass" },
    "hourglass": { size: "Small", defaultMaterial: "Glass" },
    "globe": { size: "Medium", defaultMaterial: "Wood" },
    "abacus": { size: "Small", defaultMaterial: "Wood" },
    "telescope": { size: "Medium", defaultMaterial: "Brass" },

    // Miscellaneous
    "ladder": { size: "Large", defaultMaterial: "Wood" },
    "anvil": { size: "Medium", defaultMaterial: "Iron" },
    "forge": { size: "Large", defaultMaterial: "Stone" },
    "fishing_rod": { size: "Medium", defaultMaterial: "Wood" },
    "loom": { size: "Large", defaultMaterial: "Wood" },
    "spinning_wheel": { size: "Medium", defaultMaterial: "Wood" },
    "plow": { size: "Large", defaultMaterial: "Wood" },
    "millstone": { size: "Large", defaultMaterial: "Stone" },
    "gallows": { size: "Large", defaultMaterial: "Wood" },
    "trebuchet": { size: "Large", defaultMaterial: "Wood" },
    "ballista": { size: "Large", defaultMaterial: "Wood" },
    "sundial": { size: "Medium", defaultMaterial: "Stone" },
    "scarecrow": { size: "Medium", defaultMaterial: "Cloth" },
    "beehive": { size: "Medium", defaultMaterial: "Wood" },
    "birdcage": { size: "Small", defaultMaterial: "Iron" },
    "wagon_wheel": { size: "Medium", defaultMaterial: "Wood" },
    "gravestone": { size: "Medium", defaultMaterial: "Stone" },
    "guillotine": { size: "Large", defaultMaterial: "Wood" },

    // Magical Items (treat as normal objects for gameplay purposes)
    "crystal_ball": { size: "Tiny", defaultMaterial: "Glass" },
    "magic_mirror": { size: "Medium", defaultMaterial: "Glass" },
    "enchanted_statue": { size: "Medium", defaultMaterial: "Stone" },
    "alchemy_table": { size: "Large", defaultMaterial: "Wood" },
    "spellbook": { size: "Small", defaultMaterial: "Leather" },
    "magical_orb": { size: "Tiny", defaultMaterial: "Glass" },
    "rune_stone": { size: "Small", defaultMaterial: "Stone" },
    "enchanted_weapon_rack": { size: "Medium", defaultMaterial: "Wood" },
    "potion_shelf": { size: "Medium", defaultMaterial: "Wood" },
    "arcane_circle": { size: "Large", defaultMaterial: "Stone" },
    "summoning_portal": { size: "Large", defaultMaterial: "Stone" },
    "enchanted_loom": { size: "Large", defaultMaterial: "Wood" },
    "scrying_pool": { size: "Medium", defaultMaterial: "Stone" },

    // Additional Items
    "lectern": { size: "Medium", defaultMaterial: "Wood" },
    "pulpit": { size: "Large", defaultMaterial: "Wood" },
    "pew": { size: "Large", defaultMaterial: "Wood" },
    "confessional": { size: "Large", defaultMaterial: "Wood" },
    "sundial": { size: "Medium", defaultMaterial: "Stone" },
    "weathervane": { size: "Small", defaultMaterial: "Iron" },
    "bell": { size: "Medium", defaultMaterial: "Bronze" },
    "clocktower": { size: "Large", defaultMaterial: "Stone" },
    "battering_ram": { size: "Large", defaultMaterial: "Wood" },
    "siege_tower": { size: "Large", defaultMaterial: "Wood" },
    "catapult": { size: "Large", defaultMaterial: "Wood" },
    "ballista": { size: "Large", defaultMaterial: "Wood" },
    "pillory": { size: "Medium", defaultMaterial: "Wood" },
    "gibbet": { size: "Medium", defaultMaterial: "Iron" },
    "rack": { size: "Large", defaultMaterial: "Wood" },
    "iron_maiden": { size: "Large", defaultMaterial: "Iron" },
    "thumbscrew": { size: "Tiny", defaultMaterial: "Iron" },
    "branding_iron": { size: "Small", defaultMaterial: "Iron" },
    "ducking_stool": { size: "Large", defaultMaterial: "Wood" },
    "whipping_post": { size: "Medium", defaultMaterial: "Wood" },
};

// Expanded materialAC to include new materials
const materialAC = {
    "Wood": 15,
    "Stone": 17,
    "Iron": 19,
    "Steel": 19,
    "Glass": 13,
    "Cloth": 11,
    "Leather": 11,
    "Parchment": 11,
    "Ceramic": 12,
    "Wax": 5,
    "Brass": 18,
    "Water": 10,
    "Plant": 10,
    "Feather": 5,
    "Bronze": 18,
};

// Hit point values
const hitPoints = {
    "Tiny": { "Fragile": "1d4", "Resilient": "2d4" },
    "Small": { "Fragile": "1d6", "Resilient": "3d6" },
    "Medium": { "Fragile": "1d8", "Resilient": "4d8" },
    "Large": { "Fragile": "1d10", "Resilient": "5d10" },
};

// Size increase mapping
const sizeIncrease = {
    "Tiny": "Small",
    "Small": "Medium",
    "Medium": "Large",
    "Large": "Large" // Can't go larger than Large
};

// Synonyms for resilient
const resilientSynonyms = [
    "resilient", "tough", "durable", "sturdy", "robust", "hardy", "strong",
    "solid", "substantial", "rugged", "enduring", "long-lasting", "tenacious",
    "unyielding", "firm", "stout", "fortified", "reinforced", "strengthened"
];

// Material synonyms
const materialSynonyms = {
    "Wood": ["wood", "wooden", "timber", "lumber"],
    "Stone": ["stone", "rock", "granite", "marble", "slate"],
    "Iron": ["iron", "ferrous", "steel"],
    "Steel": ["steel", "metal", "iron"],
    "Glass": ["glass", "crystal", "transparent"],
    "Cloth": ["cloth", "fabric", "textile", "linen", "cotton", "wool", "silk"],
    "Leather": ["leather", "hide", "skin"],
    "Parchment": ["parchment", "paper", "scroll"],
    "Ceramic": ["ceramic", "pottery", "porcelain", "earthenware"],
    "Wax": ["wax", "beeswax", "paraffin"],
    "Brass": ["brass", "bronze"],
    "Water": ["water", "liquid", "fluid"],
    "Plant": ["plant", "vegetation", "foliage", "organic"],
    "Feather": ["feather", "plume", "down"],
    "Bronze": ["bronze", "copper", "brass"]
};

// Reverse lookup for material synonyms
const materialLookup = Object.entries(materialSynonyms).reduce((acc, [key, synonyms]) => {
    synonyms.forEach(synonym => {
        acc[synonym] = key;
    });
    return acc;
}, {});

function calculateObject() {
    console.log("calculateObject function called");
    const input = document.getElementById("objectInput").value;
    console.log("Input value:", input);
    
    let objectName = words[words.length - 1];
    let modifiers = words.slice(0, -1);
    
    if (!objectDatabase[objectName]) {
        document.getElementById("result").innerHTML = "Object not found in database.";
        return;
    }
    
    let object = {
        size: objectDatabase[objectName].size,
        material: objectDatabase[objectName].defaultMaterial
    };
    
    let isResilient = false;
    let isBig = false;

    // Apply modifiers
    modifiers.forEach(modifier => {
        // Check for size increase
        if (modifier === "big") {
            isBig = true;
        }
        
        // Check for resilient synonyms
        if (resilientSynonyms.includes(modifier)) {
            isResilient = true;
        }
        
        // Check for material synonyms
        const materialMatch = Object.keys(materialLookup).find(syn => syn === modifier);
        if (materialMatch) {
            object.material = materialLookup[materialMatch];
        }
    });
    
    // Apply size increase if "big" was specified
    if (isBig) {
        object.size = sizeIncrease[object.size];
    }
    
    let resilience = isResilient ? "Resilient" : "Fragile";
    
    let ac = materialAC[object.material];
    let hp = hitPoints[object.size][resilience];
    
    document.getElementById("result").innerHTML = `Object: ${objectName}<br>Material: ${object.material}<br>Size: ${object.size}<br>AC: ${ac}<br>Hit Points: ${hp}`;
    showResult(`${input}<br><br>AC: ${ac}<br>Hit Points: ${hp}`);
}

function showResult(message) {
    console.log("Showing result:", message);
    document.getElementById("result").innerHTML = message;
    document.getElementById("resultPopup").style.display = "block";
}

// Add these event listeners at the end of your script.js file
document.querySelector(".close").onclick = function() {
    document.getElementById("resultPopup").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("resultPopup")) {
        document.getElementById("resultPopup").style.display = "none";
    }
}

console.log("Script loaded");
