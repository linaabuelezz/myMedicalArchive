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
          <h1 className="font-bold text-center mt-4 text-3xl underline">{event.newEventName}</h1>
          <div className="border-4 border-black mt-10 w-80 mx-auto rounded-sm">
          <p className="bg-slate-300"><strong>Description:  </strong>{event.newEventDescription}</p>
          <div className="border-2 border-black"></div>
          <p className="bg-slate-300"><strong>Date:  </strong>{event.newEventDate}</p>
          </div>
        </div>
      );
    };
    
    export default EventDetails;



