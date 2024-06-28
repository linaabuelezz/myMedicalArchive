import { useState, useContext } from "react";
import { Dialog, Button, Flex, TextField, Text } from "@radix-ui/themes";
import { OpeningDialogueContext } from "../../hooks/openingDialogue";
import { TempDataContext } from "../../hooks/TempDataContext"
import { v4 as uuidv4 } from 'uuid';

const AddingFileDialogue = () => {
  const { isDialogueOpen, closeDialogue, modalType } = useContext(
    OpeningDialogueContext
  );
  const { tempFileData, setTempFileData } = useContext(TempDataContext);
  const [errors, setErrors] = useState({});

  const handleDocSubmit = (e) => {
    e.preventDefault();
    const newDoc = {
      newDocName: e.target.docName.value,
      newDocDescription: e.target.docDescription.value,
      newDocDocument: e.target.selectedDoc.value,
      newDocId: uuidv4()
    };

    const newErrors = {};
    if (!newDoc.newDocName) newErrors.newDocName = "Document name is required.";
    if (!newDoc.newDocDescription) newErrors.newDocDescription = "Document description is required.";
    if (!newDoc.newDocDocument) newErrors.newDocDocument = "File is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setTempFileData(prev => [...prev,newDoc]);
    console.log(newDoc);
    
    closeDialogue();
  };


  return (
    <Dialog.Root  open={modalType === "Add-file" && isDialogueOpen}>
      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Add document</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Enter a name, description and upload.
        </Dialog.Description>

        <form onSubmit={handleDocSubmit}>
          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Document Name
              </Text>
              <TextField.Root
                placeholder="Enter recognizable document name."
                name="docName"
              />
              {errors.newDocName && (
                <Text color="red" size="1">
                  {errors.newDocName}
                </Text>
              )}
            </label>
            <label>
              <Text as="div" size="4" mb="1" weight="bold">
                Document Description
              </Text>
              <TextField.Root
                placeholder="X-ray, diagnosed with..."
                name="docDescription"
              />
               {errors.newDocDescription && (
                <Text color="red" size="1">
                  {errors.newDocDescription}
                </Text>
              )}
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Select a file:
              </Text>
              <input
                type="file"
                name="selectedDoc"
                className=""
              ></input>
               {errors.newDocDocument && (
                <Text color="red" size="1">
                  {errors.newDocDocument}
                </Text>
              )}
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

export default AddingFileDialogue;
