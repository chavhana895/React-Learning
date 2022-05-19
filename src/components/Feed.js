import { Container, makeStyles } from "@material-ui/core";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post title="Great Pyramid of Giza" img="https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg"/>
      <Post title="Hanging Gardens of Babylon" img="https://upload.wikimedia.org/wikipedia/commons/a/ae/Hanging_Gardens_of_Babylon.jpg"/>
      <Post title="Colossus of Rhodes" img="https://upload.wikimedia.org/wikipedia/commons/f/f7/Rhodes0211.jpg"/>
      <Post title="Lighthouse of Alexandria" img="https://images.memphistours.com/large/4b7d3921c8fd3a8ff33d4e58357bca15.jpg"/>
      <Post title="Temple of Artemis" img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Miniaturk_009.jpg/800px-Miniaturk_009.jpg"/>
      <Post title="Statue of Zeus at Olympia" img="https://upload.wikimedia.org/wikipedia/commons/6/66/Le_Jupiter_Olympien_ou_l%27art_de_la_sculpture_antique.jpg"/>
    </Container>
  );
};
//https://www.zconsolutions.com/wp-content/uploads/2020/02/zconlogowith-tagline-1-1.svg

export default Feed;