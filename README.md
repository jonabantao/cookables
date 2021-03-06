[<img src="https://i.imgur.com/ujt7Utj.png">](https://www.makemunchables.com/#/)

[Munchables](https://www.makemunchables.com/#/) is a single page web application clone inspired by [Instructables](https://www.instructables.com/) where users can post and share recipes and comment on other users' creations. Munchables uses Ruby on Rails on the backend, BCrypt handling user's password security, PostgreSQL for its database, and React/Redux for the front end. 


# Features
## Search
<div align="center">
  <img src="https://i.imgur.com/G5Yxn8f.gif">
</div>

Similiar to Instructable's Search, Munchables allows you to search for multiple words and return recipe titles that match with any words that you've input. In addition, like Instructables, search terms that have been input on the navigation search bar are stored in the main search bar in the Search page to help remember what the user was looking for.

The search parameter is handling in the backend through ActiveRecord and basic regex, which removes trims any whitespace, removes all punctuation except for any hyphens and checks if the word is anywhere in the title text. For example, while 'chicken' will match all chicken recipes, typing 'hicken' will not return the same results.

## Munchables Creation

<div align="center">
  <img src="https://i.imgur.com/rlu4UQG.jpg" style="width: 500px;">
</div>

Users are able to access the Write a New Munchable page through the navbar or through the user dropdown menu on the top left. The same container was used for before and after Munchable creation. In order for the steps to keep track of which Munchable they were attached to, a user has to first submit the initial recipe information before continuing. 

The backend protects users from unauthorized AJAX PATCH requests to their Munchables by checking if the author's id of the Munchable is the same as the currentUser's id.

In the front-end, the user is redirected back to the root page if they are not the author of the Munchable, but in order for the prevent the actual author from being redirected on a page reload, this check comes after the promise returns from the AJAX GET request.


## Loading Spinners
<div align="center">
  <img src="https://i.imgur.com/wMhKNyy.gif">
</div>
There are times where the AJAX promise is not returned quickly enough before a render. In these cases, the webpage would crash because some of the rendering relies on the object being already stored in the state. In order to fix this, a null check was created along with certain AJAX requests sending Loading actions to the Loading reducer. Components that rely on this first check if they are waiting for the promise.

# Planned Features
* **User Profile Page** (DONE)

  Users should be able to edit their profile, check which Munchables they have created and favorited.
* **Add more images to one recipe** 

  Currently, a user is able to upload one video and one image per Munchable. 
* **Categories**

  Users will be able to navigate through Munchables and tag their own creations through categories.
* **Add infinite scrolling for recipe index views**
* **Feature recipes ordered by how many users have favorited the Munchable, then randomized and selected**

* **Testing**

  Coverage of Jest and Enzyme in the frontend, Rspec for backend tests
