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
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Typography } from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import withStyles from '@material-ui/core/styles/withStyles';

import {removeRegistrationBlock} from '../redux/user/userSlice';

import TimeMe from 'timeme.js';

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
    tooMany: false,
    saveDialog: false,
    helpDialog: false
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
    const closeSaveDialog = ()=>{
        setState({...state, saveDialog: false});
    }
    const openSaveDialog = ()=>{
        setState({...state, saveDialog:true});
    }
    const closeHelpDialog = ()=>{
        setState({...state, helpDialog: false});
    }
    const openHelpDialog = ()=>{
        setState({...state, helpDialog:true});
    }

    return(
    <div className={classes.standardPage}>
        
        <Typography variant='h5' color='secondary' paragraph>
            Encomenda de Matrícula
        </Typography>
        <Typography paragraph align='justify' className={classes.description}>
            Abaixo estão as grades selecionadas para a matrícula. Para remover uma grade da encomenda, 
            basta clicar no X ao lado do número do grade e clicar em "Salvar Encomenda".
            Caso queira adicionar uma nova grade, volte para a aba "Monte sua Grade" e refaça o processo.
            <ul>
                <li>Apenas uma grade é selecionada</li>
                <li>Grades com maior número de disciplinas adicionadas têm prioridade</li>
                <li>"Turmas no mesmo horário" inclui professores diferentes</li>
                <li>Clique em "Salvar Encomenda" para confirmar as grades adicionadas</li>
            </ul>

        </Typography>
        
        <TableContainer component={Paper} className={classes.tableContainer}>
           
            <Table arial-label='tabela de grades' size='small' >
                <caption>
                    <Typography align='center' variant='body2'>Grade 1 
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
                                    <Tooltip title={<div> {sub.name} <br/> {sub.professor}</div>}>
                                    <TableCell align='center' > {sub.name.split(' ')[0]} </TableCell>
                                    </Tooltip>
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
                    <Typography align='center' variant='body2'>Grade 2 
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
                                    <Tooltip title={<div> {sub.name} <br/> {sub.professor}</div>}>
                                    <TableCell align='center' > {sub.name.split(' ')[0]} </TableCell>
                                    </Tooltip>
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
                    <Typography align='center' variant='body2'>Grade 3 
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
                                    <Tooltip title={<div> {sub.name} <br/> {sub.professor}</div>}>
                                    <TableCell align='center' > {sub.name.split(' ')[0]} </TableCell>
                                    </Tooltip>
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

            <IconButton aria-label="help" style={{marginLeft:5}} onClick={openHelpDialog}>
                        <HelpOutlineIcon fontSize="inherit" />
            </IconButton>

            <Dialog
                open={state.helpDialog}
                onClose={closeHelpDialog}
                aria-labelledby="help-window"
                aria-describedby="help-description"
            >
                <DialogTitle id="help-window">{"O que é uma grade?"}</DialogTitle>
                <DialogContent>
                    
                <DialogContentText id="help-description">
                   <Typography align='justify' color='textPrimary' > Cada grade é um conjunto de disciplinas que você escolheu na página "Monte sua Grade". </Typography>
                   <Typography align='justify' color='textPrimary'> Apenas uma dessas grades é selecionada na matrícula. Caso o aluno não consiga alguma turma selecionada
                       por falta de vagas de acordo com os critérios do ordenamento, será selecionada a grade com maior número de turmas
                        onde o aluno foi efetivamente matriculado. 
                   </Typography>
                   <Typography align='justify' color='textPrimary'>Para aumentar as chances de uma grade ser selecionada, o aluno pode 
                        marcar a opção "Turmas no mesmo horário" para habilitar a inscrição em outras turmas para aquela disciplina, 
                        incluindo turmas com professores diferentes.</Typography>
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={closeHelpDialog} color="secondary" autoFocus>
                    Fechar
                </Button>
                </DialogActions>
            </Dialog>

            <Button variant="contained" color="secondary" size='small' className={classes.sendButton} onClick={openSaveDialog} >
                <Typography>Salvar Encomenda</Typography>
            </Button>
            </div>
            {state.tooMany ? <Typography color='error'> Não foi possível adicionar sua grade na encomenda, pois já existem três grades adicionadas! 
            Exclua uma clicando no X ao lado do número do grade.</Typography> : null}
        

            <Dialog
                open={state.saveDialog}
                onClose={closeSaveDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Salvar encomenda?"}</DialogTitle>
                <DialogContent>
                    
                <DialogContentText id="alert-dialog-description">
                    Você chegou ao fim da demo! O tempo total gasto no site foi de: <br/>
                    {TimeMe.getTimeOnAllPagesInSeconds().reduce(( a, b) => a + b.timeOnPage, 0)} segundos

                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={closeSaveDialog} color="secondary">
                    Fechar
                </Button>
                <Button  onClick={closeSaveDialog} color="secondary" autoFocus>
                    Salvar
                </Button>
                </DialogActions>
            </Dialog>
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