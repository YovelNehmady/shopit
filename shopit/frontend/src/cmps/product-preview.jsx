export function ProductPreview({ product }) {

    return <section className="product-preview">
        <h3>{product.title}</h3>
        <img src={product.imgUrl} />
        <p>{product.price}</p>
        <button>Add to cart</button>
    </section>
}