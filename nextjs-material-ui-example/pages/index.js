/*
 * @Author: hhhhhq
 * @Date: 2020-06-23 20:05:57
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-06-26 20:25:07
 * @Description: file content
 */ 
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Layout from '../layouts/Basic'
import Link from '../src/Link'
import fetch from "isomorphic-unfetch";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  img: {
    width: 300,
    height: 175
  }
}));

const Index = (props) => {
  const classes = useStyles();
  
  return (
    <Layout>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.title}>
              课程表
            </Typography>
            <div className={classes.demo}>
              <List>
                {props.playlists.map(playlist => (
                  <ListItem key={playlist.id}>
                    <Link href="/playlists/[id]" as={`/playlists/${playlist.id}`}>
                      <img src={playlist.image_url} alt="" className={classes.img}/>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

Index.getInitialProps = async function() {
  const res = await fetch("https://www.qiuzhi99.com/api/v1/playlists");
  const data = await res.json();

  console.log(data.response.playlists);
  return {
    playlists: data.response.playlists
  }
};

export default Index
