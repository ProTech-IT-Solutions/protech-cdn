# adding a package

1. find a good package to link
2. goto another service like CDN.js, and search the package.
3. open the main file (long, confusing)- it should be minified where possible.
4. copy everything and make a new file under this name:

```
packagename/packagename.extension
```

paste everything into the file, it should be in a folder.

5. goto server.js and add this to link the package to a route, we reccomend grouping it
with the other package:

```node
app.get("/WHATEVERNAMEYOUWANT", (request, response) => {
  response.sendFile(__dirname + "packagename/packagename.extension");
});
```
