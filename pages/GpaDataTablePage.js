import React from 'react';
import { View } from 'react-native';
import GpaDataTable from '../components/GPADataTable';

const GpaDataTablePage = ({ gpaData, noOfSemesters }) => {
  return (
    <View>
      <GpaDataTable gpaData={gpaData} noOfSemesters={noOfSemesters} />
    </View>
  );
};

export default GpaDataTablePage;
