from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Portfolio API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, replace with frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    email: str
    message: str

@app.get("/")
def read_root():
    return {"message": "Welcome to the Portfolio Backend API"}

@app.get("/api/projects")
def get_projects():
    # Mock data for projects
    return [
        {
            "id": 1,
            "title": "Quantum File System",
            "description": "A high-performance file system built with Rust and WebAssembly.",
            "technologies": ["Rust", "WASM", "React"],
            "github_url": "#",
            "live_url": "#"
        },
        {
            "id": 2,
            "title": "Neural Trading Bot",
            "description": "Algorithmic trading platform using deep reinforcement learning.",
            "technologies": ["Python", "TensorFlow", "FastAPI"],
            "github_url": "#",
            "live_url": "#"
        },
        {
            "id": 3,
            "title": "Neon Analytics",
            "description": "Real-time analytics dashboard with dynamic visualization.",
            "technologies": ["Next.js", "Tailwind", "PostgreSQL"],
            "github_url": "#",
            "live_url": "#"
        }
    ]

@app.post("/api/contact")
def submit_contact_form(form_data: ContactForm):
    # Here you would typically save to database
    return {"status": "success", "message": f"Thanks {form_data.name}, your message was received!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
