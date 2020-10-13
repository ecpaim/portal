import React from 'react';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import withStyles from '@material-ui/core/styles/withStyles';

 //takes theme defined in theme.js
 const styles = (theme) => ({
    ...theme.general
});

const home = ({username,email, classes}) => {
    return(
    <div className={classes.homePage}>
        
        <p>
            Homepage
        </p>
        <p> 
            username: {username}
            <br/>
            Email: {email}
        </p>
    </div>
  );

}

home.propTypes = {
    classes: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}
  
// if we put a function call here we HAVE to use CreateSelector, otherwise we will
// recall it every time an action is dispatched even if no argument has changed
const mapStateToProps = state => ({
    username: state.user.username,
    email: state.user.email
})

export default connect(mapStateToProps)(withStyles(styles)(home));