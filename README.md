# React Router Dom

This is a summary of the [React Router tutorial](https://reactrouter.com/en/main/start/tutorial).

## In a nutshell

An application needs a method allowing to navigate between its differents screens.

A ```router``` can serve this purpose, and in the case of SPAs (single page apps), it allows to change screens without reloading the entire app.

This gives the user the impression of instantaneousness and performance.

React Router is a library providing this sort of client-side routing for React apps.

## 1. Add a router

```createBrowerRouter```: as of the time of this writing, this is the "recommended router for all React Router web projects".

At its simplest, it takes a **path** (usually a *slug* or the last segment of the url) and an **element** (usually a component we can name ```<Root />```):

```Javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
```

This first path is our *root route*: all other roots will render inside of it as its **children**.

The root route contains the UI layout of the app, usually with the navigation links of the app.

## 2. Add a component to render the router

```RouterProvider```: this is the component that React will use to render the router.

While the router loads, you can use ```fallbackElement``` to show a spinner or something to let the user know a page is loading. 

```Javascript
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider
    router={router}
    fallbackElement={<BigSpinner />}
  />
);
```

## 3. Add an error page component

For a better user experience, an error page can be created and linked to the root route using ```errorElement```.

```Javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
]);
```

## 4. Add children routes

Children routes allow to render components within the layout declared in the Root component.

```Javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />, 
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      }
    ]
  },
]);
```

To render the child within the parent, we need to declare the ```<Outlet />``` component in the <Root />.

## 4. Linking with Links

The ```<Link></Link>``` component is like an ```a``` element, only that it will not reload pages when linking (see the inspect network tab).

## 5. Load data

React Router has a convention when loading data into a view.

It provides two APIs: 

```loader```
```useLoaderdata```

