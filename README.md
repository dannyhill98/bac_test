# bac_test
Basic Client (React + Vite, basic CSS, no complex styles, no responsive, no CSS framework) + Basic API (Express)

## Client deployed in Vercel [Client](https://bac-test-client.vercel.app/login).

## API deployed in Vercel [API](https://bac-test-api.vercel.app/).

## API Routes 

`POST /Generate_Token/`

{
    "username": "username",
    "password": "password" 
}


`GET /Tracking_parcel/`

`tracking_number=BPS1EP58YI5SKBR`

## Run Local

Clone Repository

npm install

npm run dev

concurrently
Client (React+Vite) run on port 3000 [Client](http://localhost:3000).
API (Express) run on port 3000 [Client](http://localhost:3001).
