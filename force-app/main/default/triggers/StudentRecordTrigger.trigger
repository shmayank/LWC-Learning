trigger StudentRecordTrigger on Student_Details__c (after insert) {
    if(Trigger.isinsert || Trigger.isafter ){
        StudentRecordTriggerHandler.checkStudentStatus(Trigger.new);
    }

}