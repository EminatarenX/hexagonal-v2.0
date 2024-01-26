import { Product } from "./product";

export interface IProductRepository {
    save(product: Product): Promise<Product>;
    update(product: Product): Promise<Product>;
    findById(id: string): Promise<Product>;
    findAll(): Promise<Product[]>;
    delete(id: string): Promise<void>;
}

