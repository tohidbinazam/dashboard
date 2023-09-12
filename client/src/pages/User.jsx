import DataTable from 'datatables.net-dt';
import photo from '../assets/img/specialities/specialities-05.png';
import { useEffect } from 'react';
import DefaultModal from '../components/modal/DefaultModal';

const User = () => {
  useEffect(() => {
    new DataTable('#myTable');
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
                <li className='breadcrumb-item active'>Users</li>
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

        <DefaultModal title='Add Specialties' id='addUser'>
          <form>
            <div className='row form-row'>
              <div className='col-12 col-sm-6'>
                <div className='form-group'>
                  <label>Specialities</label>
                  <input type='text' className='form-control' />
                </div>
              </div>
              <div className='col-12 col-sm-6'>
                <div className='form-group'>
                  <label>Image</label>
                  <input type='file' className='form-control' />
                </div>
              </div>
            </div>
            <button type='submit' className='btn btn-primary w-100'>
              Save Changes
            </button>
          </form>
        </DefaultModal>

        <div className='row'>
          <div className='col-sm-12'>
            <div className='card'>
              <div className='card-body'>
                <div className='table-responsive'>
                  <table
                    className='datatable table table-hover table-center mb-0 display'
                    id='myTable'
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Specialities</th>
                        <th className='text-end'>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#SP001</td>
                        <td>
                          <h2 className='table-avatar'>
                            <a
                              href='profile.html'
                              className='avatar avatar-sm me-2'
                            >
                              <img
                                className='avatar-img'
                                src={photo}
                                alt='Speciality'
                              />
                            </a>
                            <a href='profile.html'>Urology</a>
                          </h2>
                        </td>
                        <td className='text-end'>
                          <div className='actions'>
                            <a
                              className='btn btn-sm bg-success-light'
                              data-bs-toggle='modal'
                              href='#edit_specialities_details'
                            >
                              <i className='fe fe-pencil'></i> Edit
                            </a>
                            <a
                              data-bs-toggle='modal'
                              href='#delete_modal'
                              className='btn btn-sm bg-danger-light'
                            >
                              <i className='fe fe-trash'></i> Delete
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#SP002</td>
                        <td>
                          <h2 className='table-avatar'>
                            <a
                              href='profile.html'
                              className='avatar avatar-sm me-2'
                            >
                              <img
                                className='avatar-img'
                                src={photo}
                                alt='Speciality'
                              />
                            </a>
                            <a href='profile.html'>Neurology</a>
                          </h2>
                        </td>
                        <td className='text-end'>
                          <div className='actions'>
                            <a
                              className='btn btn-sm bg-success-light'
                              data-bs-toggle='modal'
                              href='#edit_specialities_details'
                            >
                              <i className='fe fe-pencil'></i> Edit
                            </a>
                            <a
                              data-bs-toggle='modal'
                              href='#delete_modal'
                              className='btn btn-sm bg-danger-light'
                            >
                              <i className='fe fe-trash'></i> Delete
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#SP003</td>
                        <td>
                          <h2 className='table-avatar'>
                            <a
                              href='profile.html'
                              className='avatar avatar-sm me-2'
                            >
                              <img
                                className='avatar-img'
                                src={photo}
                                alt='Speciality'
                              />
                            </a>
                            <a href='profile.html'>Orthopedic</a>
                          </h2>
                        </td>
                        <td className='text-end'>
                          <div className='actions'>
                            <a
                              className='btn btn-sm bg-success-light'
                              data-bs-toggle='modal'
                              href='#edit_specialities_details'
                            >
                              <i className='fe fe-pencil'></i> Edit
                            </a>
                            <a
                              data-bs-toggle='modal'
                              href='#delete_modal'
                              className='btn btn-sm bg-danger-light'
                            >
                              <i className='fe fe-trash'></i> Delete
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#SP004</td>
                        <td>
                          <h2 className='table-avatar'>
                            <a
                              href='profile.html'
                              className='avatar avatar-sm me-2'
                            >
                              <img
                                className='avatar-img'
                                src={photo}
                                alt='Speciality'
                              />
                            </a>
                            <a href='profile.html'>Cardiologist</a>
                          </h2>
                        </td>
                        <td className='text-end'>
                          <div className='actions'>
                            <a
                              className='btn btn-sm bg-success-light'
                              data-bs-toggle='modal'
                              href='#edit_specialities_details'
                            >
                              <i className='fe fe-pencil'></i> Edit
                            </a>
                            <a
                              data-bs-toggle='modal'
                              href='#delete_modal'
                              className='btn btn-sm bg-danger-light'
                            >
                              <i className='fe fe-trash'></i> Delete
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#SP005</td>
                        <td>
                          <h2 className='table-avatar'>
                            <a
                              href='profile.html'
                              className='avatar avatar-sm me-2'
                            >
                              <img
                                className='avatar-img'
                                src={photo}
                                alt='Speciality'
                              />
                            </a>
                            <a href='profile.html'>Dentist</a>
                          </h2>
                        </td>
                        <td className='text-end'>
                          <div className='actions'>
                            <a
                              className='btn btn-sm bg-success-light'
                              data-bs-toggle='modal'
                              href='#edit_specialities_details'
                            >
                              <i className='fe fe-pencil'></i> Edit
                            </a>
                            <a
                              className='btn btn-sm bg-danger-light'
                              data-bs-toggle='modal'
                              href='#delete_modal'
                            >
                              <i className='fe fe-trash'></i> Delete
                            </a>
                          </div>
                        </td>
                      </tr>
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
