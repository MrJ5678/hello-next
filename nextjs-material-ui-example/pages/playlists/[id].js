/*
 * @Author: hhhhhq
 * @Date: 2020-06-23 20:05:57
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-06-26 21:12:49
 * @Description: file content
 */ 
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Layout from '../../layouts/Basic'
import Link from '../../src/Link'
import fetch from "isomorphic-unfetch";
import { ListItemText } from '@material-ui/core';

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

const Playlist = (props) => {
  const classes = useStyles();
  const { playlist } = props
  const { url_name } = playlist
  
  return (
    <Layout>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.title}>
              { playlist.name } - 视频列表
            </Typography>
            <div className={classes.demo}>
              <List>
                {playlist.movies.map(movie => (
                    <ListItem key={movie.id}>
                      <a 
                        href={`https://www.qiuzhi99.com/movies/${url_name}/${movie.id}.html`}
                        target="_blank"
                      >
                        <ListItemText primary={movie.title}>
                        </ListItemText>
                      </a>
                    </ListItem>
                ))}
              </List>
              <Link href="/">back to home</Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

Playlist.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://www.qiuzhi99.com/api/v1/playlists/${id}`);
  const data = await res.json();

  
  return {
    playlist: data.response.playlist
  }
};

export default Playlist
