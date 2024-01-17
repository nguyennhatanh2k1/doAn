import Sidebar from '../components/common/sidebar';
import CategoryContainer from '../containers/CategoryContainer';

export default function CategoryPage() {
    return (
        <div className="HomePage">
            <Sidebar/>
            <div className="main">
                <CategoryContainer />
            </div>
        </div>
    )
}

