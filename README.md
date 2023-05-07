### To run the development server:

```bash
npm run dev
```

### Important Notes

You will need to change the URL in /api/tasks/fetch.ts each time the k8s cluster and related Static External IP are rebuilt.

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

    Khyme API at this time accepts POST requests on :3001/tasks and requires just a string attribute called "url" in the body.

03-26-2023

    Deploy frontend with api inside the same pod. Keep in mind here that the javascript actually executes inside the user's     
      
       browser, not inside the cluster. Currently working on allowing external traffic into the cluster.

04-08-2023

    Successfully getting traffic into the cluster. 

    You must stand up all gcloud infrastructure following kubernetes-terraform project and 
        
        deploy/configure khyme and database pryor to deploying frontend witht he yaml files in this project.

    Dockerfile exposes port 3002 so once deployed (frontend again separated into its own pod) execute
    
        `kubectl port-forward <frontend pod name> 3000:3002 --namespace=khyme-system`

    Open Chrome browser to localhost:3000/ and click 'Get Tasks' button to see data returned in network tab.

05-07-2023

    Design decision made to embed video in PostBody
