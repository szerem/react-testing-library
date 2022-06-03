describe("My test suite", () => {


  it("should meet condition 1", () => {
    const condition1 = true;
    expect(condition1).toEqual(true);
  });

  it.skip("should throw an error", () => {
    throw Error("error message");    
  });

  it("should meet condition 2", () => {
    const condition2 = true;
    expect(condition2).toEqual(true);
  });

  it.skip("should meet condition 3", () => {
    const condition3 = true;
    expect(condition3).toEqual(false);
  });

});
