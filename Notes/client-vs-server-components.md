## 🌐 React Server vs Client Components in Next.js 16

### 🧠 Overview

Next.js 16 introduces a **hybrid component model** that allows you to use both **Server Components** and **Client Components** seamlessly.

This gives you the power to:

- Render faster (Server Components don’t need JS on the client)
- Fetch data securely on the server
- Still use interactivity (Client Components)

---

### ⚙️ Example Structure

#### **`app/page.tsx` (Server Component)**

```tsx
import Hello from "./components/hello";

const Home = () => {
  console.log("What type of a component am I?");

  return (
    <main>
      <div className="text-xl underline">Welcome to Next.js!</div>
      <Hello />
    </main>
  );
};

export default Home;
```

#### **`app/components/hello.tsx` (Client Component)**

```tsx
"use client";

const Hello = () => {
  console.log("I am a client component");

  return <div>Hello</div>;
};

export default Hello;
```

---

### 🔍 Key Differences

| Feature                                          | **Server Component** | **Client Component**            |
| ------------------------------------------------ | -------------------- | ------------------------------- |
| Default behavior                                 | ✅ Yes               | ❌ No (must use `"use client"`) |
| Where it runs                                    | Server               | Browser                         |
| Can access server data directly                  | ✅ Yes               | ❌ No                           |
| Can use React hooks like `useState`, `useEffect` | ❌ No                | ✅ Yes                          |
| Sent to browser as JS                            | ❌ No                | ✅ Yes                          |

---

### 💬 Console Output Example

When you run this setup:

```
What type of a component am I?   // Server-side
I am a client component          // Browser console
```

✅ This confirms that:

- `Home` executes on the **server**.
- `Hello` executes in the **browser**.

---

### 🚀 Takeaway

- Use **Server Components** for data fetching, performance, and SEO.
- Use **Client Components** for interactivity (state, events, animations).
- Next.js 16 automatically optimizes the rendering between both.

---

### 🧩 Learning Summary

**What I learned today:**

- How to create and differentiate between **Server** and **Client Components** in Next.js 16.
- The importance of the `"use client"` directive for browser-based interactivity.
- How Next.js intelligently splits rendering between the server and the client.
- Server Components improve **performance and SEO**, while Client Components enable **interactivity**.

**Next up:** explore **routing**⚡

---
