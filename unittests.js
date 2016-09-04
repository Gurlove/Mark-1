// all  units tests go here

// testing toggle_sales_report
QUnit.test("toggle report", function(assert)
{
	toggle_sales_report();
    assert.equal(salesreport.isVisible(), true, "Report should be visible.");
});
