# Quote Simulation

🛠️ Application VUE-CLI (Vue 3, Vuex), CSS (Sass)

## 🚀 Project setup 
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```


## ✅ Features

1. User profile
2. Advice 
3. Quote simulation

### Story case :
_A doctor need to buy a insurance RC Pro contract. The doctor has already enter all her informations in a form on the website and she get a response from the API with a quote calculated based on her informations. 
The quote contains the differents covers, the deductible and the coverage ceiling. The doctor also received an advice from the backend for the best deductible and coverage ceiling formulas for her and what covers she sould subscribe based on her informations.
She can change the deductible and coverage ceiling formulas to get new prices and she can select / unselect covers that will change the total price of the quote._

## 📐 Project architecture
from the `src` folder

### Assets
#### sass
All the project style, splited as scss files depending on their use. Each file has their use explained and commented.

### Components
Components organized in Atomic Design Pattern ([see documentation](https://atomicdesign.bradfrost.com/chapter-2/)). 
The 3 principals features (user profile, quote & advice simulation) are splited as organisms components.

### Store
The store includes :
- State : datas stored (quote, etc.)
- Getters : computed properties stored (total price, etc.)
- Actions : requests (fetch quote)
- Mutations : to manage the datas stored 

### Utils
#### Mocks
All the mocks json files
- Advice (advice simulation from the backend) 🚧* 
- Covers (static informations of each cover : description, french name, etc.) 🚧*
- Deductible & coverage ceiling (static informations : description & french name)
- User informations (user payload) 🚧*


## 🚧 To improve
- *Advice: we should have a request to get the advice response from the back (documentation needed, route, response, etc.)
- *Covers: should we keep all theses informations on the front side? 
- *User informations: dynamic form
- Testing to implement

## ✨ Deployed Project 
https://quote-simulation.netlify.app/
