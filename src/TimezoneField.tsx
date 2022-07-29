import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import timezones from "timezones-list";

type TimezoneFieldProps = {
  label: string;
};

const options = timezones.map(({ label, tzCode }) => ({ label, id: tzCode }));

const TimezoneField = ({ label }: TimezoneFieldProps) => {
  return (
    <Autocomplete
      options={options}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="standard" />
      )}
    />
  );
};

export default TimezoneField;
