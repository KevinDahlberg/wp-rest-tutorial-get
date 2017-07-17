/**
 * @desc jQuery AJAX Call that gets posts from a particular website with the
 * Wordpress REST API
 * @return {object} that includes the post data
 */


$.ajax({
  type: 'GET',
  url: 'http://website.com/wp-json/wp/v2/posts',
  success: (response) => {
    //do something with the response
  }
});

/**
 * @desc AngularJS $http request that gets the posts from a particular website with
 * the Wordpress REST API
 * @return {object} that includes the post data
 */
$http.get('http://website.com/wp/v2/posts').then((response) => {
  //do something with the data
});
