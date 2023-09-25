import DefaultModal from '../components/modal/DefaultModal';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'datatables.net-dt';
import { addRole, deleteRole, updateRole } from '../features/user/userApiSlice';
import { clearMsg, selectUser } from '../features/user/userSlice';
import useInput from '../hooks/useInput';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import timeAgo from '../utils/timeAgo';
import { useEffect } from 'react';

const Role = () => {
  const dispatch = useDispatch();
  const { role, message, error, permission } = useSelector(selectUser);

  const [input, setInput, inputChange, clearFrom] = useInput({
    name: '',
    permissions: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.name) {
      return toast.error('Please fill all the fields');
    }
    console.log(input);
    dispatch(addRole(input));
    clearFrom();
  };

  const handleDelete = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal('Poof! Your imaginary file has been deleted!', {
          icon: 'success',
        });
        dispatch(deleteRole(id));
      }
    });
  };

  const handleEditModal = (item) => {
    const permissions = [];
    for (let i = 0; i < item.permissions.length; i++) {
      permissions.push(item.permissions[i]._id);
    }
    setInput({ id: item._id, name: item.name, permissions });
  };
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(updateRole({ id: input.id, data: input }));
    clearFrom();
  };

  const handleStatus = (item) => {
    dispatch(updateRole({ id: item._id, data: { status: !item.status } }));
  };

  const handleCheckbox = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setInput((prev) => ({
        ...prev,
        permissions: [...prev.permissions, value],
      }));
    } else {
      setInput((prev) => ({
        ...prev,
        permissions: prev.permissions.filter((item) => item !== value),
      }));
    }
  };

  if (message) {
    toast.success(message);
    dispatch(clearMsg());
  }
  if (error) {
    toast.error(error);
    dispatch(clearMsg());
  }

  useEffect(() => {
    new DataTable('#roleTable');
  }, []);
  return (
    <div className='page-wrapper'>
      <div className='content container-fluid'>
        <div className='page-header'>
          <div className='row'>
            <div className='col-sm-7 col-auto'>
              <h3 className='page-title'>Role</h3>
              <ul className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <a href='index.html'>Dashboard</a>
                </li>
                <li className='breadcrumb-item active'>Role</li>
              </ul>
            </div>
            <div className='col-sm-5 col'>
              <a
                data-bs-target='#addUser'
                data-bs-toggle='modal'
                className='btn btn-primary float-end mt-2'
              >
                Add
              </a>
            </div>
          </div>
        </div>

        <DefaultModal
          title={`${input.id ? 'Edit' : 'Add'} Role`}
          id='addUser'
          clearFrom={clearFrom}
        >
          <form onSubmit={input.id ? handleEdit : handleSubmit}>
            <div className='row form-row'>
              <div className='col-12 col-sm-12'>
                <div className='form-group'>
                  <label>Name</label>
                  <input
                    type='text'
                    name='name'
                    onChange={inputChange}
                    value={input.name}
                    placeholder='Role name'
                    className='form-control'
                  />
                  {/* input type checkbox */}
                </div>
                <div className='form-group'>
                  <label>Permission</label>
                  {permission?.map((item, index) => (
                    <div key={index} className='form-check form-check-inline'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value={item._id}
                        id={index}
                        checked={input.permissions?.includes(item._id)}
                        onClick={handleCheckbox}
                      />
                      <label className='form-check-label' htmlFor={index}>
                        {item.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button
              type='submit'
              data-bs-dismiss='modal'
              className='btn btn-primary w-100'
            >
              Save Changes
            </button>
          </form>
        </DefaultModal>

        <div className='row'>
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-header'>
                <h4 className='card-title'>Role List</h4>
              </div>
              <div className='card-body'>
                <div className='table-responsive'>
                  <table
                    className='datatable table table-hover table-center mb-0'
                    id='roleTable'
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Permission</th>
                        <th>Slug</th>
                        <th>UpdatedAt</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {role?.map((item, index) => (
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>
                            <ul>
                              {item.permissions?.map((item, index) => (
                                <li key={index}>{item.name}</li>
                              ))}
                            </ul>
                          </td>
                          <td>{item.slug}</td>
                          <td>{timeAgo(item.updatedAt)}</td>

                          <td>
                            <div className='status-toggle'>
                              <input
                                type='checkbox'
                                id={item._id}
                                className='check'
                                checked={item.status}
                              />
                              <label
                                htmlFor={item._id}
                                className='checktoggle'
                                onClick={() => {
                                  handleStatus(item);
                                }}
                              >
                                checkbox
                              </label>
                            </div>
                          </td>
                          <td>
                            <div className='actions'>
                              <button
                                className='btn btn-sm bg-success-light me-2'
                                data-bs-target='#addUser'
                                data-bs-toggle='modal'
                                onClick={() => handleEditModal(item)}
                              >
                                <i className='fe fe-pencil'></i> Edit
                              </button>
                              <button
                                data-bs-toggle='modal'
                                className='btn btn-sm bg-danger-light'
                                onClick={() => handleDelete(item._id)}
                              >
                                <i className='fe fe-trash'></i> Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Role;
