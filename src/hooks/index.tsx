import React from 'react';
import { AuthProvider } from './Auth';

const ProviderContext: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default ProviderContext;
