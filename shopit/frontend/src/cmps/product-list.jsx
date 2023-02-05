import { ProductPreview } from "./product-preview";

export function ProductList({ products }) {

    return <section className="product-list">
        {products.map(product =>
            <ProductPreview key={product._id} product={product} />
        )}
        
    </section>
}
