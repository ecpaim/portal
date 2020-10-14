import React from 'react';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import withStyles from '@material-ui/core/styles/withStyles';
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

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

import allData from '../util/processedData2.json';

import {changeEmail, addRegistrationBlock} from '../redux/user/userSlice';

 const styles = (theme) => ({
    ...theme.general,
    container:{
        margin:20,
        //backgroundColor: "rgb(245,245,245,1)" // not sure if this is useless
    },
    table:{
        marginTop:0
    },
    tableCell:{
        width:'14%',
        padding: 0,
        height:50
    },
    cellTextMain: {
        width:'85%',
        padding:5,
        borderRadius: '15px',
        display: 'block',
        backgroundColor: '#c3c8ef',
        whiteSpace:'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      cellTextWrong: {
        width:'85%',
        padding:5,
        borderRadius: '15px',
        display: 'block',
        backgroundColor: '#ea8f8f',
        whiteSpace:'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      cellTextAvailable: {
        width:'85%',
        padding:5,
        borderRadius: '15px',
        display: 'block',
        backgroundColor: '#b7deb8',
        whiteSpace:'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      margin: {
        marginLeft: 6,
        textOverflow: 'ellipsis',
        direction: 'rtl'
      },
      iconButton:{
          
      },
      sendButton:{
          marginTop:10,
          float:'right'
      },
      description:{
          padding:5
      }
});


console.log(allData)

let just3 = allData


console.log(just3)

// using a hash on allData will simplify this code, but this will work for now
let idx = {}
for(var j =0; j<allData.length;j++){
    idx[allData[j]["Atividades de Ensino"]] = j;
}

console.log(idx)

let expandSubject = {}
for(const subj in just3){
    expandSubject[subj["Atividades de Ensino"]] = false
}

const initialState = {
    expandButtons: expandSubject,
    openSubjects: false,
    currentClass: -1,
    schedule: {
        SEG: {
            h08:{prof:"",subj:"",classID:"", hover:0},
            h09:{prof:"",subj:"",classID:"", hover:0},
            h10:{prof:"",subj:"",classID:"", hover:0},
            h11:{prof:"",subj:"",classID:"", hover:0},
            h12:{prof:"",subj:"",classID:"", hover:0},
            h13:{prof:"",subj:"",classID:"", hover:0},
            h14:{prof:"",subj:"",classID:"", hover:0},
            h15:{prof:"",subj:"",classID:"", hover:0},
            h16:{prof:"",subj:"",classID:"", hover:0},
            h17:{prof:"",subj:"",classID:"", hover:0},
            h18:{prof:"",subj:"",classID:"", hover:0}
        },
        TER: {
            h08:{prof:"",subj:"",classID:"", hover:0},
            h09:{prof:"",subj:"",classID:"", hover:0},
            h10:{prof:"",subj:"",classID:"", hover:0},
            h11:{prof:"",subj:"",classID:"", hover:0},
            h12:{prof:"",subj:"",classID:"", hover:0},
            h13:{prof:"",subj:"",classID:"", hover:0},
            h14:{prof:"",subj:"",classID:"", hover:0},
            h15:{prof:"",subj:"",classID:"", hover:0},
            h16:{prof:"",subj:"",classID:"", hover:0},
            h17:{prof:"",subj:"",classID:"", hover:0},
            h18:{prof:"",subj:"",classID:"", hover:0}
        },
        QUA: {
            h08:{prof:"",subj:"",classID:"", hover:0},
            h09:{prof:"",subj:"",classID:"", hover:0},
            h10:{prof:"",subj:"",classID:"", hover:0},
            h11:{prof:"",subj:"",classID:"", hover:0},
            h12:{prof:"",subj:"",classID:"", hover:0},
            h13:{prof:"",subj:"",classID:"", hover:0},
            h14:{prof:"",subj:"",classID:"", hover:0},
            h15:{prof:"",subj:"",classID:"", hover:0},
            h16:{prof:"",subj:"",classID:"", hover:0},
            h17:{prof:"",subj:"",classID:"", hover:0},
            h18:{prof:"",subj:"",classID:"", hover:0}
        },
        QUI: {
            h08:{prof:"",subj:"",classID:"", hover:0},
            h09:{prof:"",subj:"",classID:"", hover:0},
            h10:{prof:"",subj:"",classID:"", hover:0},
            h11:{prof:"",subj:"",classID:"", hover:0},
            h12:{prof:"",subj:"",classID:"", hover:0},
            h13:{prof:"",subj:"",classID:"", hover:0},
            h14:{prof:"",subj:"",classID:"", hover:0},
            h15:{prof:"",subj:"",classID:"", hover:0},
            h16:{prof:"",subj:"",classID:"", hover:0},
            h17:{prof:"",subj:"",classID:"", hover:0},
            h18:{prof:"",subj:"",classID:"", hover:0}
        },
        SEX: {
            h08:{prof:"",subj:"",classID:"", hover:0},
            h09:{prof:"",subj:"",classID:"", hover:0},
            h10:{prof:"",subj:"",classID:"", hover:0},
            h11:{prof:"",subj:"",classID:"", hover:0},
            h12:{prof:"",subj:"",classID:"", hover:0},
            h13:{prof:"",subj:"",classID:"", hover:0},
            h14:{prof:"",subj:"",classID:"", hover:0},
            h15:{prof:"",subj:"",classID:"", hover:0},
            h16:{prof:"",subj:"",classID:"", hover:0},
            h17:{prof:"",subj:"",classID:"", hover:0},
            h18:{prof:"",subj:"",classID:"", hover:0}
        },
        SAB: {
            h08:{prof:"",subj:"",classID:"", hover:0},
            h09:{prof:"",subj:"",classID:"", hover:0},
            h10:{prof:"",subj:"",classID:"", hover:0},
            h11:{prof:"",subj:"",classID:"", hover:0},
            h12:{prof:"",subj:"",classID:"", hover:0},
            h13:{prof:"",subj:"",classID:"", hover:0},
            h14:{prof:"",subj:"",classID:"", hover:0},
            h15:{prof:"",subj:"",classID:"", hover:0},
            h16:{prof:"",subj:"",classID:"", hover:0},
            h17:{prof:"",subj:"",classID:"", hover:0},
            h18:{prof:"",subj:"",classID:"", hover:0}
        }
    }
  };
