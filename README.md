# nextjs-azure-static-webapp

Simple site to manage a list of media files.

Based on nextjs and deployable as an Azure Static Webapp.

## System requirements

- nextjs
- azure functions cli

## Project structure

The functions are in the `api` folder.

The nextjs site is in the `web` folder.

## Run locally

### Terminal 1

```
cd api
func start
```

### Terminal 2

```
cd web
npm run dev
```

## Links

- [Building An Next.js App With Azure Static Web Apps Service](https://medium.com/bb-tutorials-and-thoughts/building-an-next-js-app-with-azure-static-web-apps-service-91f3d360927b)
- [https://github.com/bbachi/next-azure-static-web-app](https://github.com/bbachi/next-azure-static-web-app)
- [https://github.com/phwt/azure-static-web-apps-nextjs](https://github.com/phwt/azure-static-web-apps-nextjs)
  