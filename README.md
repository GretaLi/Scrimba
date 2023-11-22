# scrimba

Scrimba Frontend Career Path Challenges

[Travel Journal - Live Site](https://gretali.github.io/scrimba/travel-journal/)

[Airbnb Clone - Live Site](https://gretali.github.io/scrimba/airbnb-clone/)

## Build with

- React.js
- SCSS
- Vite

## What I've Learned

### Run React with Vite

```
npm create vite@latest
Ok to proceed? (y) y

√ Project name: ... project-name
√ Select a framework: » React
√ Select a variant: » JavaScript

cd prject-name
npm add -D sass
npm install
npm run dev

-> Local Host
```

### Deploy Multiple Vite Projects in One Repository

**1. Initialize Git Repository**

```
git init
git add .
git commit -m "initial-commit"
git branch -M main
git remote add origin http://github.com/{username}/{repo-name}.git
git push -u origin main
```

**2. Update vite.config.js**

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/{repo-name}/{project-name}",
	build: {
    outDir: "dist/{project-name}",
  },
})
```

**3. Install gh-pages**

```
npm install gh-pages --save-dev
```

**4. Update package.json**

```
"homepage": "https://{user-name}.github.io/{repo-name}/{project-name}",
"scripts": {
    "predeploy" : "npm run build",
    "deploy" : "gh-pages -d dist -b gh-pages -p '/{project-name}'" --add,
    ...
}
```

- `-d` source root: dist

- `-b` branch: gh-pages

- `-p` path: /project-name

- `—-add` to ensure new deploy will not cover the exsisted fils under gh-pages root ✨

**5. Run Deploy**

```
npm run deploy
```

**6. GitHub Pages Settings**
GitHub -> Settings -> Pages (left sidebar)

- Select _Source_ as "Deploy from branch"
- Select _Branch_ as "gh-pages".

Our multiple vite projects sites will be live at
https://{username}.github.io/{repo-name}/{project-name}
