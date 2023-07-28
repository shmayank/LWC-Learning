trigger totalNoOfContact on Contact (after update , after insert, after delete, after undelete) {
    
    if(trigger.isAfter || trigger.isDelete || trigger.isUpdate|| trigger.isUndelete){
        TotalContactCountHandler.countContact(trigger.new,trigger.old);
    }

}