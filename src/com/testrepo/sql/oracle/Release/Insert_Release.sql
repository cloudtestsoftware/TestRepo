CREATE OR REPLACE PROCEDURE Insert_Release(pnObjid NUMBER) IS 

--Constants for status
STATUS_OPEN	varchar2(20):='1';
STATUS_ACCEPTED	varchar2(20):='2';



--Please Modify the cursor as you need

CURSOR m_TestRun_cur IS Select
		Name,
		Description,
		DbEnv,
		AppUrl,
		DueDate,
		moduser
		from table_TestRun
	 where objid=pnObjid 
	 and not exists (select *from table_TestRun where TestRun2Release=pnObjid);


--variables
id	NUMBER:=0;
i_TestRun_cur	m_TestRun_cur%rowtype;

BEGIN
--opening cursor m_TestRun_cur
	id:=0;
Begin
	OPEN m_TestRun_cur;
	LOOP
	id := id-1;
	FETCH m_TestRun_cur INTO i_TestRun_cur;
	EXIT WHEN m_TestRun_cur%NOTFOUND;

--Insert records in TestRun

	INSERT INTO table_TestRun(
		Name,
		Description,
		DbEnv,
		AppUrl,
		DueDate,
		ORIGINID,
		DESTINITIONID,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		i_TestRun_cur.Name,
		i_TestRun_cur.Description,
		i_TestRun_cur.DbEnv,
		i_TestRun_cur.AppUrl,
		i_TestRun_cur.DueDate,
		id,
		pnObjid,
		i_TestRun_cur.moduser,
		sysdate,
		null,
		null
		
	);
	END LOOP;
	close m_TestRun_cur;
 End;
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;
