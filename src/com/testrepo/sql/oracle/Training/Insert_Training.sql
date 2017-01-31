CREATE OR REPLACE PROCEDURE Insert_Training(pnObjid NUMBER) IS 

--Constants for status
STATUS_OPEN	varchar2(20):='1';
STATUS_ACCEPTED	varchar2(20):='2';



--Please Modify the cursor as you need

CURSOR m_MyTraining_cur IS Select
		Name,
		StartDate,
		EndDate,
		Course,
		Location,
		Fees,
		LastDate,
		StartTime,
		Type,
		moduser
		from table_MyTraining
	 where objid=pnObjid 
	 and not exists (select *from table_MyTraining where MyTraining2Training=pnObjid);


--variables
id	NUMBER:=0;
i_MyTraining_cur	m_MyTraining_cur%rowtype;

BEGIN
--opening cursor m_MyTraining_cur
	id:=0;
Begin
	OPEN m_MyTraining_cur;
	LOOP
	id := id-1;
	FETCH m_MyTraining_cur INTO i_MyTraining_cur;
	EXIT WHEN m_MyTraining_cur%NOTFOUND;

--Insert records in MyTraining

	INSERT INTO table_MyTraining(
		Name,
		StartDate,
		EndDate,
		Course,
		Location,
		Fees,
		LastDate,
		StartTime,
		Type,
		ORIGINID,
		DESTINITIONID,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		i_MyTraining_cur.Name,
		i_MyTraining_cur.StartDate,
		i_MyTraining_cur.EndDate,
		i_MyTraining_cur.Course,
		i_MyTraining_cur.Location,
		i_MyTraining_cur.Fees,
		i_MyTraining_cur.LastDate,
		i_MyTraining_cur.StartTime,
		i_MyTraining_cur.Type,
		id,
		pnObjid,
		i_MyTraining_cur.moduser,
		sysdate,
		null,
		null
		
	);
	END LOOP;
	close m_MyTraining_cur;
 End;
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;
