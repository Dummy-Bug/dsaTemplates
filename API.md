# DSA Templates App API Documentation

## Get All Topics

Retrieve all available topics.

**Endpoint**

### GET /topics

**Response**

- Status Code: 200 OK
- Content-Type: application/json

```json
[
    {
        "topicId": 1,
        "topicTitle": "Arrays",
        "numberOfQuestions": 25
    },
    {
        "topicId": 2,
        "topicTitle": "Linked Lists",
        "numberOfQuestions": 30
    },
    {
        "topicId": 3,
        "topicTitle": "Backtracking",
        "numberOfQuestions": 55
    }
]
```

## Error Responses
- Status Code: 404 Not Found
- Content-Type: application/json

```

{
    "error": "Resource not found"
}

```
