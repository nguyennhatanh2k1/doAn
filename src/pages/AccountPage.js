import Sidebar from '../components/common/sidebar';
import AccountContainer from '../containers/AccountContainer'

export default function AccountPage() {
    return (
        <div className="HomePage">
            <Sidebar />
            <div className="main">
                <AccountContainer />
            </div>

        </div>
    )
}
