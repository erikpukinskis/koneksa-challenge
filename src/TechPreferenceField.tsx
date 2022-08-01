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
  return (
    <FormControl>
      <FormLabel htmlFor="tech-preference">Gender</FormLabel>
      <RadioGroup
        id="tech-preference"
        aria-labelledby="tech-preference-field-label"
        row
      >
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="front end"
        />
        <FormControlLabel value="male" control={<Radio />} label="back end" />
        <FormControlLabel value="other" control={<Radio />} label="both" />
      </RadioGroup>
    </FormControl>
  );
};

export default TechPreferenceField;
