import { atom, selector } from "recoil";
import player from "../../assets/player";

export const allPlayerState = atom({
  key: "allPlayerState",
  default: player,
});

export const positionFilterState = atom({
  key: "positionPlayerState",
  default: [],
});

export const filteredPlayers = selector({
  key: "filteredPlayers",
  get: ({ get }) => {
    const player = get(allPlayerState);
    const filter = get(positionFilterState);

    return player.filter(
      (players) => filter.length === 0 || filter.includes(players.position)
    );
  },
});
