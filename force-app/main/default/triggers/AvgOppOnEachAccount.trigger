trigger AvgOppOnEachAccount on Opportunity (after insert, after update, after delete, after undelete) {
    Set<Id> accIds  = new Set<ID>();
    
    if(trigger.isAfter){
        for(Opportunity opp : trigger.new){
            accIds.add(opp.AccountId);
        }
    }
    
    if(trigger.isUpdate || trigger.isDelete || trigger.isUndelete){
        //for new opportunity
        
        for(Opportunity opp :  trigger.old){
            accIds.add(opp.AccountId);
        }
    }
    List<Account> lstAccountsToUpdate = new List<Account>();
    
    List<Account> accList = [select id,avgOpp__c, (select id from opportunities) from Account where id in :accIds];
    for(Account acc: accList){
        acc.avgOpp__c = acc.opportunities.size();
        lstAccountsToUpdate.add(acc);
    }
    if(lstAccountsToUpdate!=null){
        update lstAccountsToUpdate;
    }
    
}