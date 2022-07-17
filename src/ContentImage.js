import { useEffect, useState } from "react";

const ContentImage = () => {
  const [avarta, setAvarta] = useState();

  useEffect(() => {
    // cleanup function
    return () => {
      avarta && URL.revokeObjectURL(avarta.preview);
    };
  }, [avarta]);

  const handleSelectImage = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(e.target.files[0]);
    setAvarta(file);
    e.target.value = null;
  };

  return (
    <div>
      <input type="file" multiple onChange={handleSelectImage} />
      {avarta && <img src={avarta.preview} alt="img" width="100%" />}
    </div>
  );
};
export default ContentImage;
