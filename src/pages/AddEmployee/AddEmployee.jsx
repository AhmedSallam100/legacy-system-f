import React from "react";
import "./add-employee.css";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";

const AddEmployee = () => {
  return (
    <div className="add-page add-employee">
      <Title text={"Add Employee"} />
      <form className="add-form">
        <div className="form-inputs">
          <div className="form-input">
            <i className="uil uil-user"></i>
            <input type="text" placeholder="Name" />
          </div>
          <div className="form-input">
            <i className="uil uil-envelope-alt"></i>
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-input">
            <i className="uil uil-phone"></i>
            <input type="text" placeholder="Phone Number" />
          </div>
          <div className="form-input">
            <i className="uil uil-hunting"></i>
            <input type="text" placeholder="Postion" />
          </div>
          <div className="form-input">
            <i className="uil uil-bag-alt"></i>
            <input type="text" placeholder="Job" />
          </div>
        </div>
        <button type="submit">
          <i className="uil uil-sign-out-alt"></i>
          <span>Save</span>
        </button>
      </form>
      <div className="table_component" role="region" tabIndex="0">
        <div className="table-head">
          <h1>Employees</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Postion</th>
              <th>Job</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Ahmed Sallam</td>
              <td>ahmed@gmail.com</td>
              <td>+20 1024289101</td>
              <td>CEO & Founder</td>
              <td>Full Stack Developer</td>
              <td className="action-icons">
                <div>
                  <form>
                    <button>
                      <i className="uil uil-trash-alt delete-icon"></i>
                    </button>
                  </form>
                  <form>
                    <button>
                      <i className="uil uil-pen delete-icon"></i>
                    </button>
                  </form>
                </div>
              </td>
            </tr>
            <tr>
              <td>02</td>
              <td>Ibrahim Albialy</td>
              <td>ibrahim@gmail.com</td>
              <td>+20 1024289101</td>
              <td>CEO & Founder</td>
              <td>Front End Developer</td>
              <td className="action-icons">
                <div>
                  <form>
                    <button>
                      <i className="uil uil-trash-alt delete-icon"></i>
                    </button>
                  </form>
                  <form>
                    <button>
                      <i className="uil uil-pen delete-icon"></i>
                    </button>
                  </form>
                </div>
              </td>
            </tr>
            <tr>
              <td>03</td>
              <td>Youssef Ashraf</td>
              <td>youssef@gmail.com</td>
              <td>+20 1024289101</td>
              <td>CEO & Founder</td>
              <td>Front End Developer</td>
              <td className="action-icons">
                <div>
                  <form>
                    <button>
                      <i className="uil uil-trash-alt delete-icon"></i>
                    </button>
                  </form>
                  <form>
                    <button>
                      <i className="uil uil-pen delete-icon"></i>
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddEmployee;
