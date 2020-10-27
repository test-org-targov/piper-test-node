describe('test', function () {

  it('should load the app',function() {
    var title = element(by.control({viewName: "sap.ui.piper.view.App", id: /title/}));
    expect(title.getText()).toBe('Demo Sapui5 Page');
    //expect (true).toBe(true)
  });

});
