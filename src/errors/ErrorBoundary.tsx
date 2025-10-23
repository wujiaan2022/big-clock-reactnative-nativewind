// src/errors/ErrorBoundary.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

type Props = { children: React.ReactNode };
type State = { error?: Error };

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: undefined };

  componentDidCatch(error: Error) {
    console.error('FATAL_RENDER_ERROR', error);
    this.setState({ error });
  }

  render() {
    if (this.state.error) {
      return (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.content}>
            <Text style={styles.title}>Something crashed</Text>
            <Text style={styles.subtitle}>We caught it so the screen isn’t black.</Text>
            <Text selectable style={styles.details}>
              {String(this.state.error?.message || this.state.error)}
            </Text>
          </ScrollView>
        </View>
      );
    }
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  content: { gap: 8 },
  title: { fontSize: 20, fontWeight: '700' },
  subtitle: { fontSize: 14, opacity: 0.7 },
  details: { fontFamily: 'monospace' as any }
});
