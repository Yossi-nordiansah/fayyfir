// Import images for data
import coconutImg from '../images/coconut-1.jpg';
import charcoalImg from '../images/charcoal.jpg'; 
import spicesImg from '../images/spices.jpg';
import palmOilImg from '../images/palm-oil.jpg';
import hero1 from '../images/hero1.jpg';
import hero2 from '../images/hero2.jpg';
import hero3 from '../images/hero3.jpg';
import cocoaImg from '../images/coconut-1.jpg';
import rawCosmeticImg from '../images/raw-cosmetic.jpg';
import coffeeImg from '../images/coffe-been.jpg';
import handicraftImg from '../images/Handicraft.jpg';
import gaharuImg from '../images/Gaharu.jpg';

export const productsData = {
    "coconut-derivates-products": {
        slug: "coconut-derivates-products",
        title: "Coconut Derivates Products",
        banner: coconutImg,
        description: "Harnessing the versatility of Indonesia's coconuts to provide high-quality derivative products for global industries.",
        subProducts: [
            {
                slug: "desiccated-coconut",
                name: "Desiccated Coconut",
                description: "Produced from freshly harvested mature coconuts, our desiccated coconut is known for its pure white color and rich flavor. Ideal for confectionery, bakery, and food industries.",
                details: ["Fine & Medium Grades", "Low & High Fat Options", "SO2 Free Available", "Grade A Quality"],
                images: [coconutImg, hero1, hero2]
            },
            {
                slug: "coconut-oil",
                name: "Coconut Oil",
                description: "Extracted from premium copra, our coconut oil is highly processed to maintain its purity and natural health benefits.",
                details: ["RBD Coconut Oil", "Virgin Coconut Oil", "Food Grade Certification"],
                images: [palmOilImg, hero3, coconutImg]
            }
        ]
    },

    "charcoal-briquette": {
        slug: "charcoal-briquette",
        title: "Charcoal Briquette",
        banner: charcoalImg,
        description: "High-calorie, long-lasting coconut shell charcoal briquettes for premium hookah and barbecue experiences.",
        subProducts: [
            {
                slug: "coconut-shell-briquettes",
                name: "Coconut Shell Briquettes",
                description: "Made from 100% natural coconut shell, our briquettes offer high heat, low ash content, and no odor.",
                details: ["Low Ash < 2.5%", "High Calorie > 7500", "Long Burn Time", "No Odor/Spark"],
                images: [charcoalImg, hero1, hero2]
            }
        ]
    },

    "spices": {
        slug: "spices",
        title: "Spices",
        banner: spicesImg,
        description: "Authentic Indonesian spices sourced directly from local farmers.",
        subProducts: [
            {
                slug: "whole-clove",
                name: "Whole Clove",
                description: "Selected high-quality cloves with rich aroma and high essential oil content.",
                details: ["Lal Pari Quality", "Moisture < 12%", "Stems < 1%", "No Dust"],
                images: [spicesImg, hero1, hero2]
            },
            {
                slug: "black-pepper",
                name: "Black Pepper",
                description: "Premium Indonesian black pepper with strong aroma and bold flavor.",
                details: ["High Piperine Content", "Sun Dried", "Export Quality"],
                images: [spicesImg, hero2, hero3]
            }
        ]
    },

    "palm-cooking-oil": {
        slug: "palm-cooking-oil",
        title: "Palm Cooking Oil",
        banner: palmOilImg,
        description: "Premium refined palm cooking oil processed with international standards.",
        subProducts: [
            {
                slug: "refined-palm-oil",
                name: "Refined Palm Oil",
                description: "High-quality palm cooking oil with excellent clarity and stability.",
                details: ["RBD Palm Olein", "Food Grade", "Clear & Stable Quality"],
                images: [palmOilImg, hero1, hero2]
            },
            {
                slug: "bulk-palm-oil",
                name: "Bulk Palm Oil",
                description: "Available for industrial and wholesale needs.",
                details: ["Bulk Supply", "Export Packaging", "Industrial Grade"],
                images: [palmOilImg, hero2, hero3]
            }
        ]
    },

    "cocoa-powder": {
        slug: "cocoa-powder",
        title: "Cocoa Powder",
        banner: cocoaImg,
        description: "Premium Indonesian cocoa products with rich flavor and aroma.",
        subProducts: [
            {
                slug: "natural-cocoa-powder",
                name: "Natural Cocoa Powder",
                description: "Finely processed cocoa powder suitable for beverages and bakery.",
                details: ["Rich Chocolate Flavor", "Fine Texture", "Food Industry Grade"],
                images: [cocoaImg, hero1, hero2]
            },
            {
                slug: "alkalized-cocoa-powder",
                name: "Alkalized Cocoa Powder",
                description: "Dark-colored cocoa powder with smoother taste.",
                details: ["Dark Brown Color", "Smooth Flavor", "High Solubility"],
                images: [cocoaImg, hero2, hero3]
            }
        ]
    },

    "raw-cosmetic": {
        slug: "raw-cosmetic",
        title: "Raw Cosmetic",
        banner: rawCosmeticImg,
        description: "Natural cosmetic raw materials for skincare and beauty industries.",
        subProducts: [
            {
                slug: "natural-essential-oils",
                name: "Natural Essential Oils",
                description: "Pure essential oils extracted from selected Indonesian plants.",
                details: ["100% Natural", "Steam Distilled", "Cosmetic Grade"],
                images: [rawCosmeticImg, hero1, hero2]
            },
            {
                slug: "natural-butter-extracts",
                name: "Natural Butter & Extracts",
                description: "Premium cosmetic ingredients for skincare products.",
                details: ["Skin Safe", "Moisturizing Properties", "Export Ready"],
                images: [rawCosmeticImg, hero2, hero3]
            }
        ]
    },

    "coffee-bean": {
        slug: "coffee-bean",
        title: "Coffee Bean",
        banner: coffeeImg,
        description: "Specialty Indonesian coffee beans harvested from volcanic regions.",
        subProducts: [
            {
                slug: "arabica-coffee-beans",
                name: "Arabica Coffee Beans",
                description: "High-quality Arabica beans with balanced acidity.",
                details: ["Specialty Grade", "Hand Picked", "Rich Aroma"],
                images: [coffeeImg, hero1, hero2]
            },
            {
                slug: "robusta-coffee-beans",
                name: "Robusta Coffee Beans",
                description: "Strong-bodied Robusta beans ideal for espresso blends.",
                details: ["Bold Flavor", "High Caffeine", "Export Quality"],
                images: [coffeeImg, hero2, hero3]
            }
        ]
    },

    "handicraft": {
        slug: "handicraft",
        title: "Handicraft",
        banner: handicraftImg,
        description: "Handmade Indonesian handicrafts showcasing local artistry.",
        subProducts: [
            {
                slug: "rattan-handicraft",
                name: "Rattan Handicraft",
                description: "Eco-friendly handmade rattan products.",
                details: ["Handmade", "Eco-Friendly", "Export Ready"],
                images: [handicraftImg, hero1, hero2]
            },
            {
                slug: "wooden-craft",
                name: "Wooden Craft",
                description: "Traditional wooden crafts with authentic Indonesian design.",
                details: ["Natural Wood", "Artisan Crafted", "Decorative & Functional"],
                images: [handicraftImg, hero2, hero3]
            }
        ]
    },

    "agarwood-dehn-oud": {
        slug: "agarwood-dehn-oud",
        title: "Agarwood & Dehn Oud",
        banner: gaharuImg,
        description: "Premium agarwood and oud products with luxurious fragrance.",
        subProducts: [
            {
                slug: "agarwood-chips",
                name: "Agarwood Chips",
                description: "High-grade agarwood chips with deep aromatic scent.",
                details: ["Natural Aroma", "Premium Grade", "Long Lasting Fragrance"],
                images: [gaharuImg, hero1, hero2]
            },
            {
                slug: "dehn-oud-oil",
                name: "Dehn Oud Oil",
                description: "Pure oud oil extracted from selected agarwood.",
                details: ["Pure Oud Oil", "Luxury Fragrance", "High Concentration"],
                images: [gaharuImg, hero2, hero3]
            }
        ]
    }
};

export const defaultData = {
    slug: "default",
    banner: hero1,
    description: "Explore our collection of premium quality natural resources sourced from the richest islands of Indonesia.",
    subProducts: [
        {
            slug: "premium-selection",
            name: "Premium Selection",
            description: "Our selected product range is maintained with the highest standards of quality and sustainability.",
            details: ["Premium Quality", "Export Ready", "Sustainably Sourced"],
            images: [hero1, hero2, hero3]
        }
    ]
};