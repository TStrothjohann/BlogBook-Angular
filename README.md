[![Build Status](https://travis-ci.org/TStrothjohann/BlogBook-Angular.svg?branch=master)](https://travis-ci.org/TStrothjohann/BlogBook-Angular)
[![Code Climate](https://codeclimate.com/github/TStrothjohann/blogbookJS/badges/gpa.svg)](https://codeclimate.com/github/TStrothjohann/blogbookJS)
[![Test Coverage](https://codeclimate.com/github/TStrothjohann/BlogBook-Angular/badges/coverage.svg)](https://codeclimate.com/github/TStrothjohann/BlogBook-Angular)

# BlogBook: An AngularJS Blog Aggregator

BlogBook is a single page blog aggregator. It's based on an Express (node.js) server and written in AngularJS. I started it as a team project in *week 6* of Makers Academy and went back after the course to improve test coverage and to refactor. Originally we wanted to explore Angular's filter functions and gain experience in querying API content.

[Demo on Heroku](https://blogbook-demo.herokuapp.com/)

###Features
**Pulls posts from wordpress.com:** The core feature of BlogBook is displaying the newest blog posts from several wordpress.com blogs. They get loaded dynamically when the user loads the page.

**Filters:** Users can filter the posts by author and sort by date.

**Design:** It was my first experience with Bootstrap. Nothing very special but repsonsive.

###ToDo
*Admin-Backend:* So far you have to add new blogs to an array in the stream controller. I have different ideas how to change that:
  - My favourite solution would be to pull all blogs from a Google-Spreadsheet that is used at Makers Academy to keep track of students' blogs. This way BlogBook could update itself.
  - The quickest way would be, to pull the blog list from a json file saved to the server. I could add a feature to add new blogs to the file.
  - The cleanest way to store blogs would be a database. In a database I could add blogger profiles. This way I could add the functionality to filter by cohort-membership (show all posts written by students of the February 2015 cohort). A database would have to be updated though.


Before we started building BlogBook I mocked up the architecture like this:

![BlogBook Architecture](/public/BlogBookArchitecture.jpg "BlogBook Architecture")