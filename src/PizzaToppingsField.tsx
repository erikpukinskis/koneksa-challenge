import { useState, type ChangeEvent } from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import without from "lodash/without";

const TOPPINGS = [
  "Anchovy",
  "Artichoke Hearts",
  "Arugula",
  "Bacon",
  "Banana Peppers",
  "Basil",
  "BBQ Sauce",
  "Bell Pepper",
  "Black Beans",
  "Black Olives",
  "Broccoli",
  "Capers",
  "Chicken",
  "Chorizo",
  "Cilantro Pesto",
  "Egg",
  "Feta",
  "Garlic",
  "Goat cheese",
  "Gorgonzola",
  "Habanero Peppers",
  "Ham",
  "Italian sausage (Hot)",
  "Italian sausage (Sweet)",
  "Jalapeño",
  "Meatballs",
  "Mushrooms",
  "Olive oil",
  "Pepperoni",
  "Pesto",
  "Pineapple",
  "Prosciutto",
  "Red Onion",
  "Salami",
  "Shrimp",
  "Spinach",
  "Sun-Dried Tomatoes",
  "Sweetcorn",
  "Tomatos",
];

type PizzaToppingsFieldProps = {
  value: string[];
  onChange(value: string[]): void;
};

const PizzaToppingsField = ({
  value: toppings,
  onChange,
}: PizzaToppingsFieldProps) => {
  const updateTopping =
    (topping: string) => (event: ChangeEvent<HTMLInputElement>) => {
      const newToppings = event.target.checked
        ? [...toppings, topping]
        : without(toppings, topping);
      onChange(newToppings);
    };

  return (
    <FormControl>
      <FormLabel component="legend">Pizza Toppings</FormLabel>
      <FormGroup>
        <Grid container wrap="wrap" spacing={2}>
          {TOPPINGS.map((topping) => (
            <Grid item xs={6} sm={4} key={topping}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={toppings.includes(topping)}
                    onChange={updateTopping(topping)}
                  />
                }
                label={topping}
              />
            </Grid>
          ))}
        </Grid>
      </FormGroup>
    </FormControl>
  );
};

export default PizzaToppingsField;
