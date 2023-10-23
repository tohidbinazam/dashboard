## 🔴How to explore this project with live experience?

Just copy the link and past it in your browser address bar,

```HTML
https://doccure-dashboard.onrender.com/
```

## How to run this project on local machine?

`Recommended terminal: git bash`

### 1. Download this project or command with git clone

```HTML
git clone https://github.com/tohidbinazam/dashboard.git
```

Note: Copy any code and just right-click on the mouse in your terminal,  
Result: Auto past it.

### 2. Open the terminal in the project root folder 'Instagram' and run those commands

```HTML
cd client
npm install
touch .env
start .env
```

and past the bellow code in .env file 👇

```HTML
VITE_API_VERSION = /api/v1
```

### 3. Go the project root folder and create a file, named '.env' by using this command

```HTML
cd ..
```

```HTML
npm install
touch .env
```

### 4. Open the .env file by 1st command, past the bellow codes, and update with those variables

```HTML
start .env
```

```HTML
PORT = 5000
NODE_ENV = development
MONGO_URI = ``Hear is your MongoDB database string``
JWT_SECRET = ``JWT secret key``

HOST_EMAIL = ``APP password Email address``
PASSWORD = ``APP password``

DOMAIN = ``Allowed domain names are serrated by comma``
```

Note: [Tohid Bin Azam](https://www.facebook.com/tohidbinazam/) Facebook profile,\
If facing any issues you can knock me from here.

### 5. In the Root folder terminal past this final code

```HTML
npm start
```

If everything is ok,
Runs the app in the development mode. Automatically open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
