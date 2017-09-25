# Coding Challenge
We want you to create a simple page that lists some users in a table. We have provided you with a simple backend that should contain everything for you to get started. The list must contain the 

- users name, 
- username, 
- email, 
- phone number 
- company

The backend has two endpoints: 
* `/` Is the root of the application, this will return an empty HTML page with some links to a CSS and JavaScript file. It's up for you to write some code in these files for everything to work

=====================
USE THIS API
=====================
* `/api/users`
 Is an enpoint which returns a JSON collection with 10 users

You are almost free to use whatever tools and libraries you’d like however there are some requirements and restrictions, which you’ll find under here.

## Restrictions
* You may not use a CSS framework such as Bootstrap
* When you use JavaScript, we would prefer if you did not use libraries such as jQuery, but it’s up for you to decide if that makes sense, given the simplicity of the page.

## Requirements
* The page and table must be responsive, with a “mobile-first” approach in mind.
* You must use appropriate YouSee colors. You can find colors by inspecting any page under the https://yousee.dk/ domain.
* The users must be fetched asynchronously using JavaScript.
* Unfortunately the backend is sometimes rather slow. So you must display a loading indicator while you're loading the data.

## Starting the application
* Unzip the project
* Open your terminal and navigate to the folder where you extracted the project to
* Run `npm install` to install some dependencies
* Open the project in your text editor
* And last, but not least, run `node app.js` to start the application