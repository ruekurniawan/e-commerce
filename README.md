# e-commerce
# server

List of basic routes :

| ROUTE             | HTTP | HEADER(S) |     BODY     |   DESCRIPTION   |
| ----------------- | ---- | --------- | ------------ | --------------- |
| `/users/register` | **POST** | `none` | `fullname: String (`**`Required`**`), email: String (`**`Required`**`), password: String (`**`Required`**`)` | Create a user |
| `/users/login` | **POST** | `none` | `email: String (`**`Required`**`), password: String (`**`Required`**`)` | Login user |


List of user routes :

| ROUTE             | HTTP | HEADER(S) |     BODY     |   DESCRIPTION   |
| ----------------- | ---- | --------- | ------------ | --------------- |
| `/products` | **POST** | `none` | `name: String , price: Number,  image: File, stock: Number` | Post a Product |
| `/products` | **GET** | `none` | `none` | Get all Products|
| `/products/:id` | **DELETE** | `none` | `none`|  Delete Product |
| `/cart` | **PUT** | `token` | `none`|  add to cart a Product |
| `/cart/:id` | **PUT** | `token` | `none`|  remove one product from cart |
| `/cart/` | **GET** | `token` | `none`|  Get Cart |
|`/checkot`| **POST**| `token` | `none` | create Checkout|


### POST users/register
Success (201)
```
{
    "role": "user",
    "_id": "5cbc8dd1a637bd1206ef97c9",
    "fullname": "sukses",
    "email": "sukses@gmail.com",
    "password": "$2b$08$ixiCQEVRvULVMEM86bfLjuiyT8Zg0l8wOOKyZwArmaTTTgojGoU0e",
    "__v": 0
}
```
Error (500) Internal Server Error
```
{
    "errors": {
        "fullname": {
            "message": "fullname is required",
            "name": "ValidatorError",
            "properties": {
                "message": "fullname is required",
                "type": "required",
                "path": "fullname",
                "value": ""
            },
            "kind": "required",
            "path": "fullname",
            "value": ""
        },
        "email": {
            "message": "Validator failed for path `email` with value `sukses@gmail.com`",
            "name": "ValidatorError",
            "properties": {
                "message": "Validator failed for path `email` with value `sukses@gmail.com`",
                "type": "user defined",
                "path": "email",
                "value": "sukses@gmail.com",
                "reason": "Email has been used"
            },
            "kind": "user defined",
            "path": "email",
            "value": "sukses@gmail.com",
            "reason": "Email has been used"
        }
    },
    "_message": "user validation failed",
    "message": "user validation failed: fullname: fullname is required, email: Validator failed for path `email` with value `sukses@gmail.com`",
    "name": "ValidationError"
}
```

### POST users/login
sukses(200)
```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYmMwMmE2OGMwZWE1MGIzMzg2NWE5NCIsImlhdCI6MTU1NTg2MTI3NX0.uqlM9hLDHMRvE1_k_921LnW2QqPGjhF4zvaAIlAnpQU",
    "role": "user"
}
```
Error (400)
```
{
    "msg": "Invalid Email / Password"
}
```

### POST products/
Sukses (201)
```
{
    "_id": "5cbc9a26a637bd1206ef97cc",
    "name": "Sepatu",
    "price": 1000000,
    "stock": 5,
    "image": "",
    "__v": 0
}
```

Error (404)
```
{
    "msg": "U must be login"
}
```

