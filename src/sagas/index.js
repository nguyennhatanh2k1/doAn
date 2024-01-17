import { all } from 'redux-saga/effects';
import { ACCOUNT_SAGA } from './AccountSaga';
import { BRAND_SAGA } from './BrandSaga';
import { CATEGORY_SAGA } from './CategorySaga'
import { COLOR_SAGA } from './ColorSaga';
import { EMPLOYEE_SAGA } from './EmployeeSaga'
import { ORDER_SAGA  } from './OrderSaga'
import { PRODUCT_SAGA } from './ProductSaga'
import { REGISTER_SAGA } from './RegisterSaga'
import { SIZE_SAGA } from './SizeSaga'
import { EMPLOYEE_STATUS_SAGA } from './EmployeeStatusSaga'


import { LOGIN_SAGA } from './LoginSaga'



export default function* rootSaga() {
  yield all([
    ...ACCOUNT_SAGA,
    ...BRAND_SAGA,
    ...CATEGORY_SAGA,
    ...COLOR_SAGA,
    ...EMPLOYEE_SAGA,
    ...ORDER_SAGA,
    ...PRODUCT_SAGA,
    ...REGISTER_SAGA,
    ...SIZE_SAGA,
    ...EMPLOYEE_STATUS_SAGA,
    ...LOGIN_SAGA,
  ]);
}