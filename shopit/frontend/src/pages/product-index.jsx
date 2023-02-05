import { useEffect } from "react"
import { useSelector } from "react-redux"
import { loadProducts } from "../store/product/product.action"
import { ProductList } from "../cmps/product-list"

export function ProductIndex() {
    let products = useSelector((storeState) => storeState.productModule.products)

    useEffect(() => {
        loadProducts()
    }, [])

    return <section className="product-index">
        <ProductList products={products} />
    </section>
}