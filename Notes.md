**Core Protocol Verbs from the Client**

- GET
- POST
- PUT
- DELETE

GET - gets a file (the client is asking the server for a file via GET)

POST - Send over to data that will be added to a database

PUT - Is an update existing data

DELETE - Delete a piece of data

**Core Server Responses**

1) Status code:

- 200 = successful
- 404 = Not found
- 500 = Something is wrong with the server

2. Data/what was requested



**How to Send Data Between Client/Server**

How to send data to servers with different code bases (i.e., languages like Python)

- JSON (JavaScript Object Notation)
- XML

Two functions for passing data to and from JS to another server

Convert to a JS Object: JSON.parse()

`var obj = JSON.parse('{"name":"John", "age": 30, "city": "New York"}');`

Convert a JS Object: JSON.stringify()

`var myJSON = JSON.stringify(obj);`


**AJAX (Asynchronous JavaScript and XML)**
