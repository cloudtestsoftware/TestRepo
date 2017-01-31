CREATE OR REPLACE PROCEDURE Update_Product(pnObjid NUMBER) IS 

--Constants for status
STATUS_OPEN	varchar2(20):='1';
STATUS_ACCEPTED	varchar2(20):='2';


BEGIN

	Begin
		Update Table_Product set Name=Name,
		ShortId=ShortId,
		Description=Description,
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
		update table_TestMatrix set TestMatrix2Product=pnObjid where TestMatrix2Product=pnObjid;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

	End;

--Final Exception
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;
