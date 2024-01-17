import { combineReducers } from 'redux';
import AccountReducer from './AccountReducer';
import BrandReducer from './BrandReducer';
import CategoryReducer from './CategoryReducer';
import ColorReducer from './ColorReducer';
import EmployeeReducer from './EmployeeReducer';
import OrderReducer from './OrderReducer';
import ProductReducer from './ProductReducer';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import SizeReducer from './SizeReducer';
import EmployeeStatusReducer from './EmployeeStatusReducer';




export default combineReducers({
    AccountReducer: AccountReducer,
    BrandReducer: BrandReducer,
    CategoryReducer: CategoryReducer,
    ColorReducer: ColorReducer,
    EmployeeReducer: EmployeeReducer,
    OrderReducer: OrderReducer,
    ProductReducer: ProductReducer,
    RegisterReducer:RegisterReducer,
    LoginReducer:LoginReducer,
    SizeReducer:SizeReducer,
    EmployeeStatusReducer:EmployeeStatusReducer
});