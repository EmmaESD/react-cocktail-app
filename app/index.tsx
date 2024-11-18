import { useRouter } from "expo-router";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function IndexScreen() {
  const router = useRouter();

  const handlePressCounter = () => {
    router.push("counter");
  };
  const handlePressCocktails = () => {
    router.push("cocktailsList");
  };
  return (
    <View style={styles.containerMain}>
      <View style={styles.content}>
        <View>
          <Text style={styles.welcome}>Cocktails App</Text>
          <Text style={styles.h2}>
            Bienvenue dans l'application dédiée aux cocktails !
          </Text>
          <Button
            title="Voir tous les cocktails"
            onPress={handlePressCocktails}
          />
          <Button title="compteur de cocktails" onPress={handlePressCounter} />
        </View>
        <View>
          <Text style={styles.h2}>Qu'est-ce qu'un cocktails ?</Text>
          <Text style={styles.p}>
            Un cocktail est une boisson composée d’un mélange de différents
            ingrédients, généralement à base d’alcool, bien que certains
            cocktails soient sans alcool (mocktails). Il peut inclure des
            spiritueux, des liqueurs, des jus de fruits, des sodas, des sirops,
            ou encore des herbes et des épices pour le goût et la décoration.
            Les cocktails sont souvent préparés selon des recettes spécifiques,
            puis servis dans des verres adaptés avec des glaçons ou décorations
            comme des tranches de fruits. Ils sont appréciés pour leur saveur
            unique et leur présentation esthétique.
          </Text>
        </View>
        <View>
          <Text style={styles.h2}>Les meilleurs cocktails</Text>
          <View>
            <Text style={styles.p}>
              Mojito : Rhum, menthe, citron vert, sucre et eau pétillante.
            </Text>
          </View>
          <View>
            <Text style={styles.p}>
              Pina Colada : Rhum, jus d'ananas et crème de coco.
            </Text>
          </View>
          <View>
            <Text style={styles.p}>
              Sex on the Beach : Vodka, jus de cranberry, jus d'orange et
              liqueur de pêche.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textFooter}>© 2024 ESD. Tous droits réservés.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    display: "flex",
    justifyContent: "space-between",
  },
  welcome: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
  },
  content: {
    display: "flex",
    justifyContent: "flex-start",
    margin: 10,
    gap: 50,
  },
  footer: {
    backgroundColor: "#000000",
    width: "100%",
  },
  textFooter: {
    color: "#fff",
  },
  h2: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: 600,
  },
  p: {
    fontSize: 12,
  },
  button: {
    backgroundColor: "#ff7d33",
  },
});
