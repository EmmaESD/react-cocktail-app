import { StyleSheet, Text, View } from "react-native";

export default function CocktailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.h2}>Liste des Cocktails</Text>
      <View style={styles.content}>
        <Text>
          Mojito: Rhum blanc, menthe, sucre de canne, citron vert, eau gazeuse,
          glaçons
        </Text>
        <Text>
          Frozen Strawberry : Daiquiri Rhum blanc, fraises, sucre, lime, glace
          pilée
        </Text>
        <Text>
          {" "}
          Rum Punch : Rhum blanc, rhum ambré, orange, ananas, grenadine{" "}
        </Text>
        <Text>Mint Julep : Bourbon, menthe, sucre, eau </Text>
        <Text>Old Fashioned : Whiskey, sucre, Angostura, zeste d'orange </Text>
        <Text>Mimosa : Champagne, jus d'orange </Text>
        <Text>
          Piña Colada : Rhum blanc, lait de coco, jus d'ananas, glaçons
        </Text>
        <Text>
          Margarita : Tequila, triple sec, lime, sel (sur le bord du verre),
          glaçons
        </Text>
        <Text>
          {" "}
          Cosmopolitan : Vodka, triple sec, jus de cranberry, jus de citron vert
        </Text>
        <Text>
          {" "}
          Daiquiri : Rhum blanc, sucre de canne, jus de lime Negroni Gin,
          vermouth rouge, Campari{" "}
        </Text>
        <Text>
          {" "}
          Bloody Mary : Vodka, jus de tomate, citron, sauce Worcestershire, sel,
          poivre, tabasco
        </Text>
        <Text>
          Mai Tai : Rhum blanc, rhum ambré, lime, sirop d'orgeat, curaçao orange
        </Text>
        <Text>
          {" "}
          Caipirinha : Cachaça, sucre de canne, citron vert, glaçons{" "}
        </Text>
        <Text>
          {" "}
          Long Island : Iced Tea Vodka, gin, rhum blanc, tequila, triple sec,
          cola, lime{" "}
        </Text>
        <Text>
          {" "}
          Whiskey Sour : Whiskey, jus de citron, sucre, blanc d'œuf (facultatif){" "}
        </Text>
        <Text>Gin Tonic : Gin, tonic, rondelles de citron </Text>
        <Text> Tom Collins : Gin, jus de citron, sucre, eau gazeuse </Text>
        <Text>Tequila Sunrise : Tequila, jus d'orange, grenadine </Text>
        <Text>
          Sex on the Beach : Vodka, liqueur de pêche, jus de cranberry, jus
          d'orange{" "}
        </Text>
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
    margin: 20,
    gap: 30,
  },
  h2: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: 600,
  },
  content: {
    display: "flex",
    gap: 10,
  },
});
