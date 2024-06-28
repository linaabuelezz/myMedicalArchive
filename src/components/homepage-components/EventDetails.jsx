import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const EventDetails = () => {
    const { eventId } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const storedBodyParts = JSON.parse(localStorage.getItem('bodyParts'));
        if (storedBodyParts) {
          for (const part in storedBodyParts) {
            const foundEvent = storedBodyParts[part].dates.find(date => date.newEventId === eventId);
            if (foundEvent) {
              setEvent(foundEvent);
              break;
            }
          }
        }
      }, [eventId]);
    
      if (!event) {
        return <div>Loading...</div>;
      }
    
      return (
        <div>
          <h1>{event.newEventName}</h1>
          <p>{event.newEventDescription}</p>
          <p>{event.newEventDate}</p>
        </div>
      );
    };
    
    export default EventDetails;



