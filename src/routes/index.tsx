import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { useAuth } from '../hooks/Auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#312e38',
        }}
      >
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    );
  }
  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
