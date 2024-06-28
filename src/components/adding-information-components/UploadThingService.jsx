import { Uploadthing } from 'uploadthing';

const   Uploadthing = new Uploadthing({
    apiKey: 'sk_live_856a32b9ca939b97e65731a83779073b7a126ef23951054e3bf46099ef5d5613', 
  });

  export const uploadFile = async (file) => {
    try {
      const response = await uploadthing.upload(file);
      return response.url; // Returns the URL of the uploaded file
    } catch (error) {
      console.error('Upload failed:', error);
      throw new Error('Upload failed');
    }
  };