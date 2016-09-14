// all  units tests go here

// testing toggle_sales_report
QUnit.test("toggle report", function(assert)
{
	toggle_sales_report();
    assert.equal(salesreport.isVisible(), true, "Report should be visible.");
});

//testing toggle_edit_sales_report
QUnit.test("toggle edit sales", function(assert)
{
	toggle_edit_sales_report();
	assert.equal(salesreport.isVisible(), true, "Edit Sales Report should be visible.");
});
		
//testing toggle_add_sales_report
QUnit.test("toggle add sales", function(assert)
{
	toggle_add_sales_report();
	assert.equal(addsalesreport.isVisible(), true, "Add Sales Report should be visible.");
});
		