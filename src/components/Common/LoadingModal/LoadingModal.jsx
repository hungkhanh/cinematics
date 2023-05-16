import ReactDOM from "react-dom";
import "./LoadingModal.css";

function ModalOverlay() {
  return (
    <div className="modal-container">
      <div className="modal-bg"></div>
      <div className="content-box loadingio-spinner-eclipse-rp83ii8bca">
        <div className="ldio-jn6tio59dx7">
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default function LoadingModal() {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("loading-modal")
      )}
    </>
  );
}
