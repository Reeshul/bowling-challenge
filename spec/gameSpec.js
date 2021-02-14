"use-strict";

describe("score", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it("can create a scorecard", () => {
    expect(game).toBeInstanceOf(Game);
  });

  it("returns 0 after 20 consecutive rolls of hitting 0 pins", () => {
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    expect(game.score()).toBe(0);
  });

  it("returns 60 after 20 consecutive rolls of hitting 3 pins", () => {
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    expect(game.score()).toBe(60);
  });

  it("adds bonus points after getting a spare", () => {
    game.roll(8);
    game.roll(2);
    game.roll(6);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    expect(game.score()).toBe(22);
    expect(game.score()).not.toBe(16);
  });

  it("adds bonus points after getting a strike", () => {
    game.roll(10);
    game.roll(7);
    game.roll(2);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    expect(game.score()).toBe(28);
    expect(game.score()).not.toBe(19);
    expect(game.score()).not.toBe(24);
    expect(game.score()).not.toBe(26);
  });

  it("returns 100 after 10 consecutive spares each with 0 on the first roll", () => {
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    game.roll(10);
    game.roll(0);
    expect(game.score()).toBe(100);
  });

  it("returns 133 after the following rolls: [1,4,4,5,6,4,5,5,10,0,1,7,3,6,4,10,2,8,6]", () => {
    game.roll(1);
    game.roll(4);
    game.roll(4);
    game.roll(5);
    game.roll(6);
    game.roll(4);
    game.roll(5);
    game.roll(5);
    game.roll(10);
    game.roll(0);
    game.roll(1);
    game.roll(7);
    game.roll(3);
    game.roll(6);
    game.roll(4);
    game.roll(10);
    game.roll(2);
    game.roll(8);
    game.roll(6);
    expect(game.score()).toBe(133);
  });
});
