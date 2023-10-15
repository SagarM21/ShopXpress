# ShopXpress - E-Commerce Flutter App

Built using MongoDB, Nodejs, Cloudinary, Express, Flutter, Provider.

Successfully tested and used on an Android device.

## Features

- Email & Password Authentication
- Used provider for state management
- Searching and Filtering Products (Based on Category)
- Product Details
- Rating
- Getting Deal of the Day
- Add/Delete from cart
- Checking out with Google/Apple Pay - did not checked on ios due to device compatibility issues
- Viewing My Orders
- Viewing Order Details & Status
- Sign Out
- Admin Panel
  - Used Cloudinary to upload the products images
  - Viewing All Products
  - Adding Products
  - Deleting Products
  - Viewing Orders
  - Changing Order Status
  - Viewing Total Earnings

## Commands to run the app

## Server Side

```bash
  cd server
  npm install
  npm start
```

### Client Side

```bash
  flutter pub get
  Press ctrl+F5 to run the app in debug mode (if you are using VS code editor)
  flutter run
```

### env configurations

- Add mongodb url to your env file
- Add your own ip address to run the app

```bash
  Open terminal/bash
  ipconfig -- works in windows
```

- Add a custom secret for jwt tokens -- used for authentication purpose

## To Be Done/Fixed

- Viewing category based earnings on graph
- State Persistence sometimes create issues
