CREATE OR REPLACE PROCEDURE Update_Tasks(pnObjid NUMBER) IS 

--Constants for status
STATUS_OPEN	varchar2(20):='1';
STATUS_ACCEPTED	varchar2(20):='2';


BEGIN

	Begin
		Update Table_Tasks set Name=Name,
		Description=Description,
		StartDate=StartDate,
		DueDate=DueDate,
		StoryPoint=StoryPoint,
		EstimatedHr=EstimatedHr,
		RemainingHr=RemainingHr,
		TaskStatusCode=TaskStatusCode,
		TaskCode=TaskCode,
		moduser=moduser 
		where objid=pnObjid;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

	End;

--Set all relation path for child if needed 
--Modify child record here

--Modifying Child record for Timesheet
--We ADDED a DUMMY code below, Modify it

	Begin
		update table_Timesheet set Timesheet2Tasks=pnObjid where Timesheet2Tasks=pnObjid;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

	End;

--Final Exception
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;
