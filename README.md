### To run the development server:

```bash
npm run dev
```

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Development Log

03-20-2023

    Created new React app with Next.js

03-21-2023

    Followed Next.js section of Fullstack React with Typescript e-book to learn project structure with Next.js

    npm installed: body-parser, concurrently, cors, express, node-fetch, ts-node

        in order to run a local express API server to 'hydrate' my Server-Side Rendered pages.

        TODO: use my Khyme API to hydrate pages.

03-22-2023

    Added Redux to project with next-redux-wrapper package

03-23-2023 

    Added a Dockerfile because I am working on running this in a K8s pod with the Khyme API.

    Khyme API at this time accepts POST requests on :3000/tasks and requires just a string attribute called "url" in the body.
