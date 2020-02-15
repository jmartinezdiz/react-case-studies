# React case studies
[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)

## What is it?
This reposoitory contains a case study set focused on learning some more advanced React things.

## Usage

With npm:
```shell
$ npm install
$ npm start
```

With yarn:
```shell
$ yarn install
$ yarn start
```

## Case studies


### ¿Can I use React without state?
This example serves to demonstrate how forceUpdate method works. Also, it demonstrates how state and setState are avoidable.

### I don't want update ヽ(ಠ_ಠ)ノ
This example shows how a component can avoid update himself if parent will be updated. This case is very useful for heavy components or components that need cache.

### The context
Context is a great tool for sharing data and methods within the React hierarchy. This case shows how to use context with new and old api.

### Components purity
This case shows the differences between Component and PureComponent. It is very useful for heavy components or components that need cache.

### Inheritance vs Composition
The goal of this example is how to share code by inheritance and by composition. This example allows you to see the differences between the two designs and to choose the most suitable one in each case.

### Component references
Referencing is a practice that should be avoided, however, it sometimes simplifies code that would otherwise be much more complicated to maintain. This example shows how to use them.

### Build components
Inheritance and composition are not the only creation patterns that React uses to reuse code. In this case study, we show how to use the builder pattern.

### Hooks, less lines, more fun
This case is a simple example of how to convert class components into functional components.

## Source project structure

    src                               # Project application source
    ├── app                           # Application main folder
    │   ├── assets                    # Contains all assets used by application
    │   ├── layout                    # Contains all components for layout creation
    │   ├── pages                     # Pages of application
    │   │   ├── case-studies          # Contains all case studies of proyect
    │   │   └── home                  # Main application page
    │   ├── routes                    # Contains all available routes in application
    │   └── App.js                    # React application main component
    ├── utils                         # Modules to create and configure react app
    └── index.js                      # React application init point

## Case study project structure

    case-studies                      # Case studies main folder
    ├── initial                       # Initial source code
    │   ├── components                # Contains all components used by initial source
    │   └── index.js                  # Main initial source
    ├── result                        # Result source codee
    │   ├── components                # Contains all components used by result source
    │   └── index.js                  # Main result source
    └── index.js                      # Main case study source

## Credits

- Developed by Jouk
- Template made with Material-UI https://material-ui.com/es/
- Icon logo made by Icon Pond from www.flaticon.es
