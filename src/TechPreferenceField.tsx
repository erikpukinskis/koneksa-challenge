import { type ChangeEvent } from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

type TechPreferenceFieldProps = {
  value: string;
  onChange(value: string): void;
};

const TechPreferenceField = ({ value, onChange }: TechPreferenceFieldProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel htmlFor="tech-preference">Tech Preference</FormLabel>
      <RadioGroup
        id="tech-preference"
        value={value || null}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          value="front end"
          control={<Radio />}
          label="Front end"
        />
        <FormControlLabel
          value="back end"
          control={<Radio />}
          label="Back end"
        />
        <FormControlLabel value="both" control={<Radio />} label="Both" />
      </RadioGroup>
    </FormControl>
  );
};

export default TechPreferenceField;
