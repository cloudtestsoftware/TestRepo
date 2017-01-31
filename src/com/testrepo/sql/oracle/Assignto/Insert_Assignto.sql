CREATE OR REPLACE PROCEDURE Insert_Assignto(pnObjid NUMBER) IS 

--Constants for status
STATUS_OPEN	varchar2(20):='1';
STATUS_ACCEPTED	varchar2(20):='2';



--Please Modify the cursor as you need

CURSOR m_Bug_cur IS Select
		Name,
		Note,
		Status,
		CreatedBy,
		CreationDate,
		Type,
		Priority,
		Severity,
		moduser
		from table_Bug
	 where objid=pnObjid 
	 and not exists (select *from table_Bug where Bug2Assignto=pnObjid);



--Please Modify the cursor as you need

CURSOR m_Member_cur IS Select
		Name,
		SprintRole,
		moduser
		from table_Member
	 where objid=pnObjid 
	 and not exists (select *from table_Member where Member2Assignto=pnObjid);



--Please Modify the cursor as you need

CURSOR m_MyBug_cur IS Select
		Name,
		Note,
		Status,
		CreatedBy,
		CreationDate,
		Type,
		Priority,
		Severity,
		Bug2ScenerioRun,
		Bug2AssignTo,
		moduser
		from table_MyBug
	 where objid=pnObjid 
	 and not exists (select *from table_MyBug where MyBug2Assignto=pnObjid);



--Please Modify the cursor as you need

CURSOR m_MyTasks_cur IS Select
		Name,
		Description,
		StartDate,
		DueDate,
		StoryPoint,
		EstimatedHr,
		TaskStatusCode,
		Tasks2Feature,
		Tasks2AssignTo,
		moduser
		from table_MyTasks
	 where objid=pnObjid 
	 and not exists (select *from table_MyTasks where MyTasks2Assignto=pnObjid);



--Please Modify the cursor as you need

CURSOR m_Tasks_cur IS Select
		Name,
		Description,
		StartDate,
		DueDate,
		StoryPoint,
		EstimatedHr,
		TaskStatusCode,
		moduser
		from table_Tasks
	 where objid=pnObjid 
	 and not exists (select *from table_Tasks where Tasks2Assignto=pnObjid);


--variables
id	NUMBER:=0;
i_Bug_cur	m_Bug_cur%rowtype;
i_Member_cur	m_Member_cur%rowtype;
i_MyBug_cur	m_MyBug_cur%rowtype;
i_MyTasks_cur	m_MyTasks_cur%rowtype;
i_Tasks_cur	m_Tasks_cur%rowtype;

BEGIN
--opening cursor m_Bug_cur
	id:=0;
Begin
	OPEN m_Bug_cur;
	LOOP
	id := id-1;
	FETCH m_Bug_cur INTO i_Bug_cur;
	EXIT WHEN m_Bug_cur%NOTFOUND;

--Insert records in Bug

	INSERT INTO table_Bug(
		Name,
		Note,
		Status,
		CreatedBy,
		CreationDate,
		Type,
		Priority,
		Severity,
		ORIGINID,
		DESTINITIONID,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		i_Bug_cur.Name,
		i_Bug_cur.Note,
		i_Bug_cur.Status,
		i_Bug_cur.CreatedBy,
		i_Bug_cur.CreationDate,
		i_Bug_cur.Type,
		i_Bug_cur.Priority,
		i_Bug_cur.Severity,
		id,
		pnObjid,
		i_Bug_cur.moduser,
		sysdate,
		null,
		null
		
	);
	END LOOP;
	close m_Bug_cur;
 End;
--opening cursor m_Member_cur
	id:=0;
Begin
	OPEN m_Member_cur;
	LOOP
	id := id-1;
	FETCH m_Member_cur INTO i_Member_cur;
	EXIT WHEN m_Member_cur%NOTFOUND;

