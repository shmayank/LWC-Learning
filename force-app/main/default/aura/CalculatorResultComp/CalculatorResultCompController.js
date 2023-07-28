({
	getResult : function(component, event, helper) {
        var eventObj = event.getParam("sumResult");
        component.set("v.result",eventObj);
		
	}
})