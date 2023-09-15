import { atom, selector } from "recoil";

export const myFormationState = atom({
  key: "myFormation",
  default: {
    FWD: 2,
    MID: 4,
    DEF: 4,
    GCK: 1,
  },
});

export const myPlayersState = atom({
  key: "myPlayers",
  default: [],
});

const positions = ["FWD", "MID", "DEF", "GCK"];

export const myPlayersByPosition = selector({
  key: "myPlayerByPosition",
  get: ({ get }) => {
    const players = get(myPlayersState);
    const formation = get(myFormationState);

    const groupedPlayers = {};

    positions.forEach((position) => {
      groupedPlayers[position] = players.filter((p) => p.postion == position);

      for (
        let i = groupedPlayers[position].length;
        i < formation[position];
        i++
      ) {
        groupedPlayers[position].push(null);
      }
    });

    return groupedPlayers;
  },
});

export const numberOfPlayers = selector({
  key: "numberOfPlayers",
  get: ({ get }) => {
    return get(myPlayersState).length;
  },
});

export const valueOfPlayers = selector({
  key: "valueOfPlayers",
  get: ({ get }) => {
    return get(myPlayersState).reduce((acc, player) => acc + player.price, 0);
  },
});
