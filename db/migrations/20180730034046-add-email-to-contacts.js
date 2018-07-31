'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Contacts','email', {
      allowNull: true,
      type: Sequelize.STRING
    });
  },

  down: (queryInterface, Sequelize) => {
  return que,

  describe("#iterativeSearch()", () => {

    const zelda = ["Zelda Smith", "000-100-111", "zelda@nintendo.com"];
    const snake = ["Solid Snake", "100-100-100", "snake@konami.com"];
    const magus = ["Magus Johnson", "101-010-101", "magus@squaresoft.com"];
    const alloy = ["Alloy Rodriguez", "111-111-111", "allow@guerrilla-games.com"];

    it("should return null when called with an empty array", () => {
      expect(this.book.iterativeSearch([], "Alloy")).toBeNull();
    });

  });
}
}
