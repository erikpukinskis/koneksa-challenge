# Erik Pukinskis / Koneksa React Coding Challenge

## Starting the dev server

```sh
yarn install
yarn start
```

## Running the tests

```sh
yarn test
```

## Before you create a PR

Run `yarn fix:format` to fix the source formatting. You can also install the `esbenp.prettier-vscode` extension in VS Code to format-on-save.

Run `yarn check:types` to make sure the types are OK.

## Notes for the future

### Performance

Startup seems a bit slow, and type checking seems quite slow given the size of this app. I am not sure if the MUI types are just huge and that's slowing things down, or maybe it's just Babel/Webpack/react-scripts. It would be nice to port this to Vite and see if that improves things.

I'm also not sure react-scripts is really meant for production, would be worth experimenting with! I typically would just use Vite or Babel directly for a production build.

### Folder structure

Right now the structure is very flat, which is good for such a small app. But if this repo ever expands to include additional pages, components, etc, we should add some more structure to the filesystem:

- Survey.tsx should go into a `pages/` folder
- The various components should go into a `components/` folder
- I would probabably move the `chooseFromAutocomplete` function into a testHelpers.ts file inside a `utils/` folder

I don't like relative imports, so this would require adding some import aliases, like:

```
import { DateField } from '@/components';
import { chooseFromAutocomplete } from '@/utils/testHelpers';
```

### Other ergonomic improvements

Would be great to add Eslint, to sort imports, add stricter TypeScript policies, etc.
