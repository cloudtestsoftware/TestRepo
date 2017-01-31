CREATE OR REPLACE PROCEDURE Insert_Featuregroup(pnObjid NUMBER) IS 

--Constants for status
STATUS_OPEN	varchar2(20):='1';
STATUS_ACCEPTED	varchar2(20):='2';



--Please Modify the cursor as you need

CURSOR m_FeatureMap_cur IS Select
		Name,
		IsActive,
		moduser
		from table_FeatureMap
	 where objid=pnObjid 
	 and not exists (select *from table_FeatureMap where FeatureMap2Featuregroup=pnObjid);


--variables
id	NUMBER:=0;
i_FeatureMap_cur	m_FeatureMap_cur%rowtype;

BEGIN
--opening cursor m_FeatureMap_cur
	id:=0;
Begin
	OPEN m_FeatureMap_cur;
	LOOP
	id := id-1;
	FETCH m_FeatureMap_cur INTO i_FeatureMap_cur;
	EXIT WHEN m_FeatureMap_cur%NOTFOUND;

--Insert records in FeatureMap

	INSERT INTO table_FeatureMap(
		Name,
		IsActive,
		ORIGINID,
		DESTINITIONID,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		i_FeatureMap_cur.Name,
		i_FeatureMap_cur.IsActive,
		id,
		pnObjid,
		i_FeatureMap_cur.moduser,
		sysdate,
		null,
		null
		
	);
	END LOOP;
	close m_FeatureMap_cur;
 End;
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;
