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

1. User Information
2. Advice 
3. Quote simulation

+ explain uses case

## 📐 Project architecture

### Components
Components organized in Atomic Design Pattern (see [Documentation](https://atomicdesign.bradfrost.com/chapter-2/)). 

The 3 principals features are splited as organisms components.

### Store
The store includes : 
- State : to store the datas
- Getters 
- Actions : for the requests
- Mutations : to manage the datas stored 

### Utils/Mocks
All the mocks json files
- Advice 🚧 (advice simulation from the backend)
- Covers details 🚧 (details of each cover : description, french name, etc.)
- Coverage & deductible informations (description & french name)
- User payload 🚧 (user informations)


## 🚧 To do later / to think about
- Advice : we should have a request to get the advice response from the back (documentation needed, route, response, etc.)
- Covers details : should we keep all theses informations on the front side ? 
- User payload : dynamic form to do on the front.
