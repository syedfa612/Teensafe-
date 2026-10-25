# TeenSafe AI Risk Scanner Microservice (Module 2)

A lightweight FastAPI service powering the **Module 2: AI Risk Scanner** of the TeenSafe platform.

## Setup & Running

```bash
cd fastapi-service
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
uvicorn app:app --reload --port 8000
```

## Endpoints

- `GET /health` - Health status and whether `model.pkl` is loaded.
- `POST /predict` - Accepts `{"text": "..."}` and returns threat classification, confidence percentage, detected risk factors, and actionable advice.

## Academic ML Training (Week 3 Task)

1. Use Kaggle datasets:
   - *Cyberbullying Classification Dataset*
   - *SMS Spam Collection Dataset*
2. Preprocess text with `TfidfVectorizer(ngram_range=(1,2), max_features=5000)`
3. Train `LogisticRegression` and `LinearSVC`
4. Export:
   ```python
   import joblib
   joblib.dump(model, 'model.pkl')
   joblib.dump(vectorizer, 'vectorizer.pkl')
   ```
5. Drop `model.pkl` and `vectorizer.pkl` into this folder. The FastAPI service auto-detects and loads them on startup.
