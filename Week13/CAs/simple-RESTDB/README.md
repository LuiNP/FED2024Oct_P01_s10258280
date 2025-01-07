# Simple RESTDB
This is a simple RESTDB example with Create, Read, Update features

## CRUD
** GET **    - Retrieve information
** POST **  - Create new information 
** PUT **   - Update information
** DELETE ** - Delete information

# @TODO CA 
- Either fork the repl.it or create your own code.
- Create a Student CRUD which has the following fields
Name, Student ID, Student Mentor, Student Class and 2 other suitable fields
- Use proper form elements for different fields required
- Attempt to create Delete feature. Refer to RESTDb API sample code and this repl.it code
- Suggest and implement ways to make the Dashboard more interactive
- Consider playing with Charts

# References
- [jQuery Fadeout - animates a fading effect and hides the  selectedelement](https://api.jquery.com/fadeout/)
- [Restdb.io](https://restdb.io/)

# Common Mistakes
Placing JS scripts in the wrong order. The ** sequence matters. ** 

The following causes jquery not to be found as its loaded last. If you had reference jQuery code e.g using $ in your code, most probably you have a $ not found issue that appears in your console.
** Wrong Order **
```html
<body>
  place <your own script>.js
  place bootstrap.js
  place jquery.js
</body>
```

** Correct order **
```html
<body>
  place jquery.js
  place bootstrap.js
  place <your own script>.js
</body> 
```
  
** Linking your files via the root **
Some common pathing errors happens when you link via your root

```html
<a href="/<foldername>/<filename>">Link <a/>
```
This creates an issue as it will attempt to reach your root folder. The root folder is basically like your C:// on the server. As you may be using VSCode, your site appearst as 127.0.0.1/index.html and this is fine. BUT when you are placing your code on repl.it or say Github Pages, then the root folder resides differently. Causing a string of problems that happens. Photos not appearing, links not working.

How we fix it?
Use proper relative pathing
**/project** 
**-- /img**
---- a.jpg
---- b.jpg
**-- /css**
---- main.css
**index.html**

So how do we access the main.css from our index.html?
```html
<link rel="stylesheet" href="css/main.css">
```
Acessing a.jpg?
```html
<img src="img/a.jpg">
```

# Wanna Know More? Read on
- [NoSql vs SQL](https://www.mongodb.com/nosql-explained/nosql-vs-sql)

- [Great Technical Video on SQL vs Non SQL](https://www.youtube.com/watch?v=ZS_kXvOeQ5Y)
- [What is a REST API](https://www.youtube.com/watch?v=lsMQRaeKNDk)
- [GET, POST, PUT, DELETE](https://medium.com/@9cv9official/what-are-get-post-put-patch-delete-a-walkthrough-with-javascripts-fetch-api-17be31755d28)
- [HTTP Methods](https://assertible.com/blog/7-http-methods-every-web-developer-should-know-and-how-to-test-them)
- [RESTDB RESTful API](https://restdb.io/docs/rest-api#restdb)
- [PUT vs PATCH](https://www.dorusomcutean.com/crud-put-vs-patch/)
- [Using HTTP Methods for RESTful Services](https://www.restapitutorial.com/lessons/httpmethods.html)


