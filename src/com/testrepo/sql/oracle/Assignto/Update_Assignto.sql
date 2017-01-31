CREATE OR REPLACE PROCEDURE Update_Assignto(pnObjid NUMBER) IS 

--Constants for status
STATUS_OPEN	varchar2(20):='1';
STATUS_ACCEPTED	varchar2(20):='2';


BEGIN

	Begin
		Update Table_Assignto set moduser=moduser 
		where objid=pnObjid;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

	End;

--Set all relation path for child if needed 
--Modify child record here

--Modifying Child record for Bug
--We ADDED a DUMMY code below, Modify it

	Begin
		update table_Bug set Bug2Assignto=pnObjid where Bug2Assignto=pnObjid;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

	End;

--Modifying Child record for Member
--We ADDED a DUMMY code below, Modify it

	Begin
		update table_Member set Member2Assignto=pnObjid where Member2Assignto=pnObjid;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

	End;

--Modifying Child record for MyBug
--We ADDED a DUMMY code below, Modify it

	Begin
		update table_MyBug set MyBug2Assignto=pnObjid where MyBug2Assignto=pnObjid;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

	End;

--Modifying Child record for MyTasks
--We ADDED a DUMMY code below, Modify it

	Begin
		update table_MyTasks set MyTasks2Assignto=pnObjid where MyTasks2Assignto=pnObjid;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

	End;

--Modifying Child record for Tasks
--We ADDED a DUMMY code below, Modify it

	Begin
		update table_Tasks set Tasks2Assignto=pnObjid where Tasks2Assignto=pnObjid;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

	End;

--Final Exception
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;
