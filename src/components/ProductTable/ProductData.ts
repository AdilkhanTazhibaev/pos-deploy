export interface ProductData {
    parentId: number
    categories: string
    price: number
    name: string
}




export let data:ProductData[] = [
    {
        parentId: 1,
        categories: 'Ноутбуки',
        price: 3000,
        name: "Asus"
    },
    {
        parentId: 2,
        categories: 'Ноутбуки',
        price: 3000,
        name: "HP"
    },
    {
        parentId: 1,
        categories: 'Ноутбуки',
        price: 5000,
        name: "Lenovo"
    },
    {
        parentId: 1,
        categories: 'Ноутбуки',
        price: 3000,
        name: "Aser"
    },
]