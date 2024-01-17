import React, { useEffect} from 'react';
import { connect } from 'react-redux';

import * as CategoryAction from '../actions/CategoryAction';
import CategoryComponent from "../components/category/CategoryComponent";

function CategoryContainer(props) {
    useEffect(() => {
        props.getCategory()
    }, []);
    return (
        <CategoryComponent {...props} />
    )

}
const mapStateToProps = (state) => {
    // console.log("color state ", state);
    return {
        data: state.CategoryReducer.listCategory
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCategory: (data) => { dispatch(CategoryAction.getCategoryRequest(data)) },
        AddCategory: (data) => {
            // console.log(data,"data tại containerrrr");
            dispatch(CategoryAction.addCategoryRequest(data))
        },
        DeleteCategory: (data) => {
            // console.log(data,"data tại containerrrr");
            dispatch(CategoryAction.deleteCategoryRequest(data))
        },
        UpdateCategory: (data) => {
            // console.log(data,"úp date data tại containerrrr");
            dispatch(CategoryAction.updateCategoryRequest(data))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer)