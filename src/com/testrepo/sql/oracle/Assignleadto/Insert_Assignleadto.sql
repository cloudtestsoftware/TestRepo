CREATE OR REPLACE PROCEDURE Insert_Assignleadto(pnObjid NUMBER) IS 

--Constants for status
STATUS_OPEN	varchar2(20):='1';
STATUS_ACCEPTED	varchar2(20):='2';



--Please Modify the cursor as you need

CURSOR m_Lead_cur IS Select
		Name,
		LastName,
		Company,
		Address,
		Country,
		OfficePhone,
		Mobile,
		Fax,
		Email,
		Stage,
		StartDate,
		DealDate,
		AgentId,
		LeadId,
		moduser
		from table_Lead
	 where objid=pnObjid 
	 and not exists (select *from table_Lead where Lead2Assignleadto=pnObjid);


--variables
id	NUMBER:=0;
i_Lead_cur	m_Lead_cur%rowtype;

BEGIN
--opening cursor m_Lead_cur
	id:=0;
Begin
	OPEN m_Lead_cur;
	LOOP
	id := id-1;
	FETCH m_Lead_cur INTO i_Lead_cur;
	EXIT WHEN m_Lead_cur%NOTFOUND;

--Insert records in Lead

	INSERT INTO table_Lead(
		Name,
		LastName,
		Company,
		Address,
		Country,
		OfficePhone,
		Mobile,
		Fax,
		Email,
		Stage,
		StartDate,
		DealDate,
		AgentId,
		LeadId,
		ORIGINID,
		DESTINITIONID,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		i_Lead_cur.Name,
		i_Lead_cur.LastName,
		i_Lead_cur.Company,
		i_Lead_cur.Address,
		i_Lead_cur.Country,
		i_Lead_cur.OfficePhone,
		i_Lead_cur.Mobile,
		i_Lead_cur.Fax,
		i_Lead_cur.Email,
		i_Lead_cur.Stage,
		i_Lead_cur.StartDate,
		i_Lead_cur.DealDate,
		i_Lead_cur.AgentId,
		i_Lead_cur.LeadId,
		id,
		pnObjid,
		i_Lead_cur.moduser,
		sysdate,
		null,
		null
		
	);
	END LOOP;
	close m_Lead_cur;
 End;
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;
