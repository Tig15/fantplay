import React from "react";
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  useWindowDimensions,
} from "react-native";

import field from "../../assets/field.jpeg";
import FieldPlayer from "./FieldPlayer";
import { useRecoilValue } from "recoil";
import { myPlayersByPosition } from "../atoms/MyTeam";

// const players = {
//   FWD: [null, null],
//   MID: [null, null, null, null],
//   DEF: [null, null, null, null],
//   GKC: [null],
// };

const Field = () => {
  const players = useRecoilValue(myPlayersByPosition);

  const windowWidth = useWindowDimensions().width;
  return (
    <ScrollView>
      <ImageBackground
        source={field}
        resizeMode="contain"
        style={{
          width: windowWidth,
          height: (windowWidth * 3) / 2,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {Object.keys(players).map((position) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            {players[position].map((player) => (
              <FieldPlayer player={player} position={position} />
            ))}
          </View>
        ))}
      </ImageBackground>
    </ScrollView>
  );
};

export default Field;
