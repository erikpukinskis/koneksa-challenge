import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import timezones from "timezones-list";

type TimezoneFieldProps = {
  label: string;
  value: string | undefined;
  onChange(value?: string): void;
};

type Option = {
  label: string;
  id: string;
};

const OPTIONS = timezones.map<Option>(({ label, tzCode }) => ({
  label,
  id: tzCode,
}));

const TimezoneField = ({ label, value, onChange }: TimezoneFieldProps) => {
  const selected = OPTIONS.find(({ id }) => id === value);

  const handleChange = (_: unknown, option: Option | null) => {
    if (option === null) {
      onChange();
      return;
    }
    console.log("option", option.id);
    onChange(option.id);
  };

  return (
    <Autocomplete
      options={OPTIONS}
      value={selected || null}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="standard" />
      )}
    />
  );
};

export default TimezoneField;
