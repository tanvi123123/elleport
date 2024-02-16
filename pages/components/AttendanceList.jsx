// AttendanceList.jsx
import React from 'react';
import ConditionalBox from './ConditionalBox.jsx';
import names from './names';

const AttendanceList = () => {
  return (
    <div>
      {names.map((name, index) => (
        <ConditionalBox key={index} name={name} />
      ))}
    </div>
  );
};

export default AttendanceList;
