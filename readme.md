# SBA 318 Express Server Application

## Through this assignment i was able to
- Create a RESTful API using Express.
- Create Express middleware.
- Use Express middleware.
- Use a template engine to render views with Express.
- Interact with a self-made API through HTML forms.

---
Below I will detail the endpoints.

"/" - home page - says it is the home page.
"/characters" - returns json values of all the character information. This information is stored in the data/characters.js file. It contains an array of object containing properties in this format:
    ```    {
        id: 1,
        name: "Ryu",
        description: description here,
        ratings : [2.4,3.0,2.0,3],
        img_src : link_to_img
    }```
"/character?rate=3" - filters out characters with a rating less than 3
"/character/:name" - renders a page using a template engine displaying information on this character
"/character/:name?userId" - allows a user to change their userId in order to simulate posting comments on the characters page

"/users" - displays all users. Can make get and post. User data comes in an object of this shape:
    ```  {
        id: 2,
        name: "Chrispy"
    },```

"/users:id" - displays info on a user with this unique id. Can make get/patch/delete requests.
"/comments" - displays all comments. Can make get and post requests. Comment data is store in an object with this shape
    ```
        {
        id: 1,
        charId: 1,
        userId: 1,
        content: "Sample comment"
    },
    ```

"/comments/:id" - displays comment with this unique id. Can make get/patch/delete requests.

Moving forward I'm interested in adding functionality to allow users to add in their own ratings on the rendered page rather than using the hard coded values.