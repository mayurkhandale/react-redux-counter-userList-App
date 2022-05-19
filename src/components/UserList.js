import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const UserList = () => {
  const state = useSelector((store) => {
    return store['users'];
  });

  console.log(state, '11');
  const dispatch = useDispatch();
  let { loading, users, errorMessage } = state;

  return <h1>UserList</h1>;
};

export default UserList;
