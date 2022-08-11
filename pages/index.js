import Navbar from '../src/Navbar.js'
import AttractionCard  from '../src/AttractionCard.js'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';



function Homepage({ data }){
  return <div>
    <Navbar />
    <Container maxWidth="lg">
      <div style={{marginTop: '1em'}}>
      <Typography variant="h4" gutterBottom component="div">
        Around The world
      </Typography>
      <Grid container spacing={3}>
      {data.map((attraction) => (
          <Grid item xs={12} md={4} lg={4} key={attraction.id}>
            <AttractionCard attraction={attraction} />
          </Grid>
      ))}
        {/* end Grid item */}
       </Grid>
       {/* end Grid Container */}
    
      </div>
      </Container>
   </div>
}


// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(' https://www.mecallapi.com/api/attractions')
  const data = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {data}
  }
}

export default Homepage