CREATE OR REPLACE PROCEDURE Update_Training(pnObjid NUMBER) IS 

--Constants for status
STATUS_OPEN	varchar2(20):='1';
STATUS_ACCEPTED	varchar2(20):='2';


BEGIN

	Begin
		Update Table_Training set Name=Name,
		StartDate=StartDate,
		EndDate=EndDate,
		Course=Course,
		Location=Location,
		Fees=Fees,
		LastDate=LastDate,
		StartTime=StartTime,
		TaskCode=TaskCode,
		Status=Status,
		moduser=moduser 
		where objid=pnObjid;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

	End;

--Set all relation path for child if needed 
--Modify child record here

--Modifying Child record for MyTraining
--We ADDED a DUMMY code below, Modify it

	Begin
		update table_MyTraining set MyTraining2Training=pnObjid where MyTraining2Training=pnObjid;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

	End;

--Final Exception
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;
