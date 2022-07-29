import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import TimezoneField from './TimezoneField';
import TechPreferenceField from './TechPreferenceField';

export function Survey() {
  return (
    <Container maxWidth="sm">
      <Box component="form" sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Koneksa Survey
        </Typography>
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <TextField required label="Name" variant="standard" />
          </Grid>
          <Grid item>
            <TextField required label="Password" type="password" variant="standard" />
          </Grid>
          <Grid item>
            <TextField
              label="Birthday"
              type="date"
              variant="standard"
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
          <Grid item>
            <TechPreferenceField />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
