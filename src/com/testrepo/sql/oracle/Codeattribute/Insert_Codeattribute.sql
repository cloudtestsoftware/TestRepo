CREATE OR REPLACE PROCEDURE Insert_Codeattribute(pnObjid NUMBER) IS 

--Constants for status
STATUS_OPEN	varchar2(20):='1';
STATUS_ACCEPTED	varchar2(20):='2';



--Please Modify the cursor as you need

CURSOR m_GenericCode_cur IS Select
		Name,
		AttributeName,
		CodeValue,
		Description,
		Status,
		CodeIndex,
		moduser
		from table_GenericCode
	 where objid=pnObjid 
	 and not exists (select *from table_GenericCode where GenericCode2Codeattribute=pnObjid);


--variables
id	NUMBER:=0;
i_GenericCode_cur	m_GenericCode_cur%rowtype;

BEGIN
--opening cursor m_GenericCode_cur
	id:=0;
Begin
	OPEN m_GenericCode_cur;
	LOOP
	id := id-1;
	FETCH m_GenericCode_cur INTO i_GenericCode_cur;
	EXIT WHEN m_GenericCode_cur%NOTFOUND;

--Insert records in GenericCode

	INSERT INTO table_GenericCode(
		Name,
		AttributeName,
		CodeValue,
		Description,
		Status,
		CodeIndex,
		ORIGINID,
		DESTINITIONID,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		i_GenericCode_cur.Name,
		i_GenericCode_cur.AttributeName,
		i_GenericCode_cur.CodeValue,
		i_GenericCode_cur.Description,
		i_GenericCode_cur.Status,
		i_GenericCode_cur.CodeIndex,
		id,
		pnObjid,
		i_GenericCode_cur.moduser,
		sysdate,
		null,
		null
		
	);
	END LOOP;
	close m_GenericCode_cur;
 End;
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;
