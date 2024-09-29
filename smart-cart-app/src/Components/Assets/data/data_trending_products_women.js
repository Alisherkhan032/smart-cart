import p1_img from '../Trending_women/w_trending_p_1.png';
import p2_img from  '../Trending_women/w_trending_p_2.png';
import p3_img from  '../Trending_women/w_trending_p_3.png';
import p4_img from  '../Trending_women/w_trending_p_4.png';

// creating an array to stort object

let data_object_trending_products = [
    {
        id: 1,
        name: "Stylish Blue jacket",
        description: "This is a description of the product. It is a very good product. You should buy it.",
        image: p1_img,
        old_cost: 750.00,
        new_cost: 680.50
    },
    {
        id: 2,
        name: "Pink Top",
        description: "This is a description of the product. It is a very good product. You should buy it.",
        image: p2_img,
        old_cost: 985.00,
        new_cost: 820.50,
    },
    {
        id: 3,
        name: "Sports Crop Top",
        description: "This is a description of the product. It is a very good product. You should buy it.",
        image: p3_img,
        old_cost: 650.00,
        new_cost: 500.50,
    },
    {
        id: 4,
        name: "Loose Fit Brown Top",
        description: "This is a description of the product. It is a very good product. You should buy it.",
        image: p4_img,
        old_cost: 500.00,
        new_cost: 450.50,
    }
]

export  {data_object_trending_products};