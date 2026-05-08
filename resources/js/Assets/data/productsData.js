// Import images for data
import coconutImg from '../images/coconut-1.jpg';
import charcoalImg from '../images/charcoal.jpg';
import spicesImg from '../images/spices.jpg';
import palmOilImg from '../images/palm-oil.jpg';
import hero1 from '../images/hero1.jpg';
import hero2 from '../images/hero2.jpg';
import hero3 from '../images/hero3.jpg';

export const productsData = {
    "Coconut Derivates Products": {
        banner: coconutImg,
        description: "Harnessing the versatility of Indonesia's coconuts to provide high-quality derivative products for global industries.",
        subProducts: [
            {
                name: "Desiccated Coconut",
                description: "Produced from freshly harvested mature coconuts, our desiccated coconut is known for its pure white color and rich flavor. Ideal for confectionery, bakery, and food industries.",
                details: ["Fine & Medium Grades", "Low & High Fat Options", "SO2 Free Available", "Grade A Quality"],
                images: [coconutImg, hero1, hero2]
            },
            {
                name: "Coconut Oil",
                description: "Extracted from premium copra, our coconut oil is highly processed to maintain its purity and natural health benefits.",
                details: ["RBD Coconut Oil", "Virgin Coconut Oil", "Food Grade Certification"],
                images: [palmOilImg, hero3, coconutImg]
            }
        ]
    },
    "Charcoal Briquette": {
        banner: charcoalImg,
        description: "High-calorie, long-lasting coconut shell charcoal briquettes for premium hookah and barbecue experiences.",
        subProducts: [
            {
                name: "Coconut Shell Briquettes",
                description: "Made from 100% natural coconut shell, our briquettes offer high heat, low ash content, and no odor. The preferred choice for shisha enthusiasts globally.",
                details: ["Low Ash < 2.5%", "High Calorie > 7500", "Long Burn Time", "No Odor/Spark"],
                images: [charcoalImg, hero1, hero2]
            }
        ]
    },
    "Spices": {
        banner: spicesImg,
        description: "Authentic Indonesian spices sourced directly from local farmers to bring the true flavors of the archipelago to your table.",
        subProducts: [
            {
                name: "Whole Clove",
                description: "Selected high-quality cloves with rich aroma and high essential oil content.",
                details: ["Lal Pari Quality", "Moisture < 12%", "Stems < 1%", "No Dust"],
                images: [spicesImg, hero1, hero2]
            }
        ]
    }
};

export const defaultData = {
    banner: hero1,
    description: "Explore our collection of premium quality natural resources sourced from the richest islands of Indonesia.",
    subProducts: [
        {
            name: "Premium Selection",
            description: "Our selected product range is maintained with the highest standards of quality and sustainability.",
            details: ["Premium Quality", "Export Ready", "Sustainably Sourced"],
            images: [hero1, hero2, hero3]
        }
    ]
};
