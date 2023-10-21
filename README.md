# bac_test
### Basic Client (React + Vite, basic CSS, no complex styles, no responsive, no CSS framework) + Basic API (Express)

### Client (React+Vite) deployed in Vercel Serverless Function [Click Here](https://bac-test-client.vercel.app/).

### API (Express) deployed in Vercel Serverless Function [Click Here](https://bac-test-api.vercel.app/).

## Client Routes

`GET /login/`

`GET /tracking/`

## API Routes 

`POST /Generate_Token/`
```json
{
    "username": "username",
    "password": "password" 
}
```


`GET /Tracking_parcel/`
```
tracking_number=BPS1EP58YI5SKBR
```

## Run Local
```
# Clone this repository
$ git clone https://github.com/dannyhill98/bac_test.git

# Go into the repository
$ cd bac_test

# Install dependencies
$ npm install

# Run the app
$ npm run dev

```

### Client (React+Vite) run on port 3000 [Click Here](http://localhost:3000).
### API (Express) run on port 3001 [Click Here](http://localhost:3001).

### Run API Tests
```

# Go into api folder
$ cd api

# Run tests
$ npm run test

```

