import { useContext, useState } from "react";
import Modal from "./Modal";
import { VersionContext } from "../../Context/VersionContext";

const VersionModal = () => {
  //   const [outOfDate, setOutOfDate] = useState(false);
  const { outOfDate } = useContext(VersionContext);

  return (
    <Modal
      show={outOfDate}
      header={"Version Modal"}
      body={
        <div>
          <p>Version Body</p>
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            Refresh
          </button>
        </div>
      }
      showClose={false}
    />
  );
};

export default VersionModal;
