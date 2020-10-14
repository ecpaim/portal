import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Typography } from '@material-ui/core';

import withStyles from '@material-ui/core/styles/withStyles';

import {removeRegistrationBlock} from '../redux/user/userSlice';

const ROWS = ['1','2','3','4','5','6','7','8','9']

 
 const styles = (theme) => ({
    ...theme.general,
    tableContainer:{
        margin:2,
        float: 'left',
        maxWidth:'25%'
    },
    headerTable:{
        width:'33%',
        padding:0,
        backgroundColor: '#cccccc'
    },
    checkbox:{
        margin:0,
        padding:0
    },
    sendButton:{
        margin:10,
        marginBottom:30,
        float:'right'
    },
    description:{
        width: '40%'
    }
   
});

const initialState = {
    tooMany: false
}

const Encomenda = ({username, email, registrationBlocks, removeRegistrationBlock, classes}) => {

    const [state, setState] = React.useState(registrationBlocks.length > 3 ? {tooMany: true} : {tooMany: false});

    const deleteBlock = (number) => {
        console.log(registrationBlocks.length)
        removeRegistrationBlock(number);
        console.log(registrationBlocks.length)
        if(registrationBlocks.length - 1 < 4){
            setState({tooMany:false});
        }
    }

    return(
    <div className={classes.standardPage}>
        
        <Typography variant='h5' color='secondary' paragraph>
            Encomenda de Matrícula
        </Typography>
        <Typography paragraph align='justify' className={classes.description}>
            Abaixo estão os blocos selecionados para a matrícula. Para remover um bloco da encomenda, 
            basta clicar no X ao lado do número do bloco e clicar em "Salvar Encomenda".
            Caso queira adicionar um novo bloco, volte para a aba "Monte seu Bloco" e refaça o processo.
            <ul>
                <li>Apenas um bloco é selecionado</li>
                <li>Blocos com maior número de disciplinas adicionadas têm prioridade</li>
                <li>"Turmas no mesmo horário" inclui professores diferentes</li>
                <li>Clique em "Salvar Encomenda" para confirmar o bloco adicionado</li>
            </ul>

        </Typography>
        
        <TableContainer component={Paper} className={classes.tableContainer}>
           
            <Table arial-label='tabela de blocos' size='small' >
                <caption>
                    <Typography align='center' variant='body2'>Bloco 1 
                    <IconButton aria-label="delete" size="small" onClick={() => deleteBlock(0)}>
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                    </Typography>
                </caption>
                <TableHead>
                    <TableRow>
                        
                        <TableCell align='center' className={classes.headerTable}> Disciplina </TableCell>
                        <TableCell align='center' className={classes.headerTable}>Turma </TableCell>
                        <TableCell align='center' className={classes.headerTable}>Turmas no mesmo horário? </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {registrationBlocks.length > 0 ? 
                       
                           registrationBlocks[0].map(sub => (
                               <TableRow>
                                    <TableCell align='center' > {sub.name.split(' ')[0]} </TableCell>
                                    <TableCell align='center' > {sub.classID.trim().split(' ')[1]} </TableCell>
                                    <TableCell align='center' > <Checkbox className={classes.checkbox} size='small'  />  </TableCell>
                               </TableRow>
                            ))
                    : 
                    ROWS.map(number => (
                        <TableRow>
                                <TableCell align='center' >  </TableCell>
                                <TableCell align='center' >  </TableCell>
                                <TableCell align='center' > <Checkbox className={classes.checkbox} size='small' />  </TableCell>
                        </TableRow>
                    ))
                    }
                </TableBody>

            </Table>
        </TableContainer>
        
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table arial-label='tabela de blocos' size='small' >
                <caption>
                    <Typography align='center' variant='body2'>Bloco 2 
                    <IconButton aria-label="delete" size="small" onClick={() => deleteBlock(0)}>
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                    </Typography>
                </caption>
                <TableHead>
                    <TableRow>
                        
                        <TableCell align='center' className={classes.headerTable}> Disciplina </TableCell>
                        <TableCell align='center' className={classes.headerTable}>Turma </TableCell>
                        <TableCell align='center' className={classes.headerTable}>Turmas no mesmo horário? </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {registrationBlocks.length > 1 ? 
                       
                           registrationBlocks[1].map(sub => (
                               <TableRow>
                                    <TableCell align='center' > {sub.name.split(' ')[0]} </TableCell>
                                    <TableCell align='center' > {sub.classID.trim().split(' ')[1]} </TableCell>
                                    <TableCell align='center' > <Checkbox className={classes.checkbox} size='small'  />  </TableCell>
                               </TableRow>
                            ))
                    : 
                    ROWS.map(number => (
                        <TableRow>
                                <TableCell align='center' >  </TableCell>
                                <TableCell align='center' >  </TableCell>
                                <TableCell align='center' > <Checkbox className={classes.checkbox} size='small' />  </TableCell>
                        </TableRow>
                    ))
                    }
                </TableBody>

            </Table>
        </TableContainer>

        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table arial-label='tabela de blocos' size='small' >
                <caption>
                    <Typography align='center' variant='body2'>Bloco 3 
                    <IconButton aria-label="delete" size="small" onClick={() => deleteBlock(0)}>
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                    </Typography>
                </caption>
                <TableHead>
                    <TableRow>
                        
                        <TableCell align='center' className={classes.headerTable}> Disciplina </TableCell>
                        <TableCell align='center' className={classes.headerTable}>Turma </TableCell>
                        <TableCell align='center' className={classes.headerTable}>Turmas no mesmo horário? </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {registrationBlocks.length > 2 ? 
                       
                           registrationBlocks[2].map(sub => (
                               <TableRow>
                                    <TableCell align='center' > {sub.name.split(' ')[0]} </TableCell>
                                    <TableCell align='center' > {sub.classID.trim().split(' ')[1]} </TableCell>
                                    <TableCell align='center' > <Checkbox className={classes.checkbox} size='small'  />  </TableCell>
                               </TableRow>
                            ))
                    : 
                    ROWS.map(number => (
                        <TableRow>
                                <TableCell align='center' >  </TableCell>
                                <TableCell align='center' >  </TableCell>
                                <TableCell align='center' > <Checkbox className={classes.checkbox} size='small' />  </TableCell>
                        </TableRow>
                    ))
                    }
                </TableBody>

            </Table>
            
        </TableContainer>
            <div style={{width:'75%'}}>
            <Button variant="contained" color="secondary" size='small' className={classes.sendButton} >
                <Typography>Salvar Encomenda</Typography>
            </Button>
            </div>
            {state.tooMany ? <Typography color='error'>Já existem três blocos adicionados! Exclua um para adicionar outro.</Typography> : null}
        
    </div>
  );
}

Encomenda.propTypes = {
    classes: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    registrationBlocks: PropTypes.array.isRequired,
    removeRegistrationBlock: PropTypes.func.isRequired
}
  
// if we put a function call here we HAVE to use CreateSelector, otherwise we will
// recall it every time an action is dispatched even if no argument has changed
const mapStateToProps = state => ({
    username: state.user.username,
    email: state.user.email,
    registrationBlocks: state.user.registrationBlocks
})

const mapActionsToProps = {removeRegistrationBlock};

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Encomenda));