```javascript
const query = { field: 'value' };

db.collection.find(query).toArray((err, result) => {
  if (err) {
    console.error('Error fetching data:', err);
  } else {
    console.log('Result:', result);
  }
});
```