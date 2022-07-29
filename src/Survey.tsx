import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import TimezoneField from './TimezoneField';

export function Survey() {
  return (
    <Container maxWidth="sm">
      <Box component="form" sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Koneksa Survey
        </Typography>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField required label="Name" />
          </Grid>
          <Grid item>
            <TextField required label="Password" type="password" />
          </Grid>
          <Grid item>
            <TextField
              label="Birthday"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item>
            <TimezoneField
              label="Timezone"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
