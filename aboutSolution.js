```javascript
// pages/aboutSolution.js
export default function About() {
  const data = localStorage.getItem('user');
  const parsedData = data ? JSON.parse(data) : null; // Handle null case
  
  return (
    <div>
      <h1>About Page</h1>
      {parsedData && <p>Welcome, {parsedData.name}!</p>}
      {!parsedData && <p>No user data found.</p>}
    </div>
  );
}
```