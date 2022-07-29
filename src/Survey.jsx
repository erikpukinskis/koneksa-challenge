import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export function Survey() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Koneksa Survey
        </Typography>
        <Typography variant="body" component="p">
          Hello, wordle
        </Typography>
      </Box>
    </Container>
  );
}
