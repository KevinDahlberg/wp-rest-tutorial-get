# Wordpress REST API Tutorial - GET Requests

## Requirements
Wordpress 4.7 and higher.

## Summary
GET requests with the Wordpress REST API are the easiest requests you can make.  They don't require authentication, and you can theoretically pull from any site anywhere on the web, just like any other API.  

Most of the material that I have found on the web uses AJAX calls with jQuery.  For my purposes, I needed to be able to use the WP API with AngularJS, so I provided $http requests as well.

## What you get from the request
The standard GET request for the REST API sends back a JSON object with the posts and the information included with them, such as the author, date, meta, and more.  There's a LOT that can be retrieved with a GET statement and the Wordpress API.  Basically if it's in the database, you can probably retrieve it.

More information about what is available can be found at:
https://developer.wordpress.org/rest-api/reference/

## Requests:
The first sample request given on the Wordpress Developer website is this:
$ curl http://demo.wp-api.org/wp-json/wp/v2/posts

My first thoughts when seeing something like that included a bunch of expletives and a blank stare at the screen.  I don't know a lot about this thing called coding, but I know that's not in a language that I know yet.  So the digging began.  First I found out how to do it with an AJAX call with jQuery


#### AJAX

```
$.ajax({
  type: 'GET',
  url: 'http://website.com/wp-json/wp/v2/posts',
  success: (response) => {
    //do something with the response
  }
});
```

That was good for me, but I needed to make it work in AngularJS.  Fortunately the GET request is pretty simple to figure out (it's the other ones which drove me up the wall)

#### $http (Angular JS)

```
$http.get('http://website.com/wp/v2/posts').then((response) => {
  //do something with the data
});
```

## Doing More...
As I said earlier, you can get all sorts of stuff with a GET request with the Wordpress REST API.  You can also filter the results based on a bunch of different parameters to meed the needs of your application or theme you are putting together.  

Here's an example of a request I did for a recent application:

```
let getRun = (user_ID) => {
  $http.get(WPsettings.root + 'wp/v2/posts?filter[author]=' + user_ID).then((response) => {
    DB.currentUser.populateRuns(response.data);
  });
};
```

This request gets the posts filtered by the author with the ID of the user that is signed in.  I'll go more into depth on authentication and some of the other cool stuff you can do with the REST API in another tutorial.  

More information on endpoints and different requests that you can make with the Wordpress REST API can be found in the documentation at:
https://developer.wordpress.org/rest-api/reference/
