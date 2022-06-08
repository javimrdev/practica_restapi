import * as React from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import * as classes from './app.layout.styles';
import Button from '@material-ui/core/Button/Button';
import Box from '@material-ui/core/Box/Box';

export const AppLayout: React.FunctionComponent = (props) => {
  const { children } = props;
  const history = useHistory();

  const navigateTo = (url: string) => {
    history.push(url);
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton color="primary" aria-label="Menu">
            <AccountCircle />
          </IconButton>
          <Box>
              <Button
                onClick={() => navigateTo('/characters')}
              >
                Characters Collection
              </Button>
          </Box>
          <Box>
              <Button
                onClick={() => navigateTo('/characters-edit')}
              >
                Characters Collection Edit
              </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
