import { useState } from "react";

const Settings = () => {
  const [fileData, setFileData] = useState();
  const [errorData, setErrorData] = useState();

  const readFile = (file) => {
    console.log({ file });
    const fileReader = new FileReader();
    console.log(fileReader);

    fileReader.addEventListener("load", () => {
      console.log(fileReader.result);
    });

    fileReader.onloadend = () => {
      try {
        console.log("try it");
        setFileData(JSON.parse(fileReader.result));
        setErrorData(null);
      } catch (error) {
        setErrorData("Not a valid File");
        console.error(error);
      }
    };
    if (file !== undefined) {
      console.log("try to read it?");
      fileReader.readAsText(file);
    }
  };

  const exportSettings = async () => {
    console.log("exporting settings");
    let someData = { one: 1, two: 2 };
    let jsonData = JSON.stringify(someData);
    const fileHandle = await window.showSaveFilePicker();

    const writableStream = await fileHandle.createWritable();

    await writableStream.write(jsonData);

    await writableStream.close();
    console.log("done");
    // console.log({ fileData });
  };

  const loadSettings = () => {
    console.log({ fileData });
    console.log("loading settings");
  };

  return (
    <div>
      <h1>Setting</h1>
      <div>
        <button onClick={exportSettings}>Export Settings</button>
      </div>
      <div>
        <input
          type="file"
          name="file"
          id="file"
          accept=".json"
          onChange={(e) => readFile(e.target.files[0])}
        />
        <button onClick={loadSettings}>Load Settings</button>
        {errorData && <div>{errorData}</div>}
      </div>
    </div>
  );
};

export default Settings;
