import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSelected } from '../redux/features/Employee.feature';
const Employee = () => {
  const store = useSelector((state) => {
    return state['employee'];
  });
  console.log(updateSelected, 'ii');
  const dispatch = useDispatch();
  console.log(store, '77');
  const { employees } = store;
  console.log(employees);
  const HandleChange = (empId) => {
    console.log('its working', empId);
    dispatch(updateSelected(empId));
  };
  return (
    <>
      <div className="main-block">
        <div className="sub-div">
          <ul>
            {employees.length > 0 &&
              employees.map((items) => {
                return (
                  <>
                    <h3>
                      <input
                        type="checkbox"
                        checked={items.isSelected}
                        onChange={() => HandleChange(items.id)}
                      />
                      {items.name}
                    </h3>
                  </>
                );
              })}
          </ul>
        </div>

        {employees.length > 0 &&
          employees.map((items) => {
            return (
              <div className="sub-div" key={items.id}>
                {items.isSelected && (
                  <>
                    <div>
                      {items.name}
                      <br />
                      {items.email}
                      <br />
                    </div>
                  </>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Employee;
