import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
import joblib

# Function to create a feature vector for events
def create_event_feature_vector(event):
    categories = list(set(event["category"] for event in events))
    companies = list(set(event["company_id"] for event in events))
    category_features = [1 if event["category"] == cat else 0 for cat in categories]
    company_features = [1 if event["company_id"] == comp else 0 for comp in companies]
    return category_features + company_features

# Function to create a feature vector for tourists based on attended events
def create_tourist_profile(attended_events):
    categories = list(set(event["category"] for event in events))
    companies = list(set(event["company_id"] for event in events))
    profile = np.zeros(len(categories) + len(companies))
    for event in attended_events:
        event_feature_vector = create_event_feature_vector(event)
        profile += event_feature_vector
    return profile

# Function to recommend one event based on tourist profile and event features
def recommend_event(tourist_attended_events, events):
    tourist_profile = create_tourist_profile(tourist_attended_events)
    event_features = [create_event_feature_vector(event) for event in events]
    similarities = cosine_similarity([tourist_profile], event_features)
    max_index = np.argmax(similarities)
    recommended_event = events[max_index]
    return recommended_event

# Sample data (replace with your actual data)
events = [
    {"event_id": 101, "category": "Music", "company_id": 1},
    {"event_id": 102, "category": "Art", "company_id": 2}
    # Add more events as needed
]

# Sample attended events for tourists (replace with actual attended events)
tourist_attended_events = [
   {"event_id": 101, "category": "Music", "company_id": 1},
    {"event_id": 102, "category": "Art", "company_id": 2}
    # Add more attended events as needed
]

# Recommend one event to the tourist based on their profile
recommended_event = recommend_event(tourist_attended_events, events)

joblib.dump(recommended_event, 'modelV2.joblib')

# Print recommended event
print("Recommended Event:")
print(recommended_event)