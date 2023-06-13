```mermaid
sequenceDiagram
    participant browser
    participant server


    browser->>server: POST Https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of browser: User sends input from form (content & date)
    Note right of browser: Content-type: application/json

    activate server
    server-->>browser: HTML document
    deactivate server


    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server


```