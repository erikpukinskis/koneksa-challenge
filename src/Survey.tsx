import { useState, type ChangeEvent } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import TimezoneField from "./TimezoneField";
import TechPreferenceField from "./TechPreferenceField";
import PizzaToppingsField from "./PizzaToppingsField";
import Button from "@mui/material/Button";
import { DateField } from "./DateField";

export const Survey = () => {
  const [name, setName] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [birthday, setBirthday] = useState<string | undefined>();
  const [timezone, setTimezone] = useState<string | undefined>();
  const [techPref, setTechPref] = useState<string | undefined>();
  const [pizzaToppings, setPizzaToppings] = useState([] as string[]);

  const submit = async () => {
    const body = {
      name,
      password,
      birthday,
      timezone,
      techPref,
      pizzaToppings,
    };
    const response = await fetch("/survey", {
      method: "POST",
      body: JSON.stringify(body, null, 2),
    });
  };

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
            <DateField
              label="Birthday"
              value={birthday}
              onChange={setBirthday}
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
            <Button variant="contained" onClick={submit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

const getChangeHandler =
  (callback: (value: string) => void) =>
  (event: ChangeEvent<HTMLInputElement>) =>
    callback(event.target.value);
