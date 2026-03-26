import { useParams } from "react-router-dom"

const ProudctInfo = () => {
    const {id} = useParams();

    return (
        <section className="product-info">
            <h1>상품 정보</h1>
            <p>상품 ID: {id}</p>
        </section>
    )
}

export default ProudctInfo