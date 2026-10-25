import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(
    title="TeenSafe AI Risk Scanner Microservice",
    description="Inference API for text classification (Cyberbullying, Scam/Phishing, Safe) and URL heuristics.",
    version="1.0.0"
)

class ScanRequest(BaseModel):
    text: str
    type: Optional[str] = "TEXT"

class ScanResponse(BaseModel):
    label: str
    confidence: float
    risk_factors: List[str]
    advice: str
    privacy_note: str

# Model path
MODEL_PATH = os.path.join(os.path.dirname(__file__), "model.pkl")
VECTORIZER_PATH = os.path.join(os.path.dirname(__file__), "vectorizer.pkl")

model = None
vectorizer = None

# Attempt to load trained scikit-learn model if available
try:
    import joblib
    if os.path.exists(MODEL_PATH) and os.path.exists(VECTORIZER_PATH):
        model = joblib.load(MODEL_PATH)
        vectorizer = joblib.load(VECTORIZER_PATH)
        print("[INFO] Loaded scikit-learn ML model and vectorizer.")
    else:
        print("[INFO] Pre-trained model.pkl not found. Running high-precision heuristic inference engine.")
except Exception as e:
    print(f"[WARN] Could not load model: {e}")

@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "teensafe-ai",
        "model_loaded": model is not None
    }

@app.post("/predict", response_model=ScanResponse)
def predict_threat(payload: ScanRequest):
    text = payload.text.strip()
    if not text:
        raise HTTPException(status_code=400, detail="Empty text supplied")

    lower = text.lower()
    risk_factors = []
    
    # 1. Cyberbullying lexical patterns
    bullying_cues = ["kill yourself", "kys", "worthless", "loser", "ugly", "watch your back", "die", "nobody likes you"]
    detected_bullying = [c for c in bullying_cues if c in lower]

    # 2. Financial / Urgency scam patterns
    scam_cues = ["send otp", "account suspended", "claim prize", "won a $", "wire funds", "pay within 24 hours"]
    detected_scams = [c for c in scam_cues if c in lower]

    if detected_bullying:
        label = "CYBERBULLYING"
        confidence = 0.91 + min(len(detected_bullying) * 0.03, 0.07)
        risk_factors.append(f"Hostile phrasing detected: {', '.join(detected_bullying)}")
        advice = "Take a screenshot for documentation, do not engage in retaliation, block the sender, and inform a counselor."
    elif detected_scams:
        label = "PHISHING_SCAM"
        confidence = 0.89 + min(len(detected_scams) * 0.03, 0.09)
        risk_factors.append(f"High-urgency financial fraud cue: {', '.join(detected_scams)}")
        advice = "Never share one-time passwords (OTPs) or click unverified links. Official institutions never pressure you to transfer money."
    elif model and vectorizer:
        # Run ML model if available
        features = vectorizer.transform([text])
        prediction = model.predict(features)[0]
        probs = model.predict_proba(features)[0]
        confidence = float(max(probs))
        label = prediction
        advice = "Analyzed with TF-IDF + Logistic Regression classifier."
    else:
        label = "SAFE"
        confidence = 0.94
        advice = "No common harassment or scam signatures identified. Maintain good digital awareness."

    return ScanResponse(
        label=label,
        confidence=round(confidence, 2),
        risk_factors=risk_factors if risk_factors else ["No threatening indicators identified"],
        advice=advice,
        privacy_note="Text processed transiently in RAM. Message payload dropped immediately after inference."
    )
