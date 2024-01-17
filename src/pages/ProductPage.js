import Sidebar from '../components/common/sidebar';
import ProductContainer from '../containers/ProductContainer'

export default function ProductPage() {
    return (
        <div className="HomePage">
            <Sidebar />
            <div className="main">
                <ProductContainer />
            </div>

        </div>
    )
}
