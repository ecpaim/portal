import React from 'react';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { Link } from 'react-router-dom';

import withStyles from '@material-ui/core/styles/withStyles';

import PropTypes from 'prop-types';


const initialButtonValues = {
    matricula: false,
    dados: false,
    informacoes: false
  };

//takes theme defined in theme.js
const styles = (theme) => ({
  ...theme.general,
});

const SideBar = ({classes}) => {
   

    const [open, setOpen] = React.useState(initialButtonValues);

    const handleClick = (attr) => {
        let newOpen = { ...open };
        newOpen[attr] = !open[attr];
        setOpen({ ...newOpen });
    }

    return (
      <div className={classes.defaultSurface}>
        <List disablePadding >
          <ListItem button onClick={() => handleClick("dados")} >
            <ListItemText classes={{primary:classes.listItemText}} primary="Dados Pessoais" />
            {open.dados ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open.dados} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItem button >
                  <ListItemText classes={{secondary:classes.listItemTextSecondary}} secondary="Dados Gerais" />
                </ListItem>
                <ListItem button >
                  <ListItemText classes={{secondary:classes.listItemTextSecondary}} secondary="Vínculos" />
                </ListItem>
                <ListItem button >
                  <ListItemText classes={{secondary:classes.listItemTextSecondary}} secondary="Qualificações" />
                </ListItem>
                <ListItem button >
                  <ListItemText classes={{secondary:classes.listItemTextSecondary}} secondary="Currículo Lattes" />
                </ListItem>
                <ListItem button >
                  <ListItemText classes={{secondary:classes.listItemTextSecondary}} secondary="Vacinas Aplicadas" />
                </ListItem>
              </List>
            </Collapse>
          <Divider />
          <ListItem button onClick={() => handleClick("informacoes")}>
            <ListItemText classes={{primary:classes.listItemText}} primary="Informações do Curso" />
            {open.informacoes ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open.informacoes} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItem button >
                  <ListItemText classes={{secondary:classes.listItemTextSecondary}} secondary="Situação Acadêmica" />
                </ListItem>
                <ListItem button >
                  <ListItemText classes={{secondary:classes.listItemTextSecondary}} secondary="Histórico do Curso" />
                </ListItem>
                <ListItem button >
                  <ListItemText classes={{secondary:classes.listItemTextSecondary}} secondary="Avaliação de Disciplinas" />
                </ListItem>
                <ListItem button >
                  <ListItemText classes={{secondary:classes.listItemTextSecondary}} secondary="Projeto Pedagógico do Curso" />
                </ListItem>
                <ListItem button >
                  <ListItemText classes={{secondary:classes.listItemTextSecondary}} secondary="Monitoria" />
                </ListItem>
              </List>
            </Collapse>
          <Divider />
          <ListItem button onClick={() => handleClick("matricula")}>
            <ListItemText classes={{primary:classes.listItemText}} primary="Matrícula" />
            {open.matricula ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open.matricula} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItem button component={Link} to="/matricula/possibilidade">
                  <ListItemText classes={{secondary:classes.listItemTextSecondary}} secondary="Possibilidade de Matrícula" />
                </ListItem>
                <ListItem button component={Link} to="/matricula/bloco">
                  <ListItemText classes={{secondary:classes.listItemTextSecondary}} secondary="Monte sua Grade"/>
                </ListItem>
                <ListItem button component={Link} to="/matricula/encomenda">
                  <ListItemText classes={{secondary:classes.listItemTextSecondary}} secondary="Encomenda de Matrícula" />
                </ListItem>
              </List>
          </Collapse>
          <Divider />
          <ListItem button>
            <ListItemText classes={{primary:classes.listItemText}} primary="Documentos" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText classes={{primary:classes.listItemText}}  primary="Mural" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText classes={{primary:classes.listItemText}} primary="Extravestibular" />
          </ListItem>
          <Divider />
        </List>
        </div>

    );
};

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SideBar);