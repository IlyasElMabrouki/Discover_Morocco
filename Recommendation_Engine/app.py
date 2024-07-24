from fastapi import FastAPI, HTTPException
from Event import Event
from recEngine import recommend_event

app = FastAPI()

@app.get('/')
def index():
    return {'Tourist': 'Event Recommender ML API'}

@app.post("/predict")
async def predict_result(data:Event):
    try:
        # Extract the data from the request
        data = data.dict()
        attended_events=data['attended_events']
        future_events=data['future_events']
        
        # Call your function to make predictions
        prediction = recommend_event(attended_events, future_events)
        
        # Return the prediction as a JSON response
        print(f"Prediction: {prediction}")
        return {"prediction": prediction}
    except Exception as e:
        # Log the error message
        print(f"Error: {e}")
        
        # Handle any errors gracefully
        raise HTTPException(status_code=500, detail="Prediction failed")