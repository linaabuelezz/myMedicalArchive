import { useContext } from "react";
import { Dialog, Button, Flex, TextField, Text } from "@radix-ui/themes";
import { OpeningDialogueContext } from "../../hooks/openingDialogue";
import { TempDataContext } from "../../hooks/TempDataContext";

const AddingDateDialogue = () => {
  const { isDialogueOpen, closeDialogue, modalType } = useContext(
    OpeningDialogueContext
  );
  const { tempDateData, setTempDateData } = useContext(TempDataContext);
  const handleDateSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      newEventName: e.target.eventName.value,
      newEventDescription: e.target.eventDescription.value,
      newEventDate: e.target.eventDate.value,
    };
    console.log(e.target.eventName.value);
    if (e.target.eventName.value=== "") {
      return
    }
    setTempDateData(newEvent);
    console.log(newEvent);
    console.log(tempDateData);
    closeDialogue();
  };
  return (
    <Dialog.Root open={modalType === "Add-date" && isDialogueOpen}>
      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Add document</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Enter a name, description and select a date for the event.
        </Dialog.Description>
        <form onSubmit={handleDateSubmit}>
          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Event name
              </Text>
              <TextField.Root
                placeholder="Enter recognizable document name."
                name="eventName"
              />
            </label>
            <label>
              <Text as="div" size="4" mb="1" weight="bold">
                Event Description
              </Text>
              <TextField.Root
                placeholder="X-ray, diagnosed with..."
                name="eventDescription"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Select a date:
              </Text>
              <input
                type="date"
                name="eventDate"
                className="date-input"
              ></input>
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button
                variant="soft"
                color="gray"
                type="button"
                onClick={closeDialogue}
              >
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button type="submit">Save</Button>
            </Dialog.Close>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default AddingDateDialogue;
