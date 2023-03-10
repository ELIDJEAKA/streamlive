
# StreamLive 

This project is a POC to demonstrate my skills in ReactJS development.
However, for the development of this project; I preferred to use the technologies highlighted during my first interview with the team such as RXJS, Jest, going from a project from Scratch...




## Liens utilisés

 - [The Movie DB documentation](https://developers.themoviedb.org/)
 - [Trello Task management](https://trello.com/b/LiThWTLW/streamlive)
 


## API Reference

#### Get movies

```http
  GET /movies
```

#### Gets series

```http
  GET /series
```

#### get details by movie or serie

```http
  GET /details?id=number&type=movie_or_tv
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of movie or tv |
| `type`      | `string` | **Required**. serie or movie |


#### search movies or series by url with query params

```http
/series?language=string&genre=&page=string&genre=string
/movies?language=string&genre=&page=string&genre=string
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `language`      | `string` | **optionnal**. language can be en-US... |
| `genre`      | `string` | **optionnal**. genre can be Comedy... |
| `page`      | `string` | **optionnal**. page can be 1,2 |



## Appendix

Any additional information goes here


## Authors

- [@elidjeaka](https://github.com/ELIDJEAKA)


## Demo

Insert gif or link to demo


## Deployment

To start this project run

```bash
  npm start
```

To test this project run

```bash
  npm test
```


## Documentation

[Documentation](https://linktodocumentation)


## Environment Variables

insert the api key in this file src/api/config.ts

`apiKey` 




## 🚀 About Me
I'm a full stack developer...


## Running Tests

To run tests, run the following command

```bash
  npm test
```


## Tech Stack

**Client:** React, RXJS, TypeScript, axios, bootstrap, react-router-dom, query-string, jest, @testing/library




## Installation

Install my-project with npm

```bash
git clone
cd my-project
npm install
npm start

```
    