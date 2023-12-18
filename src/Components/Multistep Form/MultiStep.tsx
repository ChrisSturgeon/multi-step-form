import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export default function MultiStep() {
  return (
    <div>
      <h1>Form</h1>
      <Outlet />
    </div>
  );
}
