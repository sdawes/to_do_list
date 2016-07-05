var assert = require('assert');

describe('to do list app', function() {


  it('should show a title', function() {
    assert.ok(this.browser.success);
    assert.equal(this.browser.text('h1'), 'To Do List App');
  });

  

});
