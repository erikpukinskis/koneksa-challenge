import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import timezones from 'timezones-list';

type TimezoneFieldProps = {
  label: string
}

const options = timezones.map(({ label, tzCode }) => ({ label, id: tzCode }))

const TimezoneField = ({ label }: TimezoneFieldProps) => {
  console.log(timezones)
  return <Autocomplete
    options={options}
    renderInput={(params) => <TextField {...params} label={label} />}
  />
}

export default TimezoneField;
