create or replace PROCEDURE       "INSERT_PROFILE" (pnObjid raw) IS

--Constants for status
STATUS_CREATED	varchar2(20):='1';
STATUS_ACCEPTED	varchar2(20):='2';


--Please Modify the cursor as you need

CURSOR m_MessageQueue_cur IS Select
		p.Name,
		p.FirstName,
		p.LastName,
		'1' DeptCode,
		p.Name Email,
		'1' Status,
		p.Name Login,
		p.Name moduser,
		p.name groupuser
		from table_Profile p
	 where p.objid=pnObjid
	 and not exists (select *from table_MessageQueue m where m.name=p.name);

--Please Modify the cursor as you need

CURSOR m_User_cur IS Select
		p.FirstName Name,
		p.LastName,
		p.Name LoginName,
		p.Password,
		p.VerifyPassword,
		'1' Status,
		'2' UserType,
		p.name Email,
		p.Name moduser,
		p.name groupuser
		from table_Profile p
	 where p.objid=pnObjid
	 and not exists (select *from table_testuser u where u.LoginName=p.Name);



--Please Modify the cursor as you need

CURSOR m_ProfileSetting_cur IS Select
		p.Name,
		p.ZipCode,
		'50' Distance,
		p.Name moduser,
		p.name groupuser
		from table_Profile p
	 where p.objid=pnObjid
	 and not exists (select *from table_ProfileSetting pf where pf.Name=p.Name);




--Please Modify the cursor as you need

CURSOR m_Subscription_cur IS Select
		p.Name,
		'1' SubscribeCode,
		sysdate StartDate,
		sysdate+30 EndDate,
		p.FirstName||' '||p.LastName FullName,
		'XXXXXXXXXXXXXXXX' CardNo,
		to_char(sysdate,'mm') MonthCode,
		to_char(sysdate,'yyyy') YearCode,
		'XXX' CardId,
		'0' CardTypeCode,
		'1' Status,
		p.Name moduser,
		p.name groupuser
		from table_Profile p
	 where p.objid=pnObjid
	 and not exists (select *from table_Subscription s where s.name=p.name);


--variables

privid	raw(16);
entid	raw(16);
profilesetId raw(16);
subscriptionId raw(16);
mqId raw(16);
userId raw(16);
privgroup VARCHAR(100);

i_ProfileSetting_cur	m_ProfileSetting_cur%rowtype;
i_Subscription_cur	m_Subscription_cur%rowtype;
i_MessageQueue_cur	m_MessageQueue_cur%rowtype;
i_User_cur	m_User_cur%rowtype;

BEGIN
--opening cursor m_User_cur
	
Begin
		select reasoncode 
    --decode(reasoncode,1,'Bidding',2,'Quote',3,'Bid Plus Own',4,'ERP No Bidding',5,'ERP With Bidding','Bidding')
			into privgroup from table_profile where objid=pnObjid;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

End;

Begin
		select objid into privid from table_privilegegroup where upper(scope)=upper(privgroup);

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

End;
Begin
		select objid into entid from table_company where rownum=1;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

End;

Begin
	OPEN m_User_cur;
	LOOP
	
	FETCH m_User_cur INTO i_User_cur;
	EXIT WHEN m_User_cur%NOTFOUND;

	userId:=sys_guid();
--Insert records in User

	INSERT INTO table_testuser(
		objid,
		Name,
		LastName,
		LoginName,
		Password,
		VerifyPassword,
		Status,
		UserType,
		Email,
		testuser2PrivilegeGroup,
		testuser2company,
		ORIGINID,
		DESTINITIONID,
		GROUPUSER,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		userId,
		i_User_cur.Name,
		i_User_cur.LastName,
		i_User_cur.LoginName,
		i_User_cur.Password,
		i_User_cur.VerifyPassword,
		i_User_cur.Status,
		i_User_cur.UserType,
		i_User_cur.Email,
		privid,
		entid,
		userId,
		pnObjid,
		i_User_cur.groupuser,
		i_User_cur.moduser,
		sysdate,
		null,
		null

	);
	END LOOP;
	close m_User_cur;
 End;

Begin
	OPEN m_MessageQueue_cur;
	LOOP
	
	FETCH m_MessageQueue_cur INTO i_MessageQueue_cur;
	EXIT WHEN m_MessageQueue_cur%NOTFOUND;
    mqId:=sys_guid();
--Insert records in MessageQueue

	INSERT INTO table_MessageQueue(
		objid,
		Name,
		FirstName,
		LastName,
		DeptCode,
		Email,
		Status,
		Login,
		MessageQueue2user,
		ORIGINID,
		DESTINITIONID,
		GROUPUSER,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		mqId,
		i_MessageQueue_cur.Name,
		i_MessageQueue_cur.FirstName,
		i_MessageQueue_cur.LastName,
		i_MessageQueue_cur.DeptCode,
		i_MessageQueue_cur.Email,
		i_MessageQueue_cur.Status,
		i_MessageQueue_cur.Login,
		'0',
		mqId,
		pnObjid,
		i_MessageQueue_cur.groupuser,
		i_MessageQueue_cur.moduser,
		sysdate,
		null,
		null

	);
	END LOOP;
	close m_MessageQueue_cur;
 End;

