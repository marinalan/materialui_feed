import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function About() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 6 }}>
        <Typography variant="h6" component="h5" gutterBottom>
          <p>
           I am looking for a regularly paid job, and still hope to earn for living as 
           remote software developer.  I like to work from home. So I do learn things, one day - Ruby on Rails, 
           other day - Laravel/PHP wth Vue, today - Next.js, hoping to be prepared when opportunity will come,
           but it is all the same for me which tech stack - if only that will give me a job!
           I am not ambitious, probably would be satisfied just with maintaining and fixing abandoned legacy software.
           I am not contrary to work temporarily as "general labor", if that is on walking distance 
           reachable from my home, and thing is arranged without too much hussles.
          </p>
        </Typography>
      </Box>
    </Container>
  );
}