const DAYS = ['SEG','TER','QUA','QUI','SEX','SAB'];
const HOURS = ['h08','h09','h10','h11','h12','h13','h14','h15','h16','h17','h18'];

const Monte = ({username, email, changeEmail, addRegistrationBlock, classes}) => {

    const history = useHistory();
    const [state, setState] = React.useState(initialState);

    const sendBlock = () => {
        let block = [];
        for(const day of DAYS){
            for(const hour of HOURS){
                let alreadyAdded = false;
                for(const subject of block){
                    if(subject.name === state.schedule[day][hour].subj && subject.classID === state.schedule[day][hour].classID){
                        alreadyAdded = true;
                    }
                }
                if(!alreadyAdded && state.schedule[day][hour].subj !== ""){
                    block.push({ name:state.schedule[day][hour].subj, classID: state.schedule[day][hour].classID });
                } 
            }
        }
        if(block.length > 0){
            while(block.length < 9){
                block.push({ name:"", classID:"" });
            }
            addRegistrationBlock(block);
        }
        console.log("redirect")
        history.push("/matricula/encomenda");
    }
    
    const showSubjects = () => {

        if(email === 'eduardo.paim@inf.ufrgs.br'){
            changeEmail('another@example.com');
        } else {
            changeEmail('eduardo.paim@inf.ufrgs.br');
        }
       
        setState({ ...state, openSubjects: !state.openSubjects });
    };

    const showClasses = (subject) => {
        let newExpandButtons = {...state.expandButtons};
        newExpandButtons[subject] = !newExpandButtons[subject];
        let i = 0;
        for(i=0;i< just3.length; i++){
            if(just3[i]["Atividades de Ensino"] === subject)
                break      
        }
        
        setState({ ...state, currentClass: i, expandButtons: newExpandButtons });
    };
    // The spread operator makes deep copies of data IF the data is not nested
    const addSubject = (professorsName, subjectName) => {
        let newSchedule = {...state.schedule};
        let error = false;

        just3[idx[subjectName]].professors.filter(i => (i.name === professorsName))[0].time.map(dayObj => {
            if( state.schedule[dayObj.day][dayObj.hour].hover === 2){
                error = true;
            }
        });

        if(!error){
            let tmp = professorsName.split('-');
            just3[idx[subjectName]].professors.filter(i => (i.name === professorsName))[0].time.map(dayObj => {
                for(var j = 0; j < dayObj.period;j++){
                    if(HOURS.indexOf(dayObj.hour)+j > HOURS.length-1){
                        continue; // class ends too late, not implemented yet
                    }
                    let currentPeriod = HOURS[HOURS.indexOf(dayObj.hour)+j];

                    newSchedule[dayObj.day][currentPeriod] = {prof:tmp[0], subj:subjectName, classID:tmp[1], hover:0}; 
                }
         
            });
        
            setState({ ...state, currentClass: professorsName, schedule: newSchedule });
        }
          
    }
    const removeSubject = (subject,classID) => {
        let newSchedule = {...state.schedule};
        for(const day of DAYS){
            for(const hour of HOURS){
                
                if(state.schedule[day][hour].subj === subject && state.schedule[day][hour].classID === classID){
                    newSchedule[day][hour] = {prof:"", subj:"", classID:"", hover: 0};
                }   
            }
        }
        setState({ ...state, schedule: newSchedule });
    }

    const showSkeleton = (professorsName, subjectName) => {

        let newSchedule = {...state.schedule};
        let error = false;
        just3[idx[subjectName]].professors.filter(i => (i.name === professorsName))[0].time.map(dayObj => {
            let tmp = professorsName.split('-');

            for(var j = 0; j < dayObj.period;j++){
                if(HOURS.indexOf(dayObj.hour)+j > HOURS.length-1){
                    continue; // class ends too late, not implemented yet
                }
                let currentPeriod = HOURS[HOURS.indexOf(dayObj.hour)+j];

                console.log('current period: '+currentPeriod)
                // can't mark itself as red
                if(state.schedule[dayObj.day][currentPeriod].classID === tmp[1] && state.schedule[dayObj.day][currentPeriod].subj === subjectName){
                    error=true;
                }
                else if( state.schedule[dayObj.day][currentPeriod].prof === ""){ 
                    newSchedule[dayObj.day][currentPeriod] = {prof:tmp[0], subj:subjectName, classID:tmp[1], hover:1};
                }
                else if(state.schedule[dayObj.day][currentPeriod].hover !== 1){
                    newSchedule[dayObj.day][currentPeriod] = {...state.schedule[dayObj.day][currentPeriod], hover:2};
                }
            }
        });
        if(!error){
            setState({ ...state, currentClass: professorsName, schedule: newSchedule });
        }

    };
    const deleteSkeleton = (professorsName, subjectName) => {
        let newSchedule = {...state.schedule};

        just3[idx[subjectName]].professors.filter(i => (i.name === professorsName))[0].time.map(dayObj => {
            for(var j = 0; j < dayObj.period;j++){
                if(HOURS.indexOf(dayObj.hour)+j > HOURS.length-1){
                    continue; // class ends too late, not implemented yet
                }
                let currentPeriod = HOURS[HOURS.indexOf(dayObj.hour)+j];

                if(state.schedule[dayObj.day][currentPeriod].hover === 1){ 
                    newSchedule[dayObj.day][currentPeriod] = {prof:"", subj:"", classID:"", hover: 0};
                }
                else{
                    newSchedule[dayObj.day][currentPeriod] = {...state.schedule[dayObj.day][currentPeriod], hover:0};
                }
            }
        });

        setState({ ...state, schedule: newSchedule });
    };

    return(
    <div className={classes.container} >
        <Typography variant='h5' color='secondary' paragraph>
            Monte seu Bloco
        </Typography>
        <Grid container spacing={1} xs={12} >
        <Grid item sm={4} xs={12} >
            <Typography paragraph align='justify' className={classes.description}>
                Para montar seu bloco, clique em "Adicionar Disciplina" e escolha as disciplinas desejadas.
                Quando terminar de montar sua grade, clique em "Adicionar Bloco" para ir à página de encomenda de matrícula.

            </Typography>

                <List style={{backgroundColor:'#ffffff', padding:0}}>
                    <ListItem button onClick={showSubjects}>
                    <ListItemText classes={{primary:classes.listItemText}} primary="Adicionar Disciplina" />
                        {state.openSubjects ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={state.openSubjects} timeout="auto" unmountOnExit style={{maxHeight: '31em', overflow: 'auto'}}>
                        <List disablePadding >
                            {just3.map(subject => (
                                <div>
                                <ListItem button onClick={()=> showClasses(subject["Atividades de Ensino"])}>
                                    <ListItemText  classes={{secondary:classes.listItemTextSecondary}} secondary={subject["Atividades de Ensino"]} />
                                </ListItem>
                                <Collapse in={state.expandButtons[subject["Atividades de Ensino"]]} timeout="auto" unmountOnExit>
                                    <List disablePadding>
                                    {subject.professors.map((aClass) => (
                                        <ListItem button onMouseOver={() => showSkeleton(aClass.name,subject["Atividades de Ensino"])} onMouseLeave={() => deleteSkeleton(aClass.name,subject["Atividades de Ensino"])} onClick={() => addSubject(aClass.name,subject["Atividades de Ensino"])}>
                                            <ListItemText secondary={aClass.name} />
                                        </ListItem>
                                    ))} 
                                    </List> 
                                </Collapse>
                                </div>
                            ))}
                        </List>
                    </Collapse>
                </List>
            

        </Grid>
        <Grid item sm={8} xs={12} >
            <TableContainer component={Paper} className={classes.table}>
                <Table aria-label="grade de horarios">
                    <TableHead>
                        <TableRow>
                            <TableCell> Horário</TableCell>
                            <TableCell align="center">SEG</TableCell>
                            <TableCell align="center">TER</TableCell>
                            <TableCell align="center">QUA</TableCell>
                            <TableCell align="center">QUI</TableCell>
                            <TableCell align="center">SEX</TableCell>
                            <TableCell align="center">SAB</TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            { 
                            state.schedule !== undefined ? HOURS.map( h =>(
                                        <TableRow>
                                            <TableCell > {h[1]}{h[2]}:30</TableCell>
                                            {DAYS.map( d => (
                                            <TableCell align="center" className={classes.tableCell}> 
                                            {state.schedule[d][h].subj !== "" ? 
                                                 state.schedule[d][h].hover === 0 ?
                                                <Tooltip title={<div> {state.schedule[d][h].subj} <br/> {state.schedule[d][h].prof} <br/> {state.schedule[d][h].classID}</div>}>
                                                    <div>
                                                    <div className={classes.cellTextMain}>        
                                                        <Typography align="center" variant='body2' className={classes.margin}>
                                                            
                                                            <IconButton aria-label="delete" size="small" onClick={() => removeSubject(state.schedule[d][h].subj,state.schedule[d][h].classID)}>
                                                                <CloseIcon className={classes.iconButton} fontSize="inherit" />
                                                            </IconButton>
                                                            <span className={classes.margin}>{state.schedule[d][h].subj.split(' ')[0]}</span>
                                                        </Typography> 
                                                    </div>
                            
                                                    </div>
                                                </Tooltip>
                                                : state.schedule[d][h].hover === 1 ?
                                                <Tooltip title={state.schedule[d][h].subj}>
                                                    <div className={classes.cellTextAvailable}>        
                                                        <Typography align="center" variant='body2' className={classes.margin}>
                                                            
                                                            <IconButton aria-label="delete" size="small" >
                                                                <CloseIcon className={classes.iconButton} fontSize="inherit" />
                                                            </IconButton>
                                                            <span className={classes.margin}>{state.schedule[d][h].subj.split(' ')[0]}</span>
                                                        </Typography> 
                                                    </div>
                                                </Tooltip>
                                                : (state.schedule[d][h].hover === 2 ?
                                                <Tooltip title={state.schedule[d][h].subj}>
                                                    <div className={classes.cellTextWrong}>        
                                                        <Typography align="center" variant='body2' className={classes.margin}>
                                                            
                                                            <IconButton aria-label="delete" size="small" >
                                                                <CloseIcon className={classes.iconButton} fontSize="inherit" />
                                                            </IconButton>
                                                            <span className={classes.margin}>{state.schedule[d][h].subj.split(' ')[0]}</span>
                                                        </Typography> 
                                                    </div>
                                                </Tooltip>
                                                : null)
                                            : null}
                                            </TableCell>
                                            ))}
                                        </TableRow>
                                    ))
                                : null
                            }
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" color="secondary" size='small' className={classes.sendButton} onClick={sendBlock} >
                <Typography>Adicionar Bloco</Typography>
            </Button>
        </Grid>
        </Grid>
    </div>
  );

}

/*
            <List>
                {just3[1].professors !== undefined ? just3[1].professors.map(professor => (
                    <ListItem button onMouseOver={() => showSkeleton(professor.name)} onMouseLeave={() => deleteSkeleton(professor.name)}>
                        <ListItemText primary={professor.name} />
                    </ListItem>
                )):null}
            </List>

*/



Monte.propTypes = {
    classes: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    changeEmail: PropTypes.func.isRequired,
    addRegistrationBlock: PropTypes.func.isRequired
}
  
// if we put a function call here we HAVE to use CreateSelector, otherwise we will
// recall it every time an action is dispatched even if no argument has changed
const mapStateToProps = state => ({
    username: state.user.username,
    email: state.user.email
})

const mapActionsToProps = {changeEmail, addRegistrationBlock};

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Monte));