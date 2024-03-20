# Getters

### `GET` `/product`

route returns Array of **products** <br>

**Response:**<br>

```
[
    {
        "_id": ObjectID, // mongoDB ObjectID
        "title": String,
        "description": String,
        "img": String,
    },
]
```

<br>
<br>

### `GET` `/product/:id`

route returns an object of **single product** <br>

**Response:**<br>

```
{
    "_id": ObjectID, // mongoDB ObjectID
    "title": String,
    "description": String,
    "img": String,
}
```

<br>
<br>

# Setters

### `POST` `/product`

route create new Array of **products** <br>

**Response:**<br>

```
[
    {
        "_id": ObjectID, // mongoDB ObjectID
        "title": String,
        "description": String,
        "img": String,
    },
]
```

<br>
<br>

### `PATCH` `/product`

route updated Array of **single products** <br>

**Response:**<br>

```
[
    {
        "_id": ObjectID, // mongoDB ObjectID
        "title": String,
        "description": String,
        "img": String,
    },
]
```

<br>
<br>
