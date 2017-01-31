CREATE OR REPLACE PROCEDURE Insert_TestRun(pnObjid Raw) IS 




--Please Modify the cursor as you need

CURSOR m_FeatureRun_cur IS 
select distinct 
	f.name,
	r.duedate,
	r.genuser,
	r.groupuser,
	f.objid featurerun2feature,
	r.TESTRUN2TESTMATRIX featurerun2testmatrix
	from table_feature f, table_project p,table_testrun r, table_scenerio s, table_matrixmap m
where f.feature2project=p.objid
and p.project2product=r.testrun2product
and f.objid=s.scenerio2feature
and upper(s.isactive)=upper('yes')
and s.objid=m.matrixmap2scenerio
and  r.TESTRUN2TESTMATRIX=m.MATRIXMAP2TESTMATRIX
and r.objid=pnObjid
and not exists (select *from table_FeatureRun where FeatureRun2TestRun=pnObjid);


--variables

i_FeatureRun_cur	m_FeatureRun_cur%rowtype;

BEGIN
--opening cursor m_FeatureRun_cur
	
Begin
	OPEN m_FeatureRun_cur;
	LOOP
	FETCH m_FeatureRun_cur INTO i_FeatureRun_cur;
	EXIT WHEN m_FeatureRun_cur%NOTFOUND;

--Insert records in FeatureRun

	INSERT INTO table_FeatureRun(
		Name,
		Note,
		DueDate,
		FEATURERUN2TESTRUN ,
		FEATURERUN2TESTMATRIX,
		FEATURERUN2FEATURE,
		ORIGINID,
		DESTINITIONID,
		GROUPUSER,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		i_FeatureRun_cur.Name,
		' ',
		i_FeatureRun_cur.Duedate,
		i_FeatureRun_cur.FEATURERUN2TESTRUN,
		i_FeatureRun_cur.FEATURERUN2TESTMATRIX,
		i_FeatureRun_cur.FEATURERUN2FEATURE,
		pnObjid,
		pnObjid,
		i_FeatureRun_cur.groupuser,
		i_FeatureRun_cur.genuser,
		sysdate,
		null,
		null
		
	);
	END LOOP;
	close m_FeatureRun_cur;
 End;
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;
