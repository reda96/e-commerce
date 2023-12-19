export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  images: string[];

  creationAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
}
export const productInstance:Product = {
    "id": 26,
    "title": "Generic Metal Salad",
    "price": 652,
    "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    images:[],
    "image":
        "https://i.imgur.com/m2owtQG.jpeg",
        
    "creationAt": "2023-12-17T07:24:22.000Z",
    "updatedAt": "2023-12-17T07:24:22.000Z",
    "category": {
        "id": 2,
        "name": "Electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2023-12-17T07:24:22.000Z",
        "updatedAt": "2023-12-17T07:24:22.000Z"
    }
}