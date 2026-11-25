# MiniShop - Lab 14 (React JS)

**Student:** Ammanullah  
**Registration No:** 2500615  
**Course:** CS-301L Full Stack Web Development Lab

## Included tasks
1. Redux Toolkit wishlist slice with `toggleWish`, `clearWish`, `selectWishIds`, and store key `wishlist`.
2. Controlled search input in `HomePage.jsx`, combined with category filtering. Search is case-insensitive and shows `No products found`.
3. `/wishlist` route with product links, active `NavLink`, wishlist count badge, and a 404 route for unknown URLs.

## Run in VS Code
1. Extract `2500615_Lab14.zip`.
2. Open the extracted `2500615_Lab14` folder in VS Code.
3. Open Terminal > New Terminal.
4. Run:
   ```bash
   npm install
   npm run dev
   ```
5. Open the local URL shown by Vite (usually `http://localhost:5173`).

## Notes
- This is a React + Vite project using Redux Toolkit and React Router.
- `node_modules` is intentionally not included in the ZIP. Run `npm install` after extracting.
- Wishlist state remains available while navigating between routes during the running app session. A browser refresh resets it because persistence was not requested in the lab task.
