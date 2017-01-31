CREATE OR REPLACE PROCEDURE Update_Company(pnObjid NUMBER) IS 

--Constants for status
STATUS_OPEN	varchar2(20):='1';
STATUS_ACCEPTED	varchar2(20):='2';


BEGIN

	Begin
		Update Table_Company set Name=Name,
		Business=Business,
		ContactName=ContactName,
		Phone=Phone,
		MobileNo=MobileNo,
		Street=Street,
		ZipCode=ZipCode,
		State=State,
		Country=Country,
		moduser=moduser 
		where objid=pnObjid;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

	End;

--Set all relation path for child if needed 
--Modify child record here

--Modifying Child record for TestUser
--We ADDED a DUMMY code below, Modify it

	Begin
		update table_TestUser set TestUser2Company=pnObjid where TestUser2Company=pnObjid;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

	End;

--Modifying Child record for Subscription
--We ADDED a DUMMY code below, Modify it

	Begin
		update table_Subscription set Subscription2Company=pnObjid where Subscription2Company=pnObjid;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

	End;

--Final Exception
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;