--Insert records in Member

	INSERT INTO table_Member(
		Name,
		SprintRole,
		ORIGINID,
		DESTINITIONID,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		i_Member_cur.Name,
		i_Member_cur.SprintRole,
		id,
		pnObjid,
		i_Member_cur.moduser,
		sysdate,
		null,
		null
		
	);
	END LOOP;
	close m_Member_cur;
 End;
--opening cursor m_MyBug_cur
	id:=0;
Begin
	OPEN m_MyBug_cur;
	LOOP
	id := id-1;
	FETCH m_MyBug_cur INTO i_MyBug_cur;
	EXIT WHEN m_MyBug_cur%NOTFOUND;

--Insert records in MyBug

	INSERT INTO table_MyBug(
		Name,
		Note,
		Status,
		CreatedBy,
		CreationDate,
		Type,
		Priority,
		Severity,
		Bug2ScenerioRun,
		Bug2AssignTo,
		ORIGINID,
		DESTINITIONID,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		i_MyBug_cur.Name,
		i_MyBug_cur.Note,
		i_MyBug_cur.Status,
		i_MyBug_cur.CreatedBy,
		i_MyBug_cur.CreationDate,
		i_MyBug_cur.Type,
		i_MyBug_cur.Priority,
		i_MyBug_cur.Severity,
		i_MyBug_cur.Bug2ScenerioRun,
		i_MyBug_cur.Bug2AssignTo,
		id,
		pnObjid,
		i_MyBug_cur.moduser,
		sysdate,
		null,
		null
		
	);
	END LOOP;
	close m_MyBug_cur;
 End;
--opening cursor m_MyTasks_cur
	id:=0;
Begin
	OPEN m_MyTasks_cur;
	LOOP
	id := id-1;
	FETCH m_MyTasks_cur INTO i_MyTasks_cur;
	EXIT WHEN m_MyTasks_cur%NOTFOUND;

--Insert records in MyTasks

	INSERT INTO table_MyTasks(
		Name,
		Description,
		StartDate,
		DueDate,
		StoryPoint,
		EstimatedHr,
		TaskStatusCode,
		Tasks2Feature,
		Tasks2AssignTo,
		ORIGINID,
		DESTINITIONID,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		i_MyTasks_cur.Name,
		i_MyTasks_cur.Description,
		i_MyTasks_cur.StartDate,
		i_MyTasks_cur.DueDate,
		i_MyTasks_cur.StoryPoint,
		i_MyTasks_cur.EstimatedHr,
		i_MyTasks_cur.TaskStatusCode,
		i_MyTasks_cur.Tasks2Feature,
		i_MyTasks_cur.Tasks2AssignTo,
		id,
		pnObjid,
		i_MyTasks_cur.moduser,
		sysdate,
		null,
		null
		
	);
	END LOOP;
	close m_MyTasks_cur;
 End;
--opening cursor m_Tasks_cur
	id:=0;
Begin
	OPEN m_Tasks_cur;
	LOOP
	id := id-1;
	FETCH m_Tasks_cur INTO i_Tasks_cur;
	EXIT WHEN m_Tasks_cur%NOTFOUND;

--Insert records in Tasks

	INSERT INTO table_Tasks(
		Name,
		Description,
		StartDate,
		DueDate,
		StoryPoint,
		EstimatedHr,
		TaskStatusCode,
		ORIGINID,
		DESTINITIONID,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		i_Tasks_cur.Name,
		i_Tasks_cur.Description,
		i_Tasks_cur.StartDate,
		i_Tasks_cur.DueDate,
		i_Tasks_cur.StoryPoint,
		i_Tasks_cur.EstimatedHr,
		i_Tasks_cur.TaskStatusCode,
		id,
		pnObjid,
		i_Tasks_cur.moduser,
		sysdate,
		null,
		null
		
	);
	END LOOP;
	close m_Tasks_cur;
 End;
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;
