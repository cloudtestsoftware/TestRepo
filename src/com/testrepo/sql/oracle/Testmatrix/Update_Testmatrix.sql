CREATE OR REPLACE PROCEDURE Update_Testmatrix(pnObjid NUMBER) IS 

--Constants for status
STATUS_OPEN	varchar2(20):='1';
STATUS_ACCEPTED	varchar2(20):='2';


BEGIN

	Begin
		Update Table_Testmatrix set moduser=moduser 
		where objid=pnObjid;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

	End;

--Set all relation path for child if needed 
--Modify child record here

--Modifying Child record for GroupRun
--We ADDED a DUMMY code below, Modify it

	Begin
		update table_GroupRun set GroupRun2Testmatrix=pnObjid where GroupRun2Testmatrix=pnObjid;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

	End;

--Modifying Child record for MatrixMap
--We ADDED a DUMMY code below, Modify it

	Begin
		update table_MatrixMap set MatrixMap2Testmatrix=pnObjid where MatrixMap2Testmatrix=pnObjid;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

	End;

--Final Exception
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;
