import OrderContainer from '../containers/OrderContainer';
import Sidebar from '../components/common/sidebar';

export default function OrderPage() {
    return (
        <div className="HomePage">
            <Sidebar />
            <div className="main">
                <OrderContainer />
            </div>

        </div>
    )
}
