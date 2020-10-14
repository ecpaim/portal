import React from 'react';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import withStyles from '@material-ui/core/styles/withStyles';

import { Typography } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import PrintIcon from '@material-ui/icons/Print';

import allData from '../util/convertjson.json';

 //takes theme defined in theme.js
 const styles = (theme) => ({
    ...theme.general,
    description:{
        width:'40%'
    },
    root: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
     },
     table:{
         border: '1px solid',
         borderColor: '#b3b3b3'
     }
});

const Possibilidade = ({username,email, classes}) => {
    return(
    <div className={classes.standardPage}>
        
        <Typography variant='h5' color='secondary' paragraph >
            Possibilidade de Matrícula
        </Typography>
        <Typography paragraph align='justify' className={classes.description}>
            Abaixo estão todas as disciplinas disponíveis para alunos de graduação em 2020/1.

        </Typography>
        <TableContainer component={Paper} className={classes.table}>
            <Table aria-label='tabela de possibilidade de matrícula' size='small'>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Disciplina</TableCell>
                        <TableCell align="center">Créditos</TableCell>
                        <TableCell align="center">Turmas</TableCell>
                        <TableCell align="center">Oferecidas <br/> Veteranos</TableCell>
                        <TableCell align="center">Oferecidas <br/> Calouros</TableCell>
                        <TableCell align="center">Horários - Locais - Observações</TableCell>
                        <TableCell align="center">Professores</TableCell>
                        <TableCell align="center">Plano de Ensino</TableCell>
                    </TableRow>
                </TableHead>
                {allData !== null ? allData.map(row => (
                    <TableRow classes={{root:classes.root}}>
                        <TableCell align="center" style={{minWidth: 250}} ><Typography variant='caption'>{row["Atividades de Ensino"]}</Typography></TableCell>
                        <TableCell align="center"><Typography variant='caption'>{row["Créditos"]}</Typography></TableCell>
                        <TableCell align="center"><Typography variant='caption'>{row["Turmas"]}</Typography></TableCell>
                        <TableCell align="center"><Typography variant='caption'>{row["Oferecidas Veteranos"]}</Typography></TableCell>
                        <TableCell align="center"><Typography variant='caption'>{row["Oferecidas Calouros"]}</Typography></TableCell>
                        <TableCell align="center"><Typography variant='caption'>{row["Horários - Locais - Observações"]}</Typography></TableCell>
                        <TableCell align="center"><Typography variant='caption'>{row["Professores"]}</Typography></TableCell>
                        <TableCell align="center">
                            <Typography variant='caption'>
                                <IconButton aria-label="imprimir plano de ensino" size="small">
                                    <PrintIcon fontSize="inherit" />
                                </IconButton>
                            </Typography>
                        </TableCell>
                    </TableRow>
                ))
                : null}
            </Table>
        </TableContainer>

    </div>
  );

}

Possibilidade.propTypes = {
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

export default connect(mapStateToProps)(withStyles(styles)(Possibilidade));