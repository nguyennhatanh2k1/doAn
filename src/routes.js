import React from 'react';
import { Route, Switch, Router, Redirect,useHistory } from 'react-router-dom';
import * as page from './pages';
import HomePage from './pages/HomePage';
import history from './history'

// import * as pages from './components'


const Routes = () => {
  const token = localStorage.getItem('token');
  const roles = localStorage.getItem('role');
  return (
    <div className="content">
      <Router history={history}>
        {token && roles === 'Admin' ?history.push('/home') : history.push('/')}
        <Switch>
          <Route exact path="/" component={page.LoginPage} />
          <Route path="/register" component={page.RegisterPage} />
          <Route path="/home" component={page.HomePage} />
          <Route path="/product" component={page.ProductPage} />
          <Route path="/category" component={page.CategoryPage} />
          <Route path="/brand" component={page.BrandPage} />
          <Route path="/color" component={page.ColorPage} />
          <Route path="/order" component={page.OrderPage} />
          <Route path="/employee" component={page.EmployeePage} />
          <Route path="/account" component={page.AccountPage} />
        </Switch>
      </Router>
    </div>
  )

}

export default Routes;
