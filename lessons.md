## File system

### To read/write files,

- add fs.readFile(path.join(\_\_dirname,<foldername>,<filename>))

- fs.writeFile(path.join(\_\_dirname, <folder>, <file>),<content to write>, fn)

## NPM - package manager

- using nodemon to run the nodejs without using terminal cmds
- initialize npm by `npm init`
- npm watches `package.json` to see what packages to install from npm
- node_modules folder gets bloated easily as one package might have dep on another package and it will be downloaded as well.
- To install as dev dep, use `npm i nodemon -D`
- scripts: {
  "start" : "node index",
  "dev": "nodemon index"
  }
- To run project, `npm run dev`

## Event Emitter
