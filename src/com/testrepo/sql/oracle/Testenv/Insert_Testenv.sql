CREATE OR REPLACE PROCEDURE Insert_Testenv(pnObjid NUMBER) IS 

--Constants for status
STATUS_OPEN	varchar2(20):='1';
STATUS_ACCEPTED	varchar2(20):='2';



--Please Modify the cursor as you need

CURSOR m_ScenerioRun_cur IS Select
		Name,
		Note,
		Status,
		RunType,
		ExecutedBy,
		DefectNo,
		RunDate,
		moduser
		from table_ScenerioRun
	 where objid=pnObjid 
	 and not exists (select *from table_ScenerioRun where ScenerioRun2Testenv=pnObjid);


--variables
id	NUMBER:=0;
i_ScenerioRun_cur	m_ScenerioRun_cur%rowtype;

BEGIN
--opening cursor m_ScenerioRun_cur
	id:=0;
Begin
	OPEN m_ScenerioRun_cur;
	LOOP
	id := id-1;
	FETCH m_ScenerioRun_cur INTO i_ScenerioRun_cur;
	EXIT WHEN m_ScenerioRun_cur%NOTFOUND;

--Insert records in ScenerioRun

	INSERT INTO table_ScenerioRun(
		Name,
		Note,
		Status,
		RunType,
		ExecutedBy,
		DefectNo,
		RunDate,
		ORIGINID,
		DESTINITIONID,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		i_ScenerioRun_cur.Name,
		i_ScenerioRun_cur.Note,
		i_ScenerioRun_cur.Status,
		i_ScenerioRun_cur.RunType,
		i_ScenerioRun_cur.ExecutedBy,
		i_ScenerioRun_cur.DefectNo,
		i_ScenerioRun_cur.RunDate,
		id,
		pnObjid,
		i_ScenerioRun_cur.moduser,
		sysdate,
		null,
		null
		
	);
	END LOOP;
	close m_ScenerioRun_cur;
 End;
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;
