import React from 'react';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

 //takes theme defined in theme.js
 const styles = (theme) => ({
    ...theme.general,
    description:{
        width:'40%'
    }
});

const home = ({username,email, classes}) => {
    return(
    <div className={classes.standardPage}>
        
        <Typography variant='h5' color='secondary' paragraph >
            Portal do aluno
        </Typography>
        <Typography paragraph align='justify' className={classes.description}>
            Você está em um protótipo. Para testar a interface de matrícula, vá para a aba "Matrícula" e selecione "Monte sua Grade".

        Você também pode visualizar informações completas sobre as disciplinas e vagas oferecidas na opção "Possibilidade de Matrícula".
        </Typography>
        <div style={{height:'67vh'}}></div>
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