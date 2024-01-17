import Sidebar from '../components/common/sidebar';
import EmployeeContainer from '../containers/EmployeeContainer';

export default function EmployeePage() {
    return (
        <div className="HomePage">
            <Sidebar />
            <div className="main">
                <EmployeeContainer/>
            </div>
        </div>
    )
}

