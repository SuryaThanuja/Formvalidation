# Food Recipe App (Vite + React)

This is a simple food recipe search app that uses the EDAMAM Recipe Search API.

## Quick start

1. Install dependencies
   ```bash
   npm install
   ```

2. Open `src/App.jsx` and replace the placeholders:
   ```js
   const APP_ID = '<YOUR_APP_ID>'
   const APP_KEY = '<YOUR_APP_KEY>'
   ```
   Get credentials by signing up at https://developer.edamam.com/ and creating a Recipe Search app.

   Alternatively you can use environment variables and modify the code to read from `import.meta.env.VITE_APP_ID`.

3. Run dev server
   ```bash
   npm run dev
   ```

4. Open http://localhost:5173

## Notes
- The project is intentionally minimal so you can run it right away.
- Make sure to replace the placeholders before searching, otherwise the app won't call the EDAMAM API.
