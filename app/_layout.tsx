import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Accueil", headerShown: false }}
      />
      <Stack.Screen
        name="counter/index"
        options={{ title: "Compteur", headerShown: false }}
      />
      <Stack.Screen
        name="cocktails/index"
        options={{ title: "liste des cocktails", headerShown: false }}
      />
      <Stack.Screen
        name="cocktails/[id]"
        options={{ title: "Details d'un cocktail", headerShown: false }}
      />
    </Stack>
  );
}
