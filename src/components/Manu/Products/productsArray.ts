export type Product = {
    id: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}

const productsArray: Product[] = [
    {
        id: 1,
        name: 'iPhone XS',
        description: 'This is iPhone XS',
        type: 'phone',
        capacity: 128,
        price: 700,
        image: "/images/iphone-black.jpg",
    },
    {
        id:2,
        name: 'iPhone X',
        description: 'This is iPhone X',
        type: 'phone',
        capacity: 128,
        price: 600,
        image: "/images/iphone-gold.jpg",
    },
    {
        id:3,
        name: 'iPhone 12',
        description: 'This is iPhone 12',
        type: 'phone',
        capacity: 64,
        price: 750,
        image: "/images/iphone-green.jpg",
    },
    {
        id:4,
        name: 'iPhone 13',
        description: 'This is iPhone 13',
        type: 'phone',
        capacity: 128,
        price: 950,
        image: "/images/iphone-blue.jpg",
    },
    {
        id:5,
        name: 'iPhone 11 pro',
        description: 'This is iPhone 11 pro',
        type: 'phone',
        capacity: 256,
        price: 1100,
        image: "/images/iphone-white.jpg",
    },
    {
        id:6,
        name: 'iPhone 8',
        description: 'This is iPhone 8',
        type: 'phone',
        capacity: 64,
        price: 600,
        image: "/images/iphone-red.jpg",
    },
]

export default productsArray

export const getProductsObject = (array: Product[]) => {
    return array.reduce((object, product) => ({
        ...object,
        [product.id]: product,
    }), {})
}