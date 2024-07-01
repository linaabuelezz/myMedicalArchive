import { useEffect, useRef, useState, useContext } from "react";
import TempDataContext from "../hooks/TempDataContext";

const UploadWidget = () => {
    const cloudinaryRef = useRef();
    const widgetRef =  useRef();
    // const [uploadedFiles, setUploadedFiles] = useState([]);
    const { setTempFileData } = useContext(TempDataContext);
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dmwv5ipj2',
            uploadPreset: 'mvkuuexb'
        }, function (error, result) {
            if (!error && result && result.event === "success") {
                console.log('File uploaded:', result.info); 
                setTempFileData(prev => [...prev,result.info]);
                // console.log(tempFileData);

                // Add the uploaded file to the state
                // setUploadedFiles(prevFiles => [...prevFiles, result.info]);
            }
        })
    },[setTempFileData])
    return (
        <button onClick={() => widgetRef.current.open()} className="bg-blue-600 text-white rounded-md p-1.5 font-medium w-20 hover:scale-110">
            Upload
        </button>
    )

}

export default UploadWidget;