const { expect } = require("chai");

describe("AllyToken", function () {
  it("Should deploy and assign total supply", async function () {
    const AllyToken = await ethers.getContractFactory("AllyToken");
    const token = await AllyToken.deploy(1000);

    const [owner] = await ethers.getSigners();
    const balance = await token.balanceOf(owner.address);

    expect(balance).to.equal(1000n * 10n ** 18n);
  });

  it("Should transfer tokens", async function () {
    const AllyToken = await ethers.getContractFactory("AllyToken");
    const token = await AllyToken.deploy(1000);

    const [owner, addr1] = await ethers.getSigners();

    await token.transfer(addr1.address, 100);

    const balance = await token.balanceOf(addr1.address);
    expect(balance).to.equal(100);
  });
});
