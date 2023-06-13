```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: User sends input from form (content & date)
    Content-type: application/json

    browser->>server: POST Https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: HTML document
    deactivate server


    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server


```