({
	calculate : function(component, event, helper) {
		var sum = parseInt(component.get("v.firstNumber"))+parseInt(component.get("v.secondNumber"));
        var eventObj = $A.get("e.c:Calc");
        eventObj.setParams({
            "sumResult":sum
        });
        eventObj.fire();
	}
})