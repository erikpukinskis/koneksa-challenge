import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';

export function Survey() {
  return (
    <Container maxWidth="sm">
      <Box component="form" sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Koneksa Survey
        </Typography>

        <FormGroup>
          <TextField required label="Name" />
          <TextField required label="Password" type="password" />
        </FormGroup>
      </Box>
    </Container>
  );
}
