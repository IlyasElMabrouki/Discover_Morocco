from pydantic import BaseModel
from typing import Optional
from typing import List

class EventDetails(BaseModel):
    event_id: int
    category: str
    company_id: int
    location: Optional[str] = None
    date: Optional[str] = None

class Event(BaseModel):
    attended_events: List[EventDetails]
    future_events: List[EventDetails]