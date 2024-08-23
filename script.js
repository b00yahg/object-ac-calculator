// Database of objects with their default properties
const objectDatabase = {
    // Town/City Items
    "barstool": { size: "Medium", material: "Wood" },
    "table": { size: "Medium", material: "Wood" },
    "chair": { size: "Medium", material: "Wood" },
    "bench": { size: "Medium", material: "Wood" },
    "door": { size: "Large", material: "Wood" },
    "window": { size: "Medium", material: "Glass" },
    "barrel": { size: "Medium", material: "Wood" },
    "crate": { size: "Medium", material: "Wood" },
    "wagon": { size: "Large", material: "Wood" },
    "signpost": { size: "Medium", material: "Wood" },
    "streetlamp": { size: "Medium", material: "Iron" },
    "fountain": { size: "Large", material: "Stone" },
    "statue": { size: "Large", material: "Stone" },
    "market_stall": { size: "Large", material: "Wood" },
    "well": { size: "Large", material: "Stone" },
    "chimney": { size: "Medium", material: "Stone" },
    "roof": { size: "Large", material: "Wood" },
    "shutter": { size: "Small", material: "Wood" },
    "fence": { size: "Medium", material: "Wood" },
    "gate": { size: "Large", material: "Wood" },
    "cobblestone": { size: "Tiny", material: "Stone" },
    "rain_barrel": { size: "Medium", material: "Wood" },
    "weathervane": { size: "Small", material: "Iron" },

    // Tavern/Inn Items
    "mug": { size: "Tiny", material: "Wood" },
    "plate": { size: "Tiny", material: "Wood" },
    "bottle": { size: "Tiny", material: "Glass" },
    "tankard": { size: "Tiny", material: "Wood" },
    "keg": { size: "Medium", material: "Wood" },
    "chandelier": { size: "Medium", material: "Iron" },
    "fireplace": { size: "Large", material: "Stone" },
    "bed": { size: "Large", material: "Wood" },
    "stool": { size: "Small", material: "Wood" },
    "candle": { size: "Tiny", material: "Wax" },
    "lantern": { size: "Tiny", material: "Iron" },
    "tablecloth": { size: "Medium", material: "Cloth" },
    "menu": { size: "Tiny", material: "Parchment" },
    "dartboard": { size: "Small", material: "Wood" },
    "bar": { size: "Large", material: "Wood" },
    "wine_rack": { size: "Medium", material: "Wood" },
    "spittoon": { size: "Small", material: "Brass" },

    // Dungeon Items
    "torch_holder": { size: "Small", material: "Iron" },
    "chain": { size: "Medium", material: "Iron" },
    "portcullis": { size: "Large", material: "Iron" },
    "chest": { size: "Medium", material: "Wood" },
    "coffin": { size: "Large", material: "Wood" },
    "sarcophagus": { size: "Large", material: "Stone" },
    "altar": { size: "Large", material: "Stone" },
    "pillar": { size: "Large", material: "Stone" },
    "pedestal": { size: "Medium", material: "Stone" },
    "brazier": { size: "Medium", material: "Iron" },
    "cauldron": { size: "Medium", material: "Iron" },
    "iron_maiden": { size: "Large", material: "Iron" },
    "rack": { size: "Large", material: "Wood" },
    "stocks": { size: "Medium", material: "Wood" },
    "oubliette": { size: "Large", material: "Stone" },
    "gargoyle": { size: "Medium", material: "Stone" },
    "spike_trap": { size: "Medium", material: "Iron" },
    "pit": { size: "Large", material: "Stone" },
    "secret_door": { size: "Large", material: "Stone" },

    // Wilderness Items
    "tree": { size: "Large", material: "Wood" },
    "boulder": { size: "Large", material: "Stone" },
    "log": { size: "Medium", material: "Wood" },
    "campfire": { size: "Small", material: "Wood" },
    "tent": { size: "Medium", material: "Cloth" },
    "cart": { size: "Large", material: "Wood" },
    "bush": { size: "Medium", material: "Wood" },
    "rock": { size: "Medium", material: "Stone" },
    "stream": { size: "Large", material: "Water" },
    "fallen_tree": { size: "Large", material: "Wood" },
    "cave_entrance": { size: "Large", material: "Stone" },
    "vine": { size: "Medium", material: "Plant" },
    "mushroom": { size: "Tiny", material: "Plant" },
    "beehive": { size: "Small", material: "Wood" },

    // Castle/Keep Items
    "throne": { size: "Large", material: "Wood" },
    "tapestry": { size: "Large", material: "Cloth" },
    "suit_of_armor": { size: "Medium", material: "Steel" },
    "shield": { size: "Medium", material: "Wood" },
    "banner": { size: "Medium", material: "Cloth" },
    "candelabra": { size: "Medium", material: "Iron" },
    "drawbridge": { size: "Large", material: "Wood" },
    "arrow_slit": { size: "Small", material: "Stone" },
    "battlement": { size: "Large", material: "Stone" },
    "catapult": { size: "Large", material: "Wood" },
    "portcullis": { size: "Large", material: "Iron" },
    "moat": { size: "Large", material: "Water" },
    "coat_of_arms": { size: "Medium", material: "Wood" },

    // Common Items
    "book": { size: "Tiny", material: "Leather" },
    "scroll": { size: "Tiny", material: "Parchment" },
    "mirror": { size: "Small", material: "Glass" },
    "rug": { size: "Large", material: "Cloth" },
    "painting": { size: "Medium", material: "Wood" },
    "vase": { size: "Small", material: "Ceramic" },
    "chest_of_drawers": { size: "Large", material: "Wood" },
    "wardrobe": { size: "Large", material: "Wood" },
    "bookshelf": { size: "Large", material: "Wood" },
    "quill": { size: "Tiny", material: "Feather" },
    "inkwell": { size: "Tiny", material: "Glass" },
    "hourglass": { size: "Small", material: "Glass" },
    "globe": { size: "Medium", material: "Wood" },
    "abacus": { size: "Small", material: "Wood" },
    "telescope": { size: "Medium", material: "Brass" },

    // Miscellaneous
    "ladder": { size: "Large", material: "Wood" },
    "anvil": { size: "Medium", material: "Iron" },
    "forge": { size: "Large", material: "Stone" },
    "fishing_rod": { size: "Medium", material: "Wood" },
    "loom": { size: "Large", material: "Wood" },
    "spinning_wheel": { size: "Medium", material: "Wood" },
    "plow": { size: "Large", material: "Wood" },
    "millstone": { size: "Large", material: "Stone" },
    "gallows": { size: "Large", material: "Wood" },
    "trebuchet": { size: "Large", material: "Wood" },
    "ballista": { size: "Large", material: "Wood" },
    "sundial": { size: "Medium", material: "Stone" },
    "scarecrow": { size: "Medium", material: "Cloth" },
    "beehive": { size: "Medium", material: "Wood" },
    "birdcage": { size: "Small", material: "Iron" },
    "wagon_wheel": { size: "Medium", material: "Wood" },
    "gravestone": { size: "Medium", material: "Stone" },
    "guillotine": { size: "Large", material: "Wood" },

    // Magical Items (treat as normal objects for gameplay purposes)
    "crystal_ball": { size: "Tiny", material: "Glass" },
    "magic_mirror": { size: "Medium", material: "Glass" },
    "enchanted_statue": { size: "Medium", material: "Stone" },
    "alchemy_table": { size: "Large", material: "Wood" },
    "spellbook": { size: "Small", material: "Leather" },
    "magical_orb": { size: "Tiny", material: "Glass" },
    "rune_stone": { size: "Small", material: "Stone" },
    "enchanted_weapon_rack": { size: "Medium", material: "Wood" },
    "potion_shelf": { size: "Medium", material: "Wood" },
    "arcane_circle": { size: "Large", material: "Stone" },
    "summoning_portal": { size: "Large", material: "Stone" },
    "enchanted_loom": { size: "Large", material: "Wood" },
    "scrying_pool": { size: "Medium", material: "Stone" },

    // Additional Items
    "lectern": { size: "Medium", material: "Wood" },
    "pulpit": { size: "Large", material: "Wood" },
    "pew": { size: "Large", material: "Wood" },
    "confessional": { size: "Large", material: "Wood" },
    "sundial": { size: "Medium", material: "Stone" },
    "weathervane": { size: "Small", material: "Iron" },
    "bell": { size: "Medium", material: "Bronze" },
    "clocktower": { size: "Large", material: "Stone" },
    "battering_ram": { size: "Large", material: "Wood" },
    "siege_tower": { size: "Large", material: "Wood" },
    "catapult": { size: "Large", material: "Wood" },
    "ballista": { size: "Large", material: "Wood" },
    "pillory": { size: "Medium", material: "Wood" },
    "gibbet": { size: "Medium", material: "Iron" },
    "rack": { size: "Large", material: "Wood" },
    "iron_maiden": { size: "Large", material: "Iron" },
    "thumbscrew": { size: "Tiny", material: "Iron" },
    "branding_iron": { size: "Small", material: "Iron" },
    "ducking_stool": { size: "Large", material: "Wood" },
    "whipping_post": { size: "Medium", material: "Wood" },
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

function calculateObject() {
    const input = document.getElementById("objectInput").value.toLowerCase();
    const words = input.split(" ");
    
    let objectName = words[words.length - 1];
    let modifiers = words.slice(0, -1);
    
    if (!objectDatabase[objectName]) {
        document.getElementById("result").innerHTML = "Object not found in database.";
        return;
    }
    
    let object = {...objectDatabase[objectName]};
    
    // Apply modifiers
    modifiers.forEach(modifier => {
        if (["tiny", "small", "medium", "large"].includes(modifier)) {
            object.size = modifier.charAt(0).toUpperCase() + modifier.slice(1);
        } else if (Object.keys(materialAC).includes(modifier.charAt(0).toUpperCase() + modifier.slice(1))) {
            object.material = modifier.charAt(0).toUpperCase() + modifier.slice(1);
        }
    });
    
    let resilience = modifiers.includes("resilient") ? "Resilient" : "Fragile";
    
    let ac = materialAC[object.material];
    let hp = hitPoints[object.size][resilience];
    
    document.getElementById("result").innerHTML = `Object: ${objectName}<br>AC: ${ac}<br>Hit Points: ${hp}`;
}
