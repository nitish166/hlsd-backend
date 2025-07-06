

# 🧠 High-Level System Design Backend (HLSDB)

This repository contains **real-world backend architecture implementations** for scalable systems, starting with a **custom Load Balancer** built from scratch using Node.js.

> 🎯 Inspired by deep system design learnings from Arpit Bhayani.

---

## 🚀 Modules

### ✅ Load Balancer (Phase 1 - Basic)

- 🌐 Round-robin routing
- ⚙️ Health check engine
- 🔄 Dynamic failover if a server goes down
- 📦 Manual server list with in-memory config

---

## 📁 Folder Structure

```
high-level-system-design-backend/
├── loadbalancer/
│   ├── balancer/         # Load balancer server
│   ├── servers/          # Multiple backend servers (3001, 3002, 3003)
│   ├── orchestrator/     # Health checker
│   └── utils/            # Server config file
```

---

## ▶️ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/high-level-system-design-backend.git
cd high-level-system-design-backend
```

### 2. Install dependencies
```bash
npm install express axios
```

### 3. Run all services
```bash
# In separate terminals (or use concurrently or pm2)
node loadbalancer/servers/server1.js
node loadbalancer/servers/server2.js
node loadbalancer/servers/server3.js
node loadbalancer/orchestrator/index.js
node loadbalancer/balancer/index.js
```

### 4. Hit Load Balancer
```bash
http://localhost:8000
```

---

## 🔍 Live Demo Output

```
Hello from Server 1
Hello from Server 2
Hello from Server 3
...
```

When a server is down, it is automatically skipped.

---

## 📦 Upcoming Modules

| Phase | Module | Description |
|-------|--------|-------------|
| 2️⃣ | Redis Pub/Sub | Decouple server discovery from LB logic |
| 3️⃣ | Admin Console | Add/Remove servers via API |
| 4️⃣ | Autoscaler | Simulate CPU, memory & scale servers dynamically |
| 5️⃣ | Layer 7 Routing | Path-based & sticky session routing |
| 6️⃣ | Rate Limiter | Build a distributed rate limiter using token bucket |

---

## 👨‍💻 Built With

- Node.js
- Express.js
- Axios
- Redis (upcoming)
- ❤️ Hands-on system design mindset

---

## 📜 License

MIT © 2025 | Built by [Your Name](https://github.com/your-username)

---

> “Boxes toh sab bana lete hain. Real power lies in what runs *inside* the boxes.”  
> – Arpit Bhayani (adapted)