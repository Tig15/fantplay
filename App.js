import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
  FlatList,
  StatusBar,
} from "react-native";
import { RecoilRoot, useRecoilValue } from "recoil";

import TeamStats from "./src/components/TeamStats";
import Field from "./src/components/Field";
import PlayerListItem from "./src/components/PlayerListItem";
import Filters from "./src/components/Filter";

import player from "./assets/player";
import { allPlayerState, filteredPlayers } from "./src/atoms/Players";
import { AntDesign } from "@expo/vector-icons";

function App() {
  const [isPlayersVisible, setIsPlayersVisible] = useState(false);
  const [isFiltersVisible, setIsFilterVisible] = useState(false);

  const player = useRecoilValue(filteredPlayers);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" />
      <TeamStats />

      <Field />

      <Pressable
        onPress={() => setIsPlayersVisible(true)}
        style={styles.buttonContainer}
      >
        <Text>View players</Text>
      </Pressable>

      {isPlayersVisible && (
        <View style={styles.modal}>
          <Pressable
            onPress={() => setIsPlayersVisible(false)}
            style={styles.closeButton}
          >
            <AntDesign name="close" size={12} />
          </Pressable>

          <FlatList
            data={player}
            renderItem={({ item }) => <PlayerListItem player={item} />}
          />

          <Pressable
            onPress={() => setIsFilterVisible(true)}
            style={styles.buttonContainer}
          >
            <Text>Filters</Text>
          </Pressable>
        </View>
      )}

      {isFiltersVisible && (
        <View style={styles.modal}>
          <Filters />
          <Pressable
            onPress={() => setIsFilterVisible(false)}
            style={styles.buttonContainer}
          >
            <Text>Filter</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#72CC5E",
  },
  buttonContainer: {
    backgroundColor: "orange",
    width: "90%",
    margin: 20,
    padding: 10,
    alignItems: "center",
    borderRadius: 50,
    marginTop: "auto",
  },
  closeButton: {
    backgroundColor: "orange",
    borderRadius: 50,
    width: 16,
    height: 16,
    position: "absolute",
    right: 10,
    top: 5,
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    height: "70%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    width: "100%",
    paddingTop: 10,
  },
});

export default function RecoilApp() {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}
