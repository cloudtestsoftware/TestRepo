CREATE OR REPLACE PROCEDURE Insert_Epic(pnObjid NUMBER) IS 

--Constants for status
STATUS_OPEN	varchar2(20):='1';
STATUS_ACCEPTED	varchar2(20):='2';



--Please Modify the cursor as you need

CURSOR m_Feature_cur IS Select
		Name,
		Description,
		Priority,
		Status,
		moduser
		from table_Feature
	 where objid=pnObjid 
	 and not exists (select *from table_Feature where Feature2Epic=pnObjid);


--variables
id	NUMBER:=0;
i_Feature_cur	m_Feature_cur%rowtype;

BEGIN
--opening cursor m_Feature_cur
	id:=0;
Begin
	OPEN m_Feature_cur;
	LOOP
	id := id-1;
	FETCH m_Feature_cur INTO i_Feature_cur;
	EXIT WHEN m_Feature_cur%NOTFOUND;

--Insert records in Feature

	INSERT INTO table_Feature(
		Name,
		Description,
		Priority,
		Status,
		ORIGINID,
		DESTINITIONID,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		i_Feature_cur.Name,
		i_Feature_cur.Description,
		i_Feature_cur.Priority,
		i_Feature_cur.Status,
		id,
		pnObjid,
		i_Feature_cur.moduser,
		sysdate,
		null,
		null
		
	);
	END LOOP;
	close m_Feature_cur;
 End;
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;
