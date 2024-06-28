import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const FileDetails = () => {
    const { fileId } = useParams();
    console.log(fileId);
    const [file, setFile] = useState(null);

    useEffect(() => {
        const storedBodyParts = JSON.parse(localStorage.getItem('bodyParts'));
        if (storedBodyParts) {
          for (const part in storedBodyParts) {
            const foundFile = storedBodyParts[part].files.find(file => file.newDocId === fileId);
            if (foundFile) {
              setFile(foundFile);
              break;
            }
          }
        }
      }, [fileId]);
    
      if (!file) {
        return <div>Loading...</div>;
      }
    
      return (
        <div>
          <h1>{file.newDocName}</h1>
          <p>{file.newDocDescription}</p>
          <p>{file.newDocDocument}</p>
        </div>
      );
    };
    
    export default FileDetails;



