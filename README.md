# Setup Instructions

### Option 1: Docker
- Make sure Docker is installed
- Clone repo and **cd** in
- **docker build -t reactdemo:0.1 .**
- **docker run -d -p 3001:3001 reactdemo:0.1**
- Navigate to **http://localhost:3001**

### Option 2: Non-container
- Make sure iojs is installed (version supporting let & const)
- Install gulp - **npm i gulp -g**
- Clone repo and **cd** in
- **npm i**
- **gulp all**
- **npm start**
- Navigate to **http://localhost:3001**