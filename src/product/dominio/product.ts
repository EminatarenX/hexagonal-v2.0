export class Product {
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public stock: number,
        public id?: string,
        public createdAt?: Date,
        public updatedAt?: Date,
    ){}

    update(name: string, description: string, price: number, stock: number) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }
    
}