CREATE OR REPLACE PROCEDURE Insert_Company(pnObjid NUMBER) IS 

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
	 and not exists (select *from table_TestUser where TestUser2Company=pnObjid);



--Please Modify the cursor as you need

CURSOR m_Subscription_cur IS Select
		Name,
		SubscribeCode,
		StartDate,
		EndDate,
		FullName,
		CardNo,
		MonthCode,
		YearCode,
		CardId,
		CardTypeCode,
		Status,
		moduser
		from table_Subscription
	 where objid=pnObjid 
	 and not exists (select *from table_Subscription where Subscription2Company=pnObjid);


--variables
id	NUMBER:=0;
i_TestUser_cur	m_TestUser_cur%rowtype;
i_Subscription_cur	m_Subscription_cur%rowtype;

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
--opening cursor m_Subscription_cur
	id:=0;
Begin
	OPEN m_Subscription_cur;
	LOOP
	id := id-1;
	FETCH m_Subscription_cur INTO i_Subscription_cur;
	EXIT WHEN m_Subscription_cur%NOTFOUND;

--Insert records in Subscription

	INSERT INTO table_Subscription(
		Name,
		SubscribeCode,
		StartDate,
		EndDate,
		FullName,
		CardNo,
		MonthCode,
		YearCode,
		CardId,
		CardTypeCode,
		Status,
		ORIGINID,
		DESTINITIONID,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		i_Subscription_cur.Name,
		i_Subscription_cur.SubscribeCode,
		i_Subscription_cur.StartDate,
		i_Subscription_cur.EndDate,
		i_Subscription_cur.FullName,
		i_Subscription_cur.CardNo,
		i_Subscription_cur.MonthCode,
		i_Subscription_cur.YearCode,
		i_Subscription_cur.CardId,
		i_Subscription_cur.CardTypeCode,
		i_Subscription_cur.Status,
		id,
		pnObjid,
		i_Subscription_cur.moduser,
		sysdate,
		null,
		null
		
	);
	END LOOP;
	close m_Subscription_cur;
 End;
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;
