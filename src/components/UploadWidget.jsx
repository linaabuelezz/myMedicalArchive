import { useEffect, useRef, useContext } from "react";
import TempDataContext from "../hooks/TempDataContext";

const UploadWidget = () => {
    const cloudinaryRef = useRef();
    const widgetRef =  useRef();
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
            }
        })
    },[setTempFileData])
    return (
        <button onClick={() => widgetRef.current.open()} className="bg-zinc-400 text-white rounded-md p-1.5 font-medium hover:scale-110">
            Upload file
        </button>
    )

}

export default UploadWidget;