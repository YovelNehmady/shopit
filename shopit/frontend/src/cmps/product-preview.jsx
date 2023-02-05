import { addToCart } from "../store/cart/cart.action"

export function ProductPreview({ product }) {
    function onAddToCart(product){
        addToCart(product)
    }

    return <section className="product-preview">
        <h3>{product.title}</h3>
        <img src={product.imgUrl} />
        <p>{product.price}</p>
        <button onClick={() => onAddToCart(product)}>Add to cart</button>
    </section>
}