### GET products/
Sukses (200)
```
[
    {
        "_id": "5cbaa345205d9129f3b16136",
        "name": "Sepatu",
        "price": 100000,
        "stock": 10,
        "__v": 0
    },
    {
        "_id": "5cbaa67bd1b59f2a77e45856",
        "name": "Sepatu ke 2",
        "price": 100000,
        "stock": 1,
        "__v": 0
    },
    {
        "_id": "5cbac459b7a2d159053e2f95",
        "name": "Sepatu",
        "price": 1000000,
        "stock": 5,
        "image": "",
        "__v": 0
    },
    {
        "_id": "5cbac83fe02ca25fa2b3b400",
        "name": "Sepatu",
        "price": 1000000,
        "stock": 5,
        "image": "https://storage.googleapis.com/e-commerce_file/1555744830206HP_Slate_6_VoiceTab_2_L_1.jpg",
        "__v": 0
    },
    {
        "_id": "5cbac998e02ca25fa2b3b401",
        "name": "Sepatu",
        "price": 1000000,
        "stock": 5,
        "image": "https://storage.googleapis.com/e-commerce_file/1555745173195HP_Slate_6_VoiceTab_2_L_1.jpg",
        "__v": 0
    },
    {
        "_id": "5cbad13e6fdf696c8a176827",
        "name": "HP Samsung",
        "price": 10000000,
        "stock": 9,
        "image": "https://storage.googleapis.com/e-commerce_file/1555747133542download.jpeg",
        "__v": 0
    },
    {
        "_id": "5cbc271054f52e365bd3a1a6",
        "name": "Sepatu",
        "price": 1000000,
        "stock": 5,
        "image": "",
        "__v": 0
    },
    {
        "_id": "5cbc9a26a637bd1206ef97cc",
        "name": "Sepatu",
        "price": 1000000,
        "stock": 5,
        "image": "",
        "__v": 0
    }
]
```

Error (404)
```
{
    "msg": "U must be login"
}
```

### Delete /products/:id
Sukses (200)
```
{
    "_id": "5cbaa345205d9129f3b16136",
    "name": "Sepatu",
    "price": 100000,
    "stock": 10,
    "__v": 0
}
```

Error (404)
```
{
    "msg": "U must be login"
}
```

### PUT carts/
Sukses (200)
```
{
    "_id": "5cbc02a68c0ea50b33865a95",
    "userId": "5cbc02a68c0ea50b33865a94",
    "totalPrice": 1100000,
    "product": [
        {
            "_id": "5cbc16ef12930c1a9ac4816c",
            "productId": "5cbaa345205d9129f3b16136",
            "quantity": 1
        },
        {
            "_id": "5cbc272454f52e365bd3a1a7",
            "productId": "5cbac83fe02ca25fa2b3b400",
            "quantity": 1
        }
    ],
    "__v": 26
}
```

### Delete /carts/:id
Sukses (200)
```
{
    "_id": "5cbad903c0491501309c4cf8",
    "userId": "5cbad903c0491501309c4cf7",
    "totalPrice": 15000000,
    "product": [
        {
            "_id": "5cbaf9a4de62323b4caf98ff",
            "productId": "5cbad13e6fdf696c8a176827",
            "quantity": 1
        }
    ],
    "__v": 25
}
```
Error (404)
```
{
    "msg": "U must be login"
}
```

### Get carts/
Sukses (200)
```
{
    "products": [
        {
            "quantity": 1,
            "name": "HP Samsung",
            "price": 10000000,
            "productId": "5cbad13e6fdf696c8a176827",
            "image": "https://storage.googleapis.com/e-commerce_file/1555747133542download.jpeg"
        }
    ],
    "totalPrice": 10000000
}
```

Error(404)
```
{
    "msg": "U must be login"
}
```

### POST /checkout
Sukses (201)
```
{
    "date": "2019-04-21T08:32:33.862Z",
    "products": [
        {
            "quantity": 1,
            "name": "Sepatu",
            "price": 100000,
            "productId": "5cbaa345205d9129f3b16136"
        },
        {
            "quantity": 1,
            "name": "Sepatu",
            "price": 1000000,
            "productId": "5cbac83fe02ca25fa2b3b400",
            "image": "https://storage.googleapis.com/e-commerce_file/1555744830206HP_Slate_6_VoiceTab_2_L_1.jpg"
        }
    ],
    "_id": "5cbc2c891b5b823bfa527fc1",
    "userId": "5cbc02a68c0ea50b33865a94",
    "totalPrice": 1100000,
    "__v": 0
}
```

## Usage

Make sure you have **Node.js** and **npm** installed in your computer, and then run these commands:
```
$ npm install
$ npm start
```