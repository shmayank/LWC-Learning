public with sharing class AccountController{
@AuraEnabled

public static void saveAccount (Account acc) {

insert acc;

}
}