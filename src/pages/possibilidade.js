import React from 'react';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Typography } from '@material-ui/core';

import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Grid from '@material-ui/core/Grid';

import allData from '../util/processedData2.json';

 const styles = (theme) => ({
    ...theme.general,
    container:{
        margin:20,
        backgroundColor: "rgb(245,245,245,1)"
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
        width:'80%',
        padding:5,
        borderRadius: '15px',
        display: 'block',
        backgroundColor: '#a6d4fa',
        whiteSpace:'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      cellTextWrong: {
        width:'80%',
        padding:5,
        borderRadius: '15px',
        display: 'block',
        backgroundColor: '#ea8f8f',
        whiteSpace:'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      cellTextAvailable: {
        width:'80%',
        padding:5,
        borderRadius: '15px',
        display: 'block',
        backgroundColor: '#b7deb8',
        whiteSpace:'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }
});


console.log(allData)

let just3 = []
just3.push(allData[0])
just3.push(allData[1])
just3.push(allData[2])
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
    currentID: "(MAT01355) ÁLGEBRA LINEAR I - A",
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
            h08:{prof:"example",subj:"example",classID:"example", hover:0},
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
            h08:{prof:"example",subj:"example",classID:"example", hover:0},
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
            h08:{prof:"example",subj:"example",classID:"example", hover:0},
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

const Possibilidade = ({username,email, classes}) => {

    const [state, setState] = React.useState(initialState);

    const showSubjects = () => {
       
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

    const showSkeleton = (professorsName, subjectName) => {

        let newSchedule = {...state.schedule};
        
        just3[idx[subjectName]].professors.filter(i => (i.name === professorsName))[0].time.map(dayObj => {
            let tmp = professorsName.split('-');
            if( state.schedule[dayObj.day][dayObj.hour].prof === ""){ 
                newSchedule[dayObj.day][dayObj.hour] = {prof:tmp[0], subj:subjectName, classID:tmp[1], hover:1};
            }
            else if(state.schedule[dayObj.day][dayObj.hour].hover !== 1){
                newSchedule[dayObj.day][dayObj.hour] = {...state.schedule[dayObj.day][dayObj.hour], hover:2};
            }
        });
        //console.log(newSchedule);
        setState({ ...state, currentClass: professorsName, schedule: newSchedule });
        
       //console.log(just3[1].professors.filter(i => (i.name === professorsName))[0].time)

    };
    const deleteSkeleton = (professorsName, subjectName) => {
        let newSchedule = {...state.schedule};

        just3[idx[subjectName]].professors.filter(i => (i.name === professorsName))[0].time.map(dayObj => {
            if(state.schedule[dayObj.day][dayObj.hour].hover === 1){ 
                newSchedule[dayObj.day][dayObj.hour] = {prof:"", subj:"", classID:"", hover: 0};
            }
            else{
                newSchedule[dayObj.day][dayObj.hour] = {...state.schedule[dayObj.day][dayObj.hour], hover:0};
            }
        });

        setState({ ...state, schedule: newSchedule });
    };

    return(
    <div className={classes.container} >
        <Typography variant='h5' color='secondary' paragraph>
            Possibilidade de Matrícula
        </Typography>
        <Grid container spacing={1} xs={12} >
        <Grid item sm={4} xs={12} >
            <Typography>
                username: {username}
                <br/>
                Email: {email} 
                
            </Typography>

                <List>
                    <ListItem button onClick={showSubjects}>
                    <ListItemText classes={{primary:classes.listItemText}} primary="Adicionar Disciplina" />
                        {state.openSubjects ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={state.openSubjects} timeout="auto" unmountOnExit>
                        <List disablePadding>
                            {just3.map(subject => (
                                <div>
                                <ListItem button onClick={()=> showClasses(subject["Atividades de Ensino"])}>
                                    <ListItemText  classes={{secondary:classes.listItemTextSecondary}} secondary={subject["Atividades de Ensino"]} />
                                </ListItem>
                                <Collapse in={state.expandButtons[subject["Atividades de Ensino"]]} timeout="auto" unmountOnExit>
                                    <List disablePadding>
                                    {subject.professors.map((aClass) => (
                                        <ListItem button onMouseOver={() => showSkeleton(aClass.name,subject["Atividades de Ensino"])} onMouseLeave={() => deleteSkeleton(aClass.name,subject["Atividades de Ensino"])}>
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
                                                <Tooltip title={state.schedule[d][h].subj}>
                                                    <div className={classes.cellTextMain}>
                                                        {state.schedule[d][h].subj.split(' ')[0]}
                                                    </div>
                                                </Tooltip>
                                                : state.schedule[d][h].hover === 1 ?
                                                <Tooltip title={state.schedule[d][h].subj}>
                                                    <div className={classes.cellTextAvailable}>
                                                        {state.schedule[d][h].subj.split(' ')[0]}
                                                    </div>
                                                </Tooltip>
                                                : (state.schedule[d][h].hover === 2 ?
                                                <Tooltip title={state.schedule[d][h].subj}>
                                                    <div className={classes.cellTextWrong}>
                                                        {state.schedule[d][h].subj.split(' ')[0]}
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