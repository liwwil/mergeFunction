## Set Up The Project

### Install Typescript in MacOS
```bash
brew install typescript
```

### Initial Project
```bash
npm init -y
```

### Setup Jest Dependency 
```bash
npm install typescript jest ts-jest @types/jest --save-dev
```
---
### Testing 
1. Create file 'jest.config.ts' at root directory of the project
```javascript
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
};
```

2. Edit package.json 
```json
"scripts": {
  "test": "jest"
}
```
3. Run Test!!
```bash
npm test
```








