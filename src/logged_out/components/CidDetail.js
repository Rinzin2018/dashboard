import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PlaceIcon from '@material-ui/icons/Place';
import PeopleIcon from '@material-ui/icons/People';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import HomeIcon from '@material-ui/icons/Home';
import TodayIcon from '@material-ui/icons/Today';
import WcIcon from '@material-ui/icons/Wc';
import WorkIcon from '@material-ui/icons/Work';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 800,
    marginRight: 20,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
    marginLeft: 10,
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function CidDetail(props) {
  const {cid} = props;
  const classes = useStyles();
  const [dense] = React.useState(false);

  return (
    <div>
      <Grid container spacing={2}>
        <Card className={classes.root} variant="outlined">
          <Grid item xs={12} md={6} lg={6}>
            <Typography variant="h6" className={classes.title}>
              Personal Detail
            </Typography>
            <div className={classes.demo}>
              <List dense={dense}>
                <ListItem>
                  <ListItemIcon>
                    <PeopleIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Name"
                    secondary={cid?.firstName ? (cid?.firstName + `${cid?.middleName || ''}` + ' ' + cid?.lastName || '') : null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FingerprintIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary="CID"
                    secondary={cid?.cid || null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TodayIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary="DOB"
                    secondary={cid?.dob || null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WcIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Gender"
                    secondary={cid?.gender === 'M' ? 'Male' : cid?.gender === 'F' ? 'Female' : null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WorkIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Occupation"
                    secondary={cid?.occupation || null}
                  />
                </ListItem>
              </List>
            </div>
          </Grid>
        </Card>
        <Card className={classes.root} variant="outlined">
          <Grid item xs={12} md={6} lg={6}>
            <Typography variant="h6" className={classes.title}>
              Other Information
            </Typography>
            <div className={classes.demo}>
              <List dense={dense}>
                <ListItem>
                  <ListItemIcon>
                    <PlaceIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Dzongkhag"
                    secondary={cid?.dzongkhagName || null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Village"
                    secondary={cid?.villageName || null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PeopleIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Father Name"
                    secondary={cid?.fatherName || null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PeopleIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Mother Name"
                    secondary={cid?.motherName || null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Household Number"
                    secondary={cid?.householdNo || null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ImportContactsIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Thram Number"
                    secondary={cid?.thramNo || null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ImportContactsIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary="House Number"
                    secondary={cid?.houseNo || null}
                  />
                </ListItem>
              </List>
            </div>
          </Grid>
        </Card>
      </Grid>
    </div>
  );
}
