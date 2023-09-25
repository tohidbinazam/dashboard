import DefaultModal from '../components/modal/DefaultModal';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'datatables.net-dt';
import { addUser, deleteUser, updateUser } from '../features/user/userApiSlice';
import { clearMsg, selectUser } from '../features/user/userSlice';
import useInput from '../hooks/useInput';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import timeAgo from '../utils/timeAgo';
import { useEffect } from 'react';

const User = () => {
  const dispatch = useDispatch();
  const { users, role, message, error } = useSelector(selectUser);

  const [ input, setInput, inputChange, clearFrom ] = useInput({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.name) {
      return toast.error('Please fill all the fields');
    }
    dispatch(addUser(input));
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
        dispatch(deleteUser(id));
      }
    });
  };

  const handleEditModal = (item) => {
    setInput({
      id: item._id,
      name: item.name,
      email: item.email,
      role: item.role._id,
    });
  };
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: input.id, data: input }));
    clearFrom();
  };
  const handleStatus = (item) => {
    dispatch(updateUser({ id: item._id, data: { status: !item.status } }));
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
    new DataTable('#userTable');
  }, []);
  return (
    <div className='page-wrapper'>
      <div className='content container-fluid'>
        <div className='page-header'>
          <div className='row'>
            <div className='col-sm-7 col-auto'>
              <h3 className='page-title'>User</h3>
              <ul className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <a href='index.html'>Dashboard</a>
                </li>
                <li className='breadcrumb-item active'>User</li>
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
          title={`${input.id ? 'Edit' : 'Add'} User`}
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
                    placeholder='User name'
                    className='form-control'
                  />
                </div>
                <div className='form-group'>
                  <label>Email</label>
                  <input
                    type='text'
                    name='email'
                    onChange={inputChange}
                    value={input.email}
                    placeholder='User email'
                    className='form-control'
                  />
                </div>
                <div className='form-group'>
                  <label>Password</label>
                  <input
                    type='password'
                    name='password'
                    onChange={inputChange}
                    value={input.password}
                    placeholder='User password'
                    className='form-control'
                  />
                </div>
                <div className='form-group'>
                  <label>Role</label>
                  <select
                    name='role'
                    onChange={inputChange}
                    value={input.role}
                    className='form-control'
                  >
                    <option value=''>Select Role</option>
                    {role?.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
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
                <h4 className='card-title'>User List</h4>
              </div>
              <div className='card-body'>
                <div className='table-responsive'>
                  <table
                    className='datatable table table-hover table-center mb-0'
                    id='userTable'
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>UpdatedAt</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users?.map((item, index) => (
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.role.name}</td>
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

export default User;
