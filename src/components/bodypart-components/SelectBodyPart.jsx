import { useContext } from "react";
import TempDataContext from "../../hooks/TempDataContext";

const bodyPartOptions = [{name: "Head", id: "1"}, {name:"Neck", id: "2"}, {name:"Shoulders", id: "3"}, {name:"Arms", id: "4"}, {name:"Hands", id: "5"}, {name:"Torso", id: "6"}, {name:"Hips", id: "7"}, {name:"Legs", id: "8"}, {name:"Feet", id: "9"}];
const SelectBodyPart = () => {
  const { setChosenBodyPart } = useContext(TempDataContext);

  const handlePartSelect = (e) => {
    setChosenBodyPart(e.target.value);
  };



  return (
    <div>
      <select className="mb-2 border-2 border-black font-semibold ml-4" onChange={handlePartSelect}>
        <option value="" disabled>Select a body part</option>
        {bodyPartOptions.map((bodyPart) => (
          <option
            key={bodyPart.id}
            value={bodyPart.id}
            className="font-semibold"
            defaultValue={bodyPartOptions[0].id}
          >
            {bodyPart.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBodyPart;
