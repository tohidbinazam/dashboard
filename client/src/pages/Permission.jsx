import DefaultModal from '../components/modal/DefaultModal';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'datatables.net-dt';
import {
  addPermission,
  deletePermission,
  getAllPermission,
} from '../features/user/userApiSlice';
import { clearMsg, selectUser } from '../features/user/userSlice';
import useInput from '../hooks/useInput';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import timeAgo from '../utils/timeAgo';

const Permission = () => {
  const dispatch = useDispatch();
  const { permission, message, error } = useSelector(selectUser);

  const { input, inputChange, clearFrom } = useInput({
    name: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.name) {
      return toast.error('Please fill all the fields');
    }
    dispatch(addPermission(input));
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
        dispatch(deletePermission(id));
      }
    });
  };

  if (message) {
    toast.success(message);
    dispatch(clearMsg());
  }
  if (error) {
    toast.error(error);
    dispatch(clearMsg());
  }

  new DataTable('#permissionTable');
  useEffect(() => {
    dispatch(getAllPermission());
  }, [dispatch]);
  return (
    <div className='page-wrapper'>
      <div className='content container-fluid'>
        <div className='page-header'>
          <div className='row'>
            <div className='col-sm-7 col-auto'>
              <h3 className='page-title'>Permission</h3>
              <ul className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <a href='index.html'>Dashboard</a>
                </li>
                <li className='breadcrumb-item active'>Permission</li>
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

        <DefaultModal title='Add Permission' id='addUser'>
          <form onSubmit={handleSubmit}>
            <div className='row form-row'>
              <div className='col-12 col-sm-12'>
                <div className='form-group'>
                  <label>Name</label>
                  <input
                    type='text'
                    name='name'
                    onChange={inputChange}
                    value={input.name}
                    placeholder='Permission name'
                    className='form-control'
                  />
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
                <h4 className='card-title'>Permission List</h4>
              </div>
              <div className='card-body'>
                <div className='table-responsive'>
                  <table
                    className='datatable table table-hover table-center mb-0'
                    id='permissionTable'
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>name</th>
                        <th>slug</th>
                        <th>CreatedAt</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {permission?.map((item, index) => (
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.slug}</td>
                          <td>{timeAgo(item.createdAt)}</td>

                          <td>
                            <div className='status-toggle'>
                              <input
                                type='checkbox'
                                id='status_1'
                                className='check'
                                checked
                              />
                              <label htmlFor='status_1' className='checktoggle'>
                                checkbox
                              </label>
                            </div>
                          </td>
                          <td>
                            <div className='actions'>
                              <button
                                className='btn btn-sm bg-success-light me-2'
                                data-bs-toggle='modal'
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

export default Permission;
