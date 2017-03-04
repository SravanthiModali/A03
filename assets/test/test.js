QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Testing multiply function with several sets of inputs', function (assert) {
    assert.equal(App.multiply(1,1), 1, 'Tested with two relatively small positive numbers');
    assert.equal(App.multiply(500, 500), 250000, 'Tested with two large positive numbers. Any arguments greater than 100 will be set to 100.');
        //throws( block                                    [, expected ] [, message ] ) 
        assert.throws(function () { App.multiply(-5, -5); }, /Cost and count should not be negative/, 'Passing in null correctly raises an Error');
    assert.throws(function () { App.multiply(null,null); }, /Cost or count should not be null/, 'Passing in null correctly raises an Error');
        //throws( block                                    [, expected ] [, message ] ) 
    assert.throws(function () { App.multiply("a","b"); }, /Cost or count is not a number/, 'Passing in a string correctly raises an Error');
});
