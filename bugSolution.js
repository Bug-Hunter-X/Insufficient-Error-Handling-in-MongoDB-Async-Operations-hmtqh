```javascript
const { MongoClient } = require('mongodb');

async function fetchData() {
  const uri = "YOUR_MONGODB_URI"; // Replace with your MongoDB connection string
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('your_database'); // Replace with your database name
    const collection = db.collection('your_collection'); // Replace with your collection name
    const query = { field: 'value' };
    const result = await collection.find(query).toArray();
    console.log('Result:', result);
  } catch (err) {
    console.error('Error fetching data:', err);
    // Add more robust error handling, such as retry logic or logging to a centralized system.
  } finally {
    await client.close();
  }
}

fetchData();
```