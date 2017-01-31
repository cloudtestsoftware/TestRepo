CREATE OR REPLACE PROCEDURE Update_Release(pnObjid NUMBER) IS 

--Constants for status
STATUS_OPEN	varchar2(20):='1';
STATUS_ACCEPTED	varchar2(20):='2';


BEGIN

	Begin
		Update Table_Release set Name=Name,
		Version=Version,
		Branch=Branch,
		Description=Description,
		CodeFreeze=CodeFreeze,
		FunctionalTest=FunctionalTest,
		StagingDate=StagingDate,
		TestComplete=TestComplete,
		ReleaseDate=ReleaseDate,
		moduser=moduser 
		where objid=pnObjid;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

	End;

--Set all relation path for child if needed 
--Modify child record here

--Modifying Child record for TestRun
--We ADDED a DUMMY code below, Modify it

	Begin
		update table_TestRun set TestRun2Release=pnObjid where TestRun2Release=pnObjid;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

	End;

--Final Exception
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;
