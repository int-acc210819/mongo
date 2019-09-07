node: 10.16.3
mongod: 4.2.0

start project: ```npm run start```

---
##Task

```
Scope
● Build an analytics API that will collect and analyze analytics events from a website
● Analytics event is a key-value object that contains data on a specific event like page-view.
● Our web app contains different pages that are identified by page-id each
● Our web-app send unique anonymous identifier for each user

API Requirements
● Expose rest endpoint to ​ collect​ ​ page-view events (HTTP calls from clients).
○ Events can contain the following parameters (all not mandatory):
timestamp, user-id, page-id
● Expose rest endpoint to ​ get​ page-views by page-id
● Expose rest endpoint to ​ get​ page-views by a browser name (can be extracted from the user
agent)
● Expose rest endpoint to ​ get​ page-views by country (should be extracted from the user IP)
● Expose rest endpoint to ​ get​ the rate of returning users (users who visited more than once ) out of
all the unique users who visited.
All GET endpoints should be accessed only with “6i2nSgWu0DfYIE8I0ZBJOtxTmHJATRzu” token string
in the Authorization header.

Technology Stack
● Node.js
● Data store of your choice
```
___
###Endpoint list

- create event
    ```
    curl -X POST \
      http://localhost:3000/page-view \
      -H 'Authorization: 6i2nSgWu0DfYIE8I0ZBJOtxTmHJATRzu' \
      -H 'Content-Type: application/json' \
      -d '{
        "ip": "178.32.59.233",
        "page-id": "queRy123",
        "user-id": "somEOne-user-123",
        "browser": "Chrome",
        "timestamp": "07.09.19 15:00"
    }'
    ```

- get by page
    ```
    curl -X GET \
      'http://localhost:3000/page-view/page?page-id=query123' \
      -H 'Authorization: 6i2nSgWu0DfYIE8I0ZBJOtxTmHJATRzu' \
      -H 'Content-Type: application/json' \
    ```
  
- get by browser
    ```
    curl -X GET \
      'http://localhost:3000/page-view/browser?browser=chrome' \
      -H 'Authorization: 6i2nSgWu0DfYIE8I0ZBJOtxTmHJATRzu' \
      -H 'Content-Type: application/json' \
    ```
  
- get by country
    ```
    curl -X GET \
      'http://localhost:3000/page-view/country?country=gb' \
      -H 'Authorization: 6i2nSgWu0DfYIE8I0ZBJOtxTmHJATRzu' \
      -H 'Content-Type: application/json' \
    ```
  
- get uniq users on page
    ```
    curl -X GET \
      'http://localhost:3000/page-rate?page-id=query123' \
      -H 'Authorization: 6i2nSgWu0DfYIE8I0ZBJOtxTmHJATRzu' \
      -H 'Content-Type: application/json' \
    ```