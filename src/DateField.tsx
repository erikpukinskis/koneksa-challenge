import { type ChangeEvent } from "react";
import TextField from "@mui/material/TextField";

type DateFieldProps = {
  label: string;
  value: string;
  onChange: (date: string) => void;
};

export const DateField = ({ label, value, onChange }: DateFieldProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      label={label}
      type="date"
      value={value}
      onChange={handleChange}
      variant="standard"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};
