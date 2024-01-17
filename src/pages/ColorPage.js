import Sidebar from '../components/common/sidebar';
import ColorContainer from '../containers/ColorContainer';


export default function ColorPage() {
    return (
        <div className="HomePage">
            <Sidebar />
            <div className="main">
                <ColorContainer />
            </div>

        </div>
    )
}
