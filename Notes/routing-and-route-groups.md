## 🧭 Routing in Next.js 16

### (Parallel Routes, Route Groups & Layout Organization)

### 🧠 Overview

Next.js 16 introduces **powerful routing features** through the **App Router**, enabling developers to build highly modular and maintainable route structures.
Two of the most useful features are:

- **Parallel Routes** — render multiple routes simultaneously.
- **Route Groups** — organize routes without affecting the URL structure.

These features help you create scalable layouts for complex applications like dashboards, admin panels, and multi-section platforms.

---

### 🗂️ Folder Structure Example

```bash
app/
├── (root)/
│   ├── page.tsx
│   ├── layout.tsx
│   └── about/
│       └── page.tsx
├── (dashboard)/
│   ├── page.tsx
│   ├── analytics/
│   │   └── page.tsx
│   ├── users/
│   │   └── page.tsx
│   └── layout.tsx
├── loader.tsx
└── layout.tsx
```

---

### 🔀 Route Groups `( )`

- Route groups allow you to **group files without changing the URL**.
- They’re defined by wrapping a folder name in parentheses, e.g. `(dashboard)` or `(root)`.

**Example:**

```
app/(dashboard)/page.tsx
app/(root)/page.tsx
```

Both might map to different parts of your app, but neither will display `(dashboard)` or `(root)` in the URL.

This allows you to define **distinct layouts** for different sections while keeping your URLs clean and predictable.

---

### 🪞 Parallel Routes

Parallel routes allow you to **render multiple independent routes at the same time**, each with its own state and navigation context.

**Example:**

```tsx
// app/layout.tsx
export default function Layout({ children, dashboard, root }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <section>{root}</section>
      <aside>{dashboard}</aside>
    </div>
  );
}
```

Then define slots:

```
app/(root)/page.tsx
app/(dashboard)/page.tsx
```

Each section renders simultaneously — for example, a **main content view** (`root`) alongside a **dashboard sidebar** (`dashboard`).

---

### ⚙️ Layout Updates

Layouts in Next.js 16 allow for **nested and persistent UI**.
Each route group can have its own `layout.tsx` file for unique designs.

**Example:**

```tsx
// app/(dashboard)/layout.tsx
export default function DashboardLayout({ children }) {
  return (
    <div className="p-6 bg-gray-900 text-white">
      <h2>Dashboard</h2>
      {children}
    </div>
  );
}
```

This ensures the dashboard section always maintains its layout, even as you navigate between subpages.

---

### 🧩 Component Restructuring

- Removed the old demo component `hello.tsx`.
- Created a new `components/` directory for reusable UI components.
- Introduced a `loader.tsx` to handle loading states and transitions, improving UX during route changes.

---

### 🚀 Benefits

✅ **Cleaner architecture:** Keeps unrelated parts separated
✅ **Scalable layouts:** Perfect for complex UIs
✅ **Faster navigation:** Each section can render independently
✅ **Improved maintainability:** Clear file organization

---

### 🧠 Learning Summary

**What I learned today:**

- How to use **Route Groups `( )`** to organize files without affecting URLs.
- How **Parallel Routes** allow rendering multiple sections simultaneously.
- How to create **different layouts** for each route group.
- The importance of **maintainable routing structures** for large-scale Next.js apps.

**Next up:** Explore **data fetching and caching** in Server Components to handle dynamic data efficiently 🔥

---
