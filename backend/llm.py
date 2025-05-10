from google import genai
from models.question import Question
from dotenv import load_dotenv
import os
load_dotenv()

def get_exam_questions():
    api_key1 = os.getenv("GENAI_API_KEY")  # Obtén la clave desde el archivo .env

    client = genai.Client(api_key=api_key1)

    prompt = f"""
    Generate 3 questions with different answers and only 1 correct answer for a quiz on the topic of Python programming.
    Generate in JSON format:
    - 2 questions of type Multiple Choice (One correct)
    - 1 question of type True or False
    """
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents= prompt , \
        config={
            "response_mime_type": "application/json",
            "response_schema": list[Question],
        },
    )
        # Use the response as a JSON string.
        # Use instantiated objects.
    questions: list[Question] = response.parsed
    return questions
