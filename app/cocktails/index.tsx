import { useRouter } from "expo-router";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";

export default function CocktailsScreen() {
  const router = useRouter();
  const cocktailsList = [
    {
      id: 1,
      title: "Mojito",
      ingredients: [
        "Rhum blanc, menthe, sucre de canne, citron vert, eau gazeuse, glaçons",
      ],
      description: "Cocktail incontournable durant l'été !",
    },
    {
      id: 2,
      title: "Piña Colada",
      ingredients: ["Rhum blanc, lait de coco, jus d'ananas, glace pilée"],
      description: "Un cocktail tropical doux et rafraîchissant.",
    },

    {
      id: 3,
      title: "Margarita",
      ingredients: ["Tequila, Cointreau, citron vert, sel"],
      description: "Un classique mexicain, sucré et acidulé.",
    },

    {
      id: 4,
      title: "Daiquiri",
      ingredients: ["Rhum blanc, sucre de canne, citron vert"],
      description:
        "Un cocktail simple, mais efficace, avec une touche acidulée.",
    },

    {
      id: 5,
      title: "Caipirinha",
      ingredients: ["Cachaça, citron vert, sucre"],
      description: "Cocktail brésilien à base de cachaça, parfait pour l'été.",
    },

    {
      id: 6,
      title: "Bloody Mary",
      ingredients: [
        "Vodka, tomate, sauce Worcestershire, tabasco, citron, sel, poivre, céleri",
      ],
      description: "Un cocktail épicé, parfait pour le brunch.",
    },

    {
      id: 7,
      title: "Gin Tonic",
      ingredients: ["Gin, tonic, rondelles de citron, glaçons"],
      description: "Un cocktail classique, frais et pétillant.",
    },

    {
      id: 8,
      title: "Tequila Sunrise",
      ingredients: ["Tequila, jus d'orange, grenadine"],
      description: "Un cocktail aux couleurs d'un lever de soleil.",
    },

    {
      id: 9,
      title: "Cosmopolitan",
      ingredients: ["Vodka, Cointreau, jus de cranberry, citron vert"],
      description:
        "Un cocktail chic et fruité, célèbre grâce à la série 'Sex and the City'.",
    },

    {
      id: 10,
      title: "Mai Tai",
      ingredients: [
        "Rhum blanc, rhum ambré, orange curacao, lime, orgeat syrup",
      ],
      description: "Un cocktail exotique aux saveurs des îles.",
    },
  ];

  const handleNavigateToDetails = (cocktailId: Number) => {
    router.push("cocktails/" + cocktailId);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Liste des cocktails</Text>

      <FlatList
        data={cocktailsList}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button
              title="voir le cocktail"
              onPress={() => handleNavigateToDetails(item.id)}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: 20,
    gap: 20,
  },
  h1: {
    fontSize: 30,
    fontWeight: 600,
    textAlign: "center",
  },
  h2: {
    fontSize: 15,
    fontWeight: 600,
  },
  content: {
    display: "flex",
  },
});
