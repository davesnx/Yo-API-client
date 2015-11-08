# justyo-api-client-node

Yo API Client on node.js with Promises

## Install

```
npm install justyo-api-client-node
```

## Usage

```javascript
import Yo from 'justyo-api-client-node';

const yo = new Yo('API_KEY');

yo.yo.post({
    'username': 'davesnx',
}).then(function(body) {
    console.log(body);
}).catch(function(err) {
    console.log(err);
});
```

## Endpoints

- accounts
- check_username
- yo
- yo_all
- subscribers_count

## API and documentation

More information at [JustYo API Documentation](http://docs.justyo.co/docs)

## License

[MIT](LICENSE.md)
