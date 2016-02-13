### Install
```sh
npm install justyo-api-client-node --save
```

### Usage
```js
import Yo from 'justyo-api-client-node'
const yo = new Yo('API_KEY')
```

#### Endpoints
- **accounts** - Create new Yo accounts

```js
yo.accounts.post({
      'username': 'davesnx',
      'password': 'loremipsum',
      'callback_url': 'https://callbackexample.com/api', // Optional
      'email': 'dsnxmoreno@gmail.com',
      'description': 'I\'m creating accounts automagically', // Optional
      'needs_location': 'Barcelona', // Optional
      'welcome_link': 'http://www.lolaflores.net/' // Optional
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
```
- **check_username** - Checks if a username exists

```js
yo.check_username.get({
      'username': 'davesnx'
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
```
- **yo** - Send a *'yo'* to a user

```js
yo.yo.post({
      'username': 'davesnx',
      'link': '', // Optional
      'location': '' // Optional
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
```
- **yo_all** - Send a *'yo'* to everyone

```js
yo.yo_all.post({
      'username': 'davesnx',
      'link': '', // Optional
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
```
- **subscribers_count** - Check the subscribers of your account

```js
yo.subscribers_count.get()
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
```

##### Thanks to:
- [justyo.co](https://justyo.co/) for create the app and the api
- [@germanrcuriel](https://github.com/germanrcuriel) for inspire me to create a NodeJS API Client as [this](https://github.com/germanrcuriel/hipchat-client) :+1:

<hr/>

### License
**The MIT License (MIT)**
Copyright (c) 2015 **davesnx**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
