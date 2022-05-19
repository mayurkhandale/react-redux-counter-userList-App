import { createSlice } from '@reduxjs/toolkit';
import { EmployeeService } from '../../services/EmployeeService';
const initialSate = {
  employees: EmployeeService.getAllEmployees(),
};

let employeeSlice = createSlice({
  name: 'employee',
  initialState: initialSate,
  reducers: {
    updateSelected: function (state, action) {
      state.employees = state.employees.map(items=>{
        if (items.id === action.payload){
          return{
            ...items,
            isSelected: !items.isSelected,
          };
        } else return items;
      });
    },
  },
});

export const { updateSelected } = employeeSlice.actions;
export default employeeSlice.reducer;
