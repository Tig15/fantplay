import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { numberOfPlayers, valueOfPlayers } from "../atoms/MyTeam";
import { useRecoilValue } from "recoil";

const TeamStats = () => {
  const nofPlayers = useRecoilValue(numberOfPlayers);
  const value = useRecoilValue(valueOfPlayers);
  return (
    <View style={styles.container}>
      <View style={styles.valueContainer}>
        <Text style={styles.value}>{nofPlayers} / 15</Text>
      </View>

      <View style={styles.valueContainer}>
        <Text style={styles.label}>
          ${((100_000_000 - value) / 1_000_000).toFixed(1)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "90%",
    borderWidth: 2,
    borderColor: "#38abd1",
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  valueContainer: {
    marginRight: 25,
  },
  label: {
    color: "#333",
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default TeamStats;
