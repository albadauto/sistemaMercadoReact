import React from "react";

const Modal = ({children, titulo, buttonName, onclick}) => {
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {buttonName}
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {titulo}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
                <form onClick={onclick} method="post">
                 {children}
                 <button type="submit" class="btn btn-primary">
                Save changes
                 </button>
                </form>
                
            </div>
            

          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
