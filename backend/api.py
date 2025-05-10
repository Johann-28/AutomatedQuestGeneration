#pip install -q -U google-genai
#pip install langchain
#pip install PyPDF2
#pip install python-dotenv

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from llm import get_exam_questions

app = FastAPI()	

# Configuración de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],  # Permitir solicitudes desde Angular
    allow_credentials=True,
    allow_methods=["*"],  # Permitir todos los métodos (GET, POST, etc.)
    allow_headers=["*"],  # Permitir todos los encabezados
)

@app.get("/questions")
async def get_questions():
    return get_exam_questions()




