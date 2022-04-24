const Modal = ({
    className,
    modalSize,
    verticallyCentered,
    modalId,
    modalTitle,
    children
}) => (
    <div className={`modal fade ${className}`}
        id={modalId}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div className={`modal-dialog ${modalSize} ${verticallyCentered}`}>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title"
                        id="exampleModalLabel"
                    >
                        {modalTitle}
                    </h5>
                    <button type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close">
                    </button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    </div>
);

export default Modal;