Begin
	OPEN m_ProfileSetting_cur;
	LOOP
	
	FETCH m_ProfileSetting_cur INTO i_ProfileSetting_cur;
	EXIT WHEN m_ProfileSetting_cur%NOTFOUND;
    profilesetId:=sys_guid();
--Insert records in ProfileSetting

	INSERT INTO table_ProfileSetting(
		objid,
		Name,
		ZipCode,
		Distance,
		BizPolicy,
		ProfileSetting2Profile,
		ORIGINID,
		DESTINITIONID,
		GROUPUSER,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		profilesetId,
		i_ProfileSetting_cur.Name,
		i_ProfileSetting_cur.ZipCode,
		i_ProfileSetting_cur.Distance,
		'please write here what will appear in invoice as customer order refund or change policy. Go to profile and select profile setting tab, modify biz policy field',
		pnObjid,
		profilesetId,
		pnObjid,
		i_ProfileSetting_cur.groupuser,
		i_ProfileSetting_cur.moduser,
		sysdate,
		null,
		null

	);
	END LOOP;
	close m_ProfileSetting_cur;
 End;
--opening cursor m_Subscription_cur
	
Begin
	OPEN m_Subscription_cur;
	LOOP

	FETCH m_Subscription_cur INTO i_Subscription_cur;
	EXIT WHEN m_Subscription_cur%NOTFOUND;
    subscriptionId:=sys_guid();
