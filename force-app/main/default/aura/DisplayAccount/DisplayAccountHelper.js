({
    getAccontRecord: function(component) {
        var action = component.get('c.getAcc');
        // Set up the callback
        var self = this;
        action.setCallback(this, function(actionResult) {
            component.set('v.lstAccount', actionResult.getReturnValue());
        });
        $A.enqueueAction(action);
    }
})