import { Product } from "../../../domain/product/product";

export interface IProductRepository {
    create(product: Product): Promise<Product>;
}