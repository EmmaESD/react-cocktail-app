import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function CounterScreen() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <View style={styles.container}>
      <Text>Compteur de cocktails</Text>
      <Text>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={increment} />
        <Button title="-" onPress={decrement} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    gap: 30,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
});
