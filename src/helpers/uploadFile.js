export const uploadFile = async (file) => {
  if (!file) throw new Error('no viene el archivo a subir ');
  const cloudUrl = 'https://api.cloudinary.com/v1_1/dwbrlpoxb/upload';

  const forData = new FormData();
  forData.append('upload_preset', 'react-journal');
  forData.append('file', file);

  try {
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: forData,
    });
    if (!resp.ok) throw new Error('no se pudo subir el archivo');
    const clouResp = await resp.json();
    return clouResp.secure_url;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
