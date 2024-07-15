import UploadWidget from "../components/UploadWidget";
// import AddingFileButton from "../components/adding-information-components/AddingFileButton";
import DatesAddedBox from "../components/adding-information-components/DatesAddedBox";
import FilesAddedBox from "../components/adding-information-components/FilesAddedBox";
import SubmitDataButton from "../components/adding-information-components/SubmitDataButton";
import AddingDateButton from "../components/adding-information-components/addingDateButton";
import AddingDateDialogue from "../components/adding-information-components/addingDateDialogue";
// import AddingFileDialogue from "../components/adding-information-components/addingFileDialogue";
import SelectBodyPart from "../components/bodypart-components/SelectBodyPart";

const AddingInformationPage = () => {
  return (
    <>
      <div className="min-h-screen bg-[url('/assets/medbackground2.jpeg')] bg-cover bg-center overflow-hidden bg-fixed">
        <SelectBodyPart />
        <div className="ml-4 mb-2">
          <UploadWidget /> <br />
        </div>
        <AddingDateButton />
        <AddingDateDialogue />
        <div className="flex m-2">
          <FilesAddedBox />
          <DatesAddedBox />
        </div>
        <SubmitDataButton />
      </div>
    </>
  );
};

export default AddingInformationPage;
