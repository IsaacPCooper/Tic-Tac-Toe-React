describe("Game Is In Progress", () => {
  it("should show when a game is ongoing", () => {
    const ongoingcheck = ONGOING_GAME;
    expect(ongoingcheck).toBe(-1);
  });
});
