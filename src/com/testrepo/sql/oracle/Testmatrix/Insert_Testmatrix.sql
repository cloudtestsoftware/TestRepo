CREATE OR REPLACE PROCEDURE Insert_Testmatrix(pnObjid NUMBER) IS 

--Constants for status
STATUS_OPEN	varchar2(20):='1';
STATUS_ACCEPTED	varchar2(20):='2';



--Please Modify the cursor as you need

CURSOR m_GroupRun_cur IS Select
		Name,
		Description,
		DbEnv,
		AppUrl,
		StartDate,
		DueDate,
		moduser
		from table_GroupRun
	 where objid=pnObjid 
	 and not exists (select *from table_GroupRun where GroupRun2Testmatrix=pnObjid);



--Please Modify the cursor as you need

CURSOR m_MatrixMap_cur IS Select
		Name,
		IsActive,
		moduser
		from table_MatrixMap
	 where objid=pnObjid 
	 and not exists (select *from table_MatrixMap where MatrixMap2Testmatrix=pnObjid);


--variables
id	NUMBER:=0;
i_GroupRun_cur	m_GroupRun_cur%rowtype;
i_MatrixMap_cur	m_MatrixMap_cur%rowtype;

BEGIN
--opening cursor m_GroupRun_cur
	id:=0;
Begin
	OPEN m_GroupRun_cur;
	LOOP
	id := id-1;
	FETCH m_GroupRun_cur INTO i_GroupRun_cur;
	EXIT WHEN m_GroupRun_cur%NOTFOUND;

--Insert records in GroupRun

	INSERT INTO table_GroupRun(
		Name,
		Description,
		DbEnv,
		AppUrl,
		StartDate,
		DueDate,
		ORIGINID,
		DESTINITIONID,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		i_GroupRun_cur.Name,
		i_GroupRun_cur.Description,
		i_GroupRun_cur.DbEnv,
		i_GroupRun_cur.AppUrl,
		i_GroupRun_cur.StartDate,
		i_GroupRun_cur.DueDate,
		id,
		pnObjid,
		i_GroupRun_cur.moduser,
		sysdate,
		null,
		null
		
	);
	END LOOP;
	close m_GroupRun_cur;
 End;
--opening cursor m_MatrixMap_cur
	id:=0;
Begin
	OPEN m_MatrixMap_cur;
	LOOP
	id := id-1;
	FETCH m_MatrixMap_cur INTO i_MatrixMap_cur;
	EXIT WHEN m_MatrixMap_cur%NOTFOUND;

--Insert records in MatrixMap

	INSERT INTO table_MatrixMap(
		Name,
		IsActive,
		ORIGINID,
		DESTINITIONID,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		i_MatrixMap_cur.Name,
		i_MatrixMap_cur.IsActive,
		id,
		pnObjid,
		i_MatrixMap_cur.moduser,
		sysdate,
		null,
		null
		
	);
	END LOOP;
	close m_MatrixMap_cur;
 End;
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;
