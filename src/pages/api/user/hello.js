import db from "@/pages/lib/db"

db();

export default function handler(req, res) {
    res.status(200).json({ message: 'Hello from Next.js!' })
  }