public class GetAccountList {
    @Auraenabled
    public static List<Account> getAcc(){
        List<Account> acc = [Select Id,Name,BillingState,BillingCity,Phone from Account order by Name Limit 10];
        return acc;
    }
}