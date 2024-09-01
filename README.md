## Steps to run the tRPC server and client


1. Go to the backend folder

```
cd backend
```

2. Install dependencies

```
npm install
```

3. Initialise prisma client

```
 npx prisma migrate dev --name init

```


4. Run the express server using ts-node

```
npx ts-node src/index.ts
```


5. Go to the client

```
cd client/frontend
```

6. Install dependencies

```
npm install
```

7. Run the react server

```
npm run dev
```

