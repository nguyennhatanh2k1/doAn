import Sidebar from '../components/common/sidebar';
import BrandContainer from '../containers/BrandContainer';

export default function BrandPage() {
    return (
        <div className="HomePage">
            <Sidebar />
            <div className="main">
                <BrandContainer />
            </div>

        </div>
    )
}
