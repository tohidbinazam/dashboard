// eslint-disable-next-line react/prop-types
const DefaultModal = ({ children, id, title, clearFrom }) => {
  const handleModalClick = (e) => {
    if (e.target.id === id) {
      clearFrom();
    }
  };

  return (
    <div
      className='modal fade'
      id={id}
      aria-hidden='true'
      role='dialog'
      onClick={handleModalClick}
    >
      <div className='modal-dialog modal-dialog-centered' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{title}</h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
              onClick={clearFrom}
            ></button>
          </div>
          <div className='modal-body'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DefaultModal;
