trigger testTrigger on Account (after insert, after update) {
    Set<ID> ids =  new Set<ID>();
    if(Trigger.isInsert || Trigger.isUpdate){
        for(Account acc: Trigger.new){
            if(acc.Rating=='Cold'){
                ids.add(acc.Id);
            }
        }
    }
    List<Case> cases = new List<Case>();
    List<Account> accList = [Select id, (select id, status from cases) from Account where id in :ids];
    for(Account acc: accList){
        if(acc.cases.size()>0){
            boolean openCaseExist = false;
            for(Case newcase: acc.cases){
                if(newcase.Status != 'Closed'){
                    openCaseExist = true;
                    break;
                }
                if(!openCaseExist){
                    Case newCase1= new Case();
                    newCase1.AccountId = acc.Id;
                    newCase1.status= '';
                    newCase1.Origin = '';
                }
            }
        }
        else{
            Case newCase = new Case();
            newCase.AccountId = acc.Id;
            newCase.status= '';
            newCase.Origin = '';
        }
    }
    
}