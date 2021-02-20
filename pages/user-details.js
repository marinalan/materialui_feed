import * as React from 'react';
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';
import WorkIcon from '@material-ui/icons/Work';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#F0FFFF',
    paddingBottom: '10rem'
  }
});

export default function UserDetails() {
  const router = useRouter();
  const classes = useStyles();
  console.log(router.query);
  const {fullName, jobTitle, jobArea, phone} = router.query;
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 6 }} className={classes.center}>
        <Card className={classes.root}>
          <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                User Details
              </Typography>
              <Typography variant="body2" color="textSecondary" component="div">
                <List component="nav">
                  <ListItem button>
                    <ListItemIcon>
                      <FaceIcon />
                    </ListItemIcon>
                    <ListItemText primary={fullName}/>
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <WorkIcon />
                    </ListItemIcon>
                    <ListItemText primary={jobTitle} />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <RoomIcon />
                    </ListItemIcon>
                    <ListItemText primary={jobArea} />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary={phone} />
                  </ListItem>
                </List>
              </Typography>
            </CardContent> 
        </Card>
      </Box>
    </Container>

  );
}

