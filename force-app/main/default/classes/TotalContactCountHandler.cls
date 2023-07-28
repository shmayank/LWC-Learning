public class TotalContactCountHandler {
    
    public static void countContact(List<Contact> newCon, List<Contact> oldCon){
        Set<Id> accId = new Set<id>();
        if(newCon!=null){
            for(Contact c : newCon){
                if(c.accountId!=null){
                    accId.add(c.accountId);
                }
            }
        }
        if(oldCon!=null){
            for(Contact c : oldCon){
                if(c.accountId!=null){
                    accId.add(c.accountId);
                }
            }
        }
        List<Account> accList = [Select id, Total_no_of_coontact__c, (Select id from Contacts) from Account where id in : accId];
        if(accList!=null){
            for(Account acc: accList){                
                acc.Total_no_of_coontact__c = acc.Contacts.size();
            }
        }
        
        if(accList.size()>0) update accList;
        system.debug('accList');
        
    }
    /*trigger CountContactOnAccount on Contact (after INSERT, after UPDATE, after DELETE ) {
        Set <Id> accountIds = new Set <Id>();
        List <Account> lstAccountsToUpdate = new List <Account>();
        if(Trigger.isInsert){
            for(Contact con:trigger.new){
                accountIds.add(con.accountID);
            }
        }
        if(Trigger.isUpdate|| Trigger.isDelete){
            for(Contact con:trigger.old){
                accountIds.add(con.accountID);
            }
        }
        
        for(Account acc:[SELECT Id,Name,Count_Contact__c,(Select Id from Contacts) from Account where Id IN: accountIds]){
            Account accObj = new Account ();
            accObj.Id = acc.Id;
            accObj.Count_Contact__c = acc.Contacts.size();
            lstAccountsToUpdate.add(accObj);
        }
        
        UPDATE lstAccountsToUpdate;
    }*/
}