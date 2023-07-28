public class Assignment_Zoxima {
    
    public static void AvgAmount_method(){
        List<Account> accList = [Select id,name, (Select id,amount from Opportunities where createdDate >= 2022-01-01T01:02:03Z and createdDate <= 2022-03-31T01:02:03Z ) from Account];
        // system.debug('avgAmount before'+avgAmount);
        for(Account acc: accList){
            if(acc.Opportunities.size()!=null){
                Decimal avgAmount = 0; //total amount of opp associated with Acc
                for(Opportunity opp: acc.Opportunities){
                    avgAmount += opp.amount;
                    system.debug('avgAmount before'+opp.Amount);                }
                system.debug('avgAmount before'+avgAmount);
                if(avgAmount!=0){
                    avgAmount = avgAmount/acc.Opportunities.size();
                }
                system.debug('avgAmount after'+avgAmount);
                if(avgAmount>10000){
                    acc.Account_Types__c = 'Key account';
                }
                else if(avgAmount>5000 && avgAmount<10000){
                    acc.Account_Types__c = 'Engage account';
                }
                else{
                    acc.Account_Types__c = 'Low Engagement account';
                }
                
            }
        }
        if(accList!=null){
            update accList;
        }
        
    }    
}