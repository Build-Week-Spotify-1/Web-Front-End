import React, {useState} from 'react'
import { connect } from "react-redux";
import { fetchUser } from "../actions/FetchUserAction";

function EditProfile(props) {
    console.log('edit profile', props);
    const [user, setUser]= useState({})
    return (
        <div>
            EDIT PROFILE
        </div>
    )
}

const mapStateToProps = state => {
    return state;
  };
  
  export default connect(mapStateToProps, { fetchUser })(EditProfile);