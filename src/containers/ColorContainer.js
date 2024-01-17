import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as ColorAction from '../actions/ColorAction';
import ColorComponent from '../components/color/ColorComponent';

function ColorContainer(props) {
    useEffect(() => {
        props.getColor()
    }, []);
    return (
        <ColorComponent {...props} />
    )

}
const mapStateToProps = (state) => {
    // console.log("color state ", state);
    return {
        data: state.ColorReducer.listColor
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getColor: (data) => { dispatch(ColorAction.getColorRequest(data)) },
        AddColor: (data) => {
            // console.log(data,"data tại containerrrr");
            dispatch(ColorAction.addColorRequest(data))
        },
        DeleteColor: (data) => {
            // console.log(data,"data tại containerrrr");
            dispatch(ColorAction.deleteColorRequest(data))
        },
        UpdateColor: (data) => {
            // console.log(data,"úp date data tại containerrrr");
            dispatch(ColorAction.updateColorRequest(data))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorContainer)