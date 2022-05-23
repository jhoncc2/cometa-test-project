This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The implementation is located in the next direction: 

```
http://localhost:3000/instalment
```


## Installation

There are two ways of installation: a) docker-compose or b) manually

### docker-compose

```bash
docker-compose up
```

This will install all the necesary to run the project in the [http://localhost:3000](http://localhost:3000) url.


### Manually

Otheriwise, use the next commands to run the project locally.

```bash
npm install
and 
npm run dev
```

## Testing

Tests were developed only for critical functions that (I think) might lead to an error. Component testing as well as tests for Reducer were avoided for time purposes.
Test are run by the command 

```bash
npm run test
or 
docker-compose run instalment npm run test
```
Although this requires that all the dependencies are installed before.

