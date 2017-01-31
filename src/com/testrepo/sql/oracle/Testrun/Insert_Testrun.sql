CREATE OR REPLACE PROCEDURE Insert_Testrun(pnObjid NUMBER) IS 

--Constants for status
STATUS_OPEN	varchar2(20):='1';
STATUS_ACCEPTED	varchar2(20):='2';



--Please Modify the cursor as you need

CURSOR m_JobRun_cur IS Select
		Name,
		page,
		browsers,
		env,
		datasetextension,
		overrideattributes,
		groupbythread,
		baseurl,
		jenkinurl,
		serviceurl,
		token,
		joburi,
		jobtoken,
		runtype,
		action,
		threads,
		timeout,
		moduser
		from table_JobRun
	 where objid=pnObjid 
	 and not exists (select *from table_JobRun where JobRun2Testrun=pnObjid);


--variables
id	NUMBER:=0;
i_JobRun_cur	m_JobRun_cur%rowtype;

BEGIN
--opening cursor m_JobRun_cur
	id:=0;
Begin
	OPEN m_JobRun_cur;
	LOOP
	id := id-1;
	FETCH m_JobRun_cur INTO i_JobRun_cur;
	EXIT WHEN m_JobRun_cur%NOTFOUND;

--Insert records in JobRun

	INSERT INTO table_JobRun(
		Name,
		page,
		browsers,
		env,
		datasetextension,
		overrideattributes,
		groupbythread,
		baseurl,
		jenkinurl,
		serviceurl,
		token,
		joburi,
		jobtoken,
		runtype,
		action,
		threads,
		timeout,
		ORIGINID,
		DESTINITIONID,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		i_JobRun_cur.Name,
		i_JobRun_cur.page,
		i_JobRun_cur.browsers,
		i_JobRun_cur.env,
		i_JobRun_cur.datasetextension,
		i_JobRun_cur.overrideattributes,
		i_JobRun_cur.groupbythread,
		i_JobRun_cur.baseurl,
		i_JobRun_cur.jenkinurl,
		i_JobRun_cur.serviceurl,
		i_JobRun_cur.token,
		i_JobRun_cur.joburi,
		i_JobRun_cur.jobtoken,
		i_JobRun_cur.runtype,
		i_JobRun_cur.action,
		i_JobRun_cur.threads,
		i_JobRun_cur.timeout,
		id,
		pnObjid,
		i_JobRun_cur.moduser,
		sysdate,
		null,
		null
		
	);
	END LOOP;
	close m_JobRun_cur;
 End;
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;
