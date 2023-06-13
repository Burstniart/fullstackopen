```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: User input sent to server POST request

    Note right of browser: "Note" input in form is filled by the user & sent to "/new_note" when the submit button is clicked
    Note right of browser: Server process the body of the POST request and creates adds a new note object, wich consists of the request body and the creation date, to the notes array

    activate server
    server-->>browser: HTTP status code 302
    deactivate server

    Note right of browser: URL redirect, asks the browser to do a new HTTP GET request
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    
```