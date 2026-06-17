import React, { type ReactNode, useState, useEffect, Suspense } from 'react';
import { View, ActivityIndicator, InteractionManager, StyleSheet } from 'react-native';

type LazyScreenProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

export function Lazy({ children, fallback }: LazyScreenProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const task = InteractionManager.runAfterInteractions(() => {
      setReady(true);
    });
    return () => task.cancel();
  }, []);

  return (
    <Suspense  fallback={fallback ?? <DefaultLoader />}>
      {ready ? children : fallback ?? <DefaultLoader />}
    </Suspense>
  );
}

const DefaultLoader = () => (
  <View style={styles.loader}>
    <ActivityIndicator size="large" color="#0B845C" />
  </View>
);

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
