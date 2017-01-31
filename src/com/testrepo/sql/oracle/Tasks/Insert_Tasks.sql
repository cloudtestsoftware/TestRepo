CREATE OR REPLACE PROCEDURE Insert_Tasks(pnObjid NUMBER) IS 

--Constants for status
STATUS_OPEN	varchar2(20):='1';
STATUS_ACCEPTED	varchar2(20):='2';



--Please Modify the cursor as you need

CURSOR m_Timesheet_cur IS Select
		Name,
		Sunday,
		Monday,
		Tuesday,
		Wednesday,
		Thursday,
		Friday,
		Saturday,
		moduser
		from table_Timesheet
	 where objid=pnObjid 
	 and not exists (select *from table_Timesheet where Timesheet2Tasks=pnObjid);


--variables
id	NUMBER:=0;
i_Timesheet_cur	m_Timesheet_cur%rowtype;

BEGIN
--opening cursor m_Timesheet_cur
	id:=0;
Begin
	OPEN m_Timesheet_cur;
	LOOP
	id := id-1;
	FETCH m_Timesheet_cur INTO i_Timesheet_cur;
	EXIT WHEN m_Timesheet_cur%NOTFOUND;

--Insert records in Timesheet

	INSERT INTO table_Timesheet(
		Name,
		Sunday,
		Monday,
		Tuesday,
		Wednesday,
		Thursday,
		Friday,
		Saturday,
		ORIGINID,
		DESTINITIONID,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		i_Timesheet_cur.Name,
		i_Timesheet_cur.Sunday,
		i_Timesheet_cur.Monday,
		i_Timesheet_cur.Tuesday,
		i_Timesheet_cur.Wednesday,
		i_Timesheet_cur.Thursday,
		i_Timesheet_cur.Friday,
		i_Timesheet_cur.Saturday,
		id,
		pnObjid,
		i_Timesheet_cur.moduser,
		sysdate,
		null,
		null
		
	);
	END LOOP;
	close m_Timesheet_cur;
 End;
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;
