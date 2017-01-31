CREATE OR REPLACE PROCEDURE Update_Jenkins(pnObjid NUMBER) IS 

--Constants for status
STATUS_OPEN	varchar2(20):='1';
STATUS_ACCEPTED	varchar2(20):='2';


BEGIN

	Begin
		Update Table_Jenkins set Name=Name,
		JenkinUrl=JenkinUrl,
		UserToken=UserToken,
		UserName=UserName,
		Password=Password,
		moduser=moduser 
		where objid=pnObjid;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

	End;

--Set all relation path for child if needed 
--Modify child record here

--Modifying Child record for TestMatrix
--We ADDED a DUMMY code below, Modify it

	Begin
		update table_TestMatrix set TestMatrix2Jenkins=pnObjid where TestMatrix2Jenkins=pnObjid;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

	End;

--Final Exception
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;
