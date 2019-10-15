import App from "./App";
import ONGOING_GAME from "./App";

describe("Game Is In Progress", () => {
  it("should show when a game is ongoing", () => {
    const ongoingcheck = App(ONGOING_GAME);
    expect(ongoingcheck).toBe(-1);
  });
});
