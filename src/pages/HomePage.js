import Sidebar from '../components/common/sidebar';
import HomeContainer from '../containers/HomeContainer';

export default function HomePage() {
    return (
        <div className="HomePage">
            <Sidebar />
            <div className="main" >
            <HomeContainer/>
            </div>
        </div>
    )
}