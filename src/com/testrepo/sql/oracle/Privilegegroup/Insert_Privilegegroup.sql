CREATE OR REPLACE PROCEDURE Insert_Privilegegroup(pnObjid NUMBER) IS 

--Constants for status
STATUS_OPEN	varchar2(20):='1';
STATUS_ACCEPTED	varchar2(20):='2';



--Please Modify the cursor as you need

CURSOR m_TestUser_cur IS Select
		Name,
		LastName,
		LoginName,
		Password,
		VerifyPassword,
		Status,
		UserType,
		DeptCode,
		ShortId,
		Email,
		moduser
		from table_TestUser
	 where objid=pnObjid 
	 and not exists (select *from table_TestUser where TestUser2Privilegegroup=pnObjid);



--Please Modify the cursor as you need

CURSOR m_Module_cur IS Select
		Name,
		moduser
		from table_Module
	 where objid=pnObjid 
	 and not exists (select *from table_Module where Module2Privilegegroup=pnObjid);



--Please Modify the cursor as you need

CURSOR m_ObjectPrivilege_cur IS Select
		Name,
		Title,
		Value,
		Type,
		IsRecursive,
		moduser
		from table_ObjectPrivilege
	 where objid=pnObjid 
	 and not exists (select *from table_ObjectPrivilege where ObjectPrivilege2Privilegegroup=pnObjid);


--variables
id	NUMBER:=0;
i_TestUser_cur	m_TestUser_cur%rowtype;
i_Module_cur	m_Module_cur%rowtype;
i_ObjectPrivilege_cur	m_ObjectPrivilege_cur%rowtype;

BEGIN
--opening cursor m_TestUser_cur
	id:=0;
Begin
	OPEN m_TestUser_cur;
	LOOP
	id := id-1;
	FETCH m_TestUser_cur INTO i_TestUser_cur;
	EXIT WHEN m_TestUser_cur%NOTFOUND;

--Insert records in TestUser

	INSERT INTO table_TestUser(
		Name,
		LastName,
		LoginName,
		Password,
		VerifyPassword,
		Status,
		UserType,
		DeptCode,
		ShortId,
		Email,
		ORIGINID,
		DESTINITIONID,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		i_TestUser_cur.Name,
		i_TestUser_cur.LastName,
		i_TestUser_cur.LoginName,
		i_TestUser_cur.Password,
		i_TestUser_cur.VerifyPassword,
		i_TestUser_cur.Status,
		i_TestUser_cur.UserType,
		i_TestUser_cur.DeptCode,
		i_TestUser_cur.ShortId,
		i_TestUser_cur.Email,
		id,
		pnObjid,
		i_TestUser_cur.moduser,
		sysdate,
		null,
		null
		
	);
	END LOOP;
	close m_TestUser_cur;
 End;
--opening cursor m_Module_cur
	id:=0;
Begin
	OPEN m_Module_cur;
	LOOP
	id := id-1;
	FETCH m_Module_cur INTO i_Module_cur;
	EXIT WHEN m_Module_cur%NOTFOUND;

--Insert records in Module

	INSERT INTO table_Module(
		Name,
		ORIGINID,
		DESTINITIONID,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		i_Module_cur.Name,
		id,
		pnObjid,
		i_Module_cur.moduser,
		sysdate,
		null,
		null
		
	);
	END LOOP;
	close m_Module_cur;
 End;
--opening cursor m_ObjectPrivilege_cur
	id:=0;
Begin
	OPEN m_ObjectPrivilege_cur;
	LOOP
	id := id-1;
	FETCH m_ObjectPrivilege_cur INTO i_ObjectPrivilege_cur;
	EXIT WHEN m_ObjectPrivilege_cur%NOTFOUND;

--Insert records in ObjectPrivilege

	INSERT INTO table_ObjectPrivilege(
		Name,
		Title,
		Value,
		Type,
		IsRecursive,
		ORIGINID,
		DESTINITIONID,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		i_ObjectPrivilege_cur.Name,
		i_ObjectPrivilege_cur.Title,
		i_ObjectPrivilege_cur.Value,
		i_ObjectPrivilege_cur.Type,
		i_ObjectPrivilege_cur.IsRecursive,
		id,
		pnObjid,
		i_ObjectPrivilege_cur.moduser,
		sysdate,
		null,
		null
		
	);
	END LOOP;
	close m_ObjectPrivilege_cur;
 End;
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;
