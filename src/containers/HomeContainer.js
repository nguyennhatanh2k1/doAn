import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import * as HomeAction from '../actions/HomeAction';
import HomeComponent from '../components/home/HomeComponent';

function HomeContainer(props) {
    useEffect(() => {
        // props.getHome()
    }, []);
    return (
        <HomeComponent {...props} />
    )

}
const mapStateToProps = (state) => {
    // console.log("home state ", state);
    return {
        // data: state.HomeReducer.listHome
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // getHome: (data) => { dispatch(HomeAction.getHomeRequest(data)) },
        // AddHome: (data) => {
        //     // console.log(data,"data tại containerrrr");
        //     dispatch(HomeAction.addHomeRequest(data))
        // },
        // DeleteHome: (data) => {
        //     // console.log(data,"data tại containerrrr");
        //     dispatch(HomeAction.deleteHomeRequest(data))
        // },
        // UpdateHome: (data) => {
        //     // console.log(data,"úp date data tại containerrrr");
        //     dispatch(HomeAction.updateHomeRequest(data))
        // },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)