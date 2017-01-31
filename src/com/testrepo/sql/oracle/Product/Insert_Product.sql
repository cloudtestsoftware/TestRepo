CREATE OR REPLACE PROCEDURE Insert_Product(pnObjid NUMBER) IS 

--Constants for status
STATUS_OPEN	varchar2(20):='1';
STATUS_ACCEPTED	varchar2(20):='2';



--Please Modify the cursor as you need

CURSOR m_TestMatrix_cur IS Select
		Name,
		Annotation,
		Description,
		GroupCode,
		moduser
		from table_TestMatrix
	 where objid=pnObjid 
	 and not exists (select *from table_TestMatrix where TestMatrix2Product=pnObjid);


--variables
id	NUMBER:=0;
i_TestMatrix_cur	m_TestMatrix_cur%rowtype;

BEGIN
--opening cursor m_TestMatrix_cur
	id:=0;
Begin
	OPEN m_TestMatrix_cur;
	LOOP
	id := id-1;
	FETCH m_TestMatrix_cur INTO i_TestMatrix_cur;
	EXIT WHEN m_TestMatrix_cur%NOTFOUND;

--Insert records in TestMatrix

	INSERT INTO table_TestMatrix(
		Name,
		Annotation,
		Description,
		GroupCode,
		ORIGINID,
		DESTINITIONID,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		i_TestMatrix_cur.Name,
		i_TestMatrix_cur.Annotation,
		i_TestMatrix_cur.Description,
		i_TestMatrix_cur.GroupCode,
		id,
		pnObjid,
		i_TestMatrix_cur.moduser,
		sysdate,
		null,
		null
		
	);
	END LOOP;
	close m_TestMatrix_cur;
 End;
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;
