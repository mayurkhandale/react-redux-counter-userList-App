import counterReducer from './features/counter.feature';
import employeeReducer from  './features/Employee.feature';
import userListReducer from './features/userList.feature';
const rootReducer={
  counter:counterReducer,
  employee:employeeReducer,
  users:userListReducer
}
export default rootReducer;