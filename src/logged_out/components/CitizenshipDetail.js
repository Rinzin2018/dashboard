import React, {useState} from 'react';
import SearchInput from '../../shared/components/SearchBar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CidDetail from './CidDetail';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import {citizenshipFetch} from '../../utils/CitizenshipService';
import swal from 'sweetalert';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 75,
    height: '100%'
  },
  content: {
    minHeight: '90%',
    marginLeft: 40,
    marginTop: 20
  },
  search: {
    marginLeft: 40,
    marginTop: 30
  },
  button: {
    height: 45,
    marginTop: 30
  },
}));

const Citizenship = props => {
  const classes = useStyles();
  const [cid, setCid] = useState(null);
  const [cidDetail, setCidDetail] = useState({});

  const handleFetchCid = () => {
    if (cid !== null) {
      citizenshipFetch(cid).then(response => {
        setCidDetail(response);
      }).catch(err => {
        swal({
          title: 'Couldn\'t find cid!',
          text: `Couldn't find cid with ${cid}. Please enter correct cid!`,
          icon: 'error',
          button: 'OK!',
        });
      });
    }
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={5} xs={7} className={classes.search}>
          <SearchInput onChange={(value) => setCid(value)}/>
        </Grid>
        <Grid item lg={3} xs={2}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleFetchCid()}
            className={classes.button}
            endIcon={<SearchIcon>search</SearchIcon>}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      <main className={classes.content}>
        <CidDetail cid={cidDetail}/>
      </main>
    </div>
  );
};

export default Citizenship;
