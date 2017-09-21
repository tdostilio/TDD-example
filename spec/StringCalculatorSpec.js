it("Should return 0 for input '' ", function() {
    expect(Calculator('')).toEqual(0);
});
it("Should return 3 for input 3 ", function() {
    expect(Calculator('3')).toEqual(3);
});
it("Should return 8 for input 3,5 ", function() {
    expect(Calculator('3,5')).toEqual(8);
});
it("Should return 13 for input 5,8 ", function() {
    expect(Calculator('5,8')).toEqual(13);
});
