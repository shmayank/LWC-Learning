public class StudentRecordTriggerHandler {
    
    public static void checkStudentStatus(List<Student_Details__c> newStudent){
        try{
            Set<Id> StuId = new Set<id>();
            
            if(newStudent!=null){
                for(Student_Details__c stu : newStudent){
                    StuId.add(stu.Id);
                }
            }
            
            List<Student_Details__c> studentToUpdate = new List<Student_Details__c>();
            studentToUpdate = [Select id,Background_status__c,Pan_number__c,Phone__c from Student_Details__c where id in : StuId];
            
            if(StuId!=null){
                List<Blacklisted_candidate__c> blackListedStu = [Select id from Blacklisted_candidate__c where Pan_number__c = :studentToUpdate[0].Pan_number__c limit 1];
                if(blackListedStu!=null){
                    blackListedStu[0].Phone_number__c = studentToUpdate[0].Phone__c;
                    update blackListedStu;
                    studentToUpdate[0].Background_status__c = 'Student is blacklisted';
                    update studentToUpdate;
                }
                
            }
        }
        catch(Exception e){
            system.debug('failed to update');
        }
        
    }
}