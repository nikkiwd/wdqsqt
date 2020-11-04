**Wikidata Query Service Query Titles**

This is a WebExtension for Firefox which makes it possible to add titles to queries in the [Wikidata Query Service](https://query.wikidata.org/) (and also the [beta Wikimedia Commons Query Service](https://wcqs-beta.wmflabs.org/)). The query title will then be inserted into the page title with the aim of making window/tab title and browser history more usable.

To add a title, add a comment to the query starting with `queryTitle:`, for example:
```SPARQL
#queryTitle: This is a very basic query
select * {
  ?item rdfs:label ?label .
} limit 10
```

The extension's code is based on [lucaswerkmeister/hide-twitter-trends](https://github.com/lucaswerkmeister/hide-twitter-trends).
