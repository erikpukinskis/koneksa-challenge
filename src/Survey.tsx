import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import TimezoneField from "./TimezoneField";
import TechPreferenceField from "./TechPreferenceField";
import PizzaToppingsField from "./PizzaToppingsField";
import Button from "@mui/material/Button";

export function Survey() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [timezone, setTimezone] = useState("");
  const [techPref, setTechPref] = useState("");
  const [pizzaToppings, setPizzaToppings] = useState([] as string[]);

  return (
    <Container maxWidth="sm">
      <Box component="form" sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Koneksa Survey
        </Typography>
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <TextField
              label="Name"
              value={name}
              onChange={getChangeHandler(setName)}
              variant="standard"
            />
          </Grid>
          <Grid item>
            <TextField
              label="Password"
              value={password}
              onChange={getChangeHandler(setPassword)}
              type="password"
              variant="standard"
            />
          </Grid>
          <Grid item>
            <TextField
              label="Birthday"
              type="date"
              value={birthday}
              onChange={getChangeHandler(setBirthday)}
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item>
            <TimezoneField
              label="Timezone"
              value={timezone}
              onChange={setTimezone}
            />
          </Grid>
          <Grid item>
            <TechPreferenceField value={techPref} onChange={setTechPref} />
          </Grid>
          <Grid item>
            <PizzaToppingsField
              value={pizzaToppings}
              onChange={setPizzaToppings}
            />
          </Grid>
          <Grid item>
            <Button variant="contained">Submit</Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

const getChangeHandler =
  (callback: (value: string) => void) =>
  (event: React.ChangeEvent<HTMLInputElement>) =>
    callback(event.target.value);