--Insert records in Subscription

	INSERT INTO table_Subscription(
		objid,
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
		Subscription2Profile,
		ORIGINID,
		DESTINITIONID,
		GROUPUSER,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		subscriptionId,
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
		pnObjid,
		subscriptionId,
		pnObjid,
		i_Subscription_cur.groupuser,
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
/

create or replace PROCEDURE       "INSERT_USER" (pnObjid raw) IS

--Constants for status
STATUS_CREATED	varchar2(20):='1';
STATUS_ACCEPTED	varchar2(20):='2';


--Please Modify the cursor as you need

CURSOR m_Profile_cur IS Select
		u.LoginName Name,
		u.Name FirstName,
		u.LastName,
		' ' COMPANY,
		u.Password,
		u.Password VerifyPassword,
		' ' URL,
		' ' Street,
		' ' City,
		' ' State,
		' ' Zipcode,
		'1' CountryCode,
		' ' Phone,
		' ' Phone2,
		' ' Fax,
		'1' ReasonCode,
		'1' MediaCode,
		u.LoginName moduser,
		u.LoginName groupuser
		from table_testuser u
	 where u.objid=pnObjid
	 and not exists (select *from table_profile p where p.Name=u.LoginName);



--variables


i_Profile_cur	m_Profile_cur%rowtype;
profileId raw(16);
BEGIN
--opening cursor m_Profile_cur
	


Begin
	OPEN m_Profile_cur;
	LOOP
	
	FETCH m_Profile_cur INTO i_Profile_cur;
	EXIT WHEN m_Profile_cur%NOTFOUND;

	update table_testuser set groupuser=i_Profile_cur.groupuser where objid=pnObjid and length(testuser2supplier)>10;

--Insert records in User
    profileId:=sys_guid();

	INSERT INTO table_Profile(
		objid,
		Name,
		Password,
		VerifyPassword,
		FirstName,
		LastName,
		COMPANY,
 		URL,
 		STREET,
 		CITY,
 		STATE,
 		ZIPCODE,
 		COUNTRYCODE,
 		PHONE,
 		PHONE2,
 		FAX,
 		REASONCODE,
 		MEDIACODE,
		ORIGINID,
		DESTINITIONID,
		GROUPUSER,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		profileId,
		i_Profile_cur.Name,
		i_Profile_cur.Password,
		i_Profile_cur.VerifyPassword,
		i_Profile_cur.FirstName,
		i_Profile_cur.LastName,
		i_Profile_cur.Company,
		i_Profile_cur.Url,
		i_Profile_cur.Street,
		i_Profile_cur.City,
		i_Profile_cur.State,
		i_Profile_cur.Zipcode,
		i_Profile_cur.CountryCode,
		i_Profile_cur.Phone,
		i_Profile_cur.Phone2,
		i_Profile_cur.Fax,
		i_Profile_cur.ReasonCode,
		i_Profile_cur.MediaCode,
		profileId,
		pnObjid,
		i_Profile_cur.groupuser,
		i_Profile_cur.moduser,
		sysdate,
		null,
		null

	);
	END LOOP;
	close m_Profile_cur;
 End;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;

/

create or replace PROCEDURE       "UPDATE_PROFILE" (pnObjid raw) IS

--Constants for status
STATUS_CREATED	varchar2(20):='1';
STATUS_ACCEPTED	varchar2(20):='2';

BEGIN


	Begin
		Update Table_Profile set genuser=name,groupuser=name where objid=pnObjid;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

	End;

	Begin
		Update Table_MessageQueue set MessageQueue2User=(select objid from table_testuser where destinitionid=pnObjid)
		where destinitionid=pnObjid;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

	End;

	Begin
		Update table_testuser set password=(select password from table_profile where objid=pnObjid),
			verifypassword=(select password from table_profile where objid=pnObjid)
		where destinitionid=pnObjid;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

	End;


--Final Exception
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;
/

create or replace PROCEDURE       "INSERT_ADDUSER" (pnObjid raw) IS

--Constants for status
STATUS_CREATED	varchar2(20):='1';
STATUS_ACCEPTED	varchar2(20):='2';


--Please Modify the cursor as you need

CURSOR m_MessageQueue_cur IS Select
		a.LoginName Name,
		a.Name FirstName,
		a.LastName,
		'1' DeptCode,
		a.LoginName Email,
		'1' Status,
		a.LoginName Login,
		p.Name moduser,
		p.groupuser groupuser
		from table_AddUser a,table_profile p
	 where a.objid=pnObjid and a.addtestuser2profile=p.objid
	 and not exists (select *from table_MessageQueue m where m.name=a.loginname);

--Please Modify the cursor as you need

CURSOR m_User_cur IS Select
		a.Name Name,
		a.LastName,
		a.LoginName LoginName,
		a.Password,
		a.Password VerifyPassword,
		'1' Status,
		'2' UserType,
		a.loginname Email,
		p.Name moduser,
		p.groupuser groupuser,
		pg.objid testuser2PrivilegeGroup
		from table_adduser a,table_Profile p,table_privilegegroup pg,table_addmodule am
	 where a.objid=pnObjid and a.addtestuser2profile=p.objid and a.addtestuser2addmodule=am.objid and am.name=pg.name
	 and not exists (select *from table_testuser u where u.LoginName=a.LoginName);




--variables
userid	raw(16):=sys_guid();
privid	NUMBER:=0;
entid	raw(16);
mqid	raw(16);
privgroup VARCHAR(100);


i_MessageQueue_cur	m_MessageQueue_cur%rowtype;
i_User_cur	m_User_cur%rowtype;

BEGIN


Begin
		select objid into entid from table_company where rownum=1;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

End;

Begin
	OPEN m_User_cur;
	LOOP
	
	FETCH m_User_cur INTO i_User_cur;
	EXIT WHEN m_User_cur%NOTFOUND;

--Insert records in User

	INSERT INTO table_testuser(
		objid,
		Name,
		LastName,
		LoginName,
		Password,
		VerifyPassword,
		Status,
		UserType,
		Email,
		testuser2PrivilegeGroup,
		testuser2company,
		ORIGINID,
		DESTINITIONID,
		GROUPUSER,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		userid,
		i_User_cur.Name,
		i_User_cur.LastName,
		i_User_cur.LoginName,
		i_User_cur.Password,
		i_User_cur.VerifyPassword,
		i_User_cur.Status,
		i_User_cur.UserType,
		i_User_cur.Email,
		i_User_cur.testuser2PrivilegeGroup,
		entid,
		userid,
		pnObjid,
		i_User_cur.groupuser,
		i_User_cur.moduser,
		sysdate,
		null,
		null

	);
	END LOOP;
	close m_User_cur;
 End;

Begin
	OPEN m_MessageQueue_cur;
	LOOP
	
	FETCH m_MessageQueue_cur INTO i_MessageQueue_cur;
	EXIT WHEN m_MessageQueue_cur%NOTFOUND;

	mqid:=sys_guid();
--Insert records in MessageQueue

	INSERT INTO table_MessageQueue(
		objid,
		Name,
		FirstName,
		LastName,
		DeptCode,
		Email,
		Status,
		Login,
		MessageQueue2user,
		ORIGINID,
		DESTINITIONID,
		GROUPUSER,
		GENUSER,
		GENDATE,
		MODUSER,
		MODDATE
	)values(
		mqid,
		i_MessageQueue_cur.Name,
		i_MessageQueue_cur.FirstName,
		i_MessageQueue_cur.LastName,
		i_MessageQueue_cur.DeptCode,
		i_MessageQueue_cur.Email,
		i_MessageQueue_cur.Status,
		i_MessageQueue_cur.Login,
		userid,
		mqid,
		pnObjid,
		i_MessageQueue_cur.groupuser,
		i_MessageQueue_cur.moduser,
		sysdate,
		null,
		null

	);
	END LOOP;
	close m_MessageQueue_cur;
 End;


	EXCEPTION
		WHEN NO_DATA_FOUND THEN
		null;

END;

/