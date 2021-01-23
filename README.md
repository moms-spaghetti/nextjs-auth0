# NextJS Auth0

I created this using NextJS combined with Auth0 to testing various solutions for protecting our final project site behind authentication.\
<br/>
[View Demo](https://nextjs-auth0-i9wlpjq24.vercel.app/)\
You can log into the site by signing in with a google account.
<br/><br/>

## Details

Testing how to protect routes to private pages behind Auth0 authentication. Attempting to access other pages directly will reroute the user back to the login page. I used an npm package called next-auth to integrate auth0.\
<br/>

## Built With

- HTML
- CSS
- Javascript
- NextJS
- Next Auth
- Auth0
  <br/><br/>

## Getting Started

Clone the repo as instructed below and download npm modules.
<br/><br/>

## Prerequisites

Download and install npm modules.
An auth0 account.
A .env.local file in the root folder
<br/><br/>

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/moms-spaghetti/nextjs_auth0.git
   ```
2. Download the required npm modules
   ```sh
   npm i
   ```
3. Create an auth0 account with a new single page application. Skip the screen which confirms what your application has been written in.
4. Create a .env.local file in the root directory with the below entries. Fill in the details for each entry from your Auth0 account under the settings for your application.
   ```sh
   NEXT_PUBLIC_AUTH0_CLIENT_ID=
   NEXT_PUBLIC_AUTH0_CLIENT_SECRET=
   NEXT_PUBLIC_AUTH0_DOMAIN=
   NEXT_PUBLIC_NEXTAUTH_URL=http://localhost:3000
   ```
5. Add the callback url to your application settings in Auth0
   ```sh
   http://localhost:3000/api/auth/callback/auth0
   ```
6. Start the application
   ```sh
   npm run dev
   ```
   <br/><br/>

## Usage

After opening the page, click the login button to be redirected to Auth0 and log in using a google account. The protected pages will be accessible after log in.
<br/><br/>

## Contact

[Email](mailto:williamedwards36@aol.com)
<br/><br/>
