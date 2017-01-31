--------------------------------------------------------
--  File created - Sunday-August-16-2015   
--------------------------------------------------------
DROP VIEW "TESTDB"."TABLE_ASSIGNEDTO";
DROP VIEW "TESTDB"."TABLE_ASSIGNTO";
DROP VIEW "TESTDB"."TABLE_BACKLOG";
DROP VIEW "TESTDB"."TABLE_BOARDDATA";
DROP VIEW "TESTDB"."TABLE_BOARDRESULT";
DROP VIEW "TESTDB"."TABLE_BUGSCENERIO";
DROP VIEW "TESTDB"."TABLE_EPICTESTCOUNT";
DROP VIEW "TESTDB"."TABLE_FEATURERUN";
DROP VIEW "TESTDB"."TABLE_FEATURETESTCOUNT";
DROP VIEW "TESTDB"."TABLE_FEATURETESTRESULT";
DROP VIEW "TESTDB"."TABLE_IMAGES";
DROP VIEW "TESTDB"."TABLE_JOBRUN";
DROP VIEW "TESTDB"."TABLE_MATRIXLIST";
DROP VIEW "TESTDB"."TABLE_MYBUG";
DROP VIEW "TESTDB"."TABLE_MYCONTACT";
DROP VIEW "TESTDB"."TABLE_MYLEAD";
DROP VIEW "TESTDB"."TABLE_MYPROFILE";
DROP VIEW "TESTDB"."TABLE_MYTASKS";
DROP VIEW "TESTDB"."TABLE_MYTRAINING";
DROP VIEW "TESTDB"."TABLE_PRODUCTTESTCOUNT";
DROP VIEW "TESTDB"."TABLE_PROJECTBOARD";
DROP VIEW "TESTDB"."TABLE_PROJECTBOARDRESULT";
DROP VIEW "TESTDB"."TABLE_PROJECTTESTCOUNT";
DROP VIEW "TESTDB"."TABLE_RELEASETESTCOUNT";
DROP VIEW "TESTDB"."TABLE_SCENERIOCOUNT";
DROP VIEW "TESTDB"."TABLE_SPRINTBOARD";
DROP VIEW "TESTDB"."TABLE_SPRINTRESULT";
DROP VIEW "TESTDB"."TABLE_TESTCOUNT";
DROP VIEW "TESTDB"."TABLE_TESTRESULT";
DROP VIEW "TESTDB"."TABLE_TESTRUNRESULT";
DROP VIEW "TESTDB"."TABLE_TESTSCENERIO";
DROP VIEW "TESTDB"."TABLE_TESTSCENERIORESULT";
DROP VIEW "TESTDB"."TABLE_TIMEENTRY";
DROP VIEW "TESTDB"."TABLE_TOTALTIME";
DROP VIEW "TESTDB"."TABLE_WEEKSHEET";
-- Unable to render VIEW DDL for object TESTDB.TABLE_ASSIGNEDTO with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_ASSIGNEDTO
AS select distinct u.name ||' '||u.lastname Name,u.objid,u.testuser2company,u.loginname,u.groupuser from table_testuser u,table_company c where c.groupuser=u.groupuser and upper(u.deptcode) in ('SALES', 'MARKETING')
-- Unable to render VIEW DDL for object TESTDB.TABLE_ASSIGNTO with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_ASSIGNTO
AS select distinct u.name ||' '||u.lastname Name,u.objid,u.testuser2company,u.loginname,u.groupuser from table_testuser u,table_company c where c.groupuser=u.groupuser
-- Unable to render VIEW DDL for object TESTDB.TABLE_BACKLOG with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_BACKLOG
AS select distinct f.name Name,s.name Sprintname,b.name Boardname,s.startdate StartDate,s.enddate EndDate,f.objid,f.objid feature2backlog,s.objid sprintboard2sprint,b.objid backlog2board,b.groupuser from table_feature f,table_board b,table_sprint s where f.feature2project=s.sprint2projectboard and s.sprint2projectboard=b.board2project and f.feature2board is null
-- Unable to render VIEW DDL for object TESTDB.TABLE_BOARDDATA with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_BOARDDATA
AS select distinct f.name Name,s.name Sprintname,b.name Boardname,s.startdate StartDate,s.enddate EndDate,c.sceneriocount ScenerioCount,
0 TestCount,0 Executed,0 Passed,0 Fail,0 Skipped,0 Pending,
0 Defect,f.objid,f.feature2project,f.objid feature2BoardData,b.objid BoardData2board,s.objid boarddata2sprint,b.groupuser 
from table_feature f,table_sceneriocount c,table_board b,table_sprint s 
where  
f.feature2project=s.sprint2projectboard and s.sprint2projectboard=b.board2project 
and (f.feature2board =b.objid or (f.feature2board is null and b.groupcode='Backlog'))  and f.objid=c.sceneriocount2feature and not exists ( select * from table_boardresult r where r.objid=b.objid and r.boardresult2feature=f.objid)
union
select distinct f.name Name,s.name Sprintname,b.name Boardname,s.startdate StartDate,s.enddate EndDate,c.sceneriocount ScenerioCount,
nvl(r.testcount,0) TestCount,nvl(r.executed,0) Executed,nvl(r.passed,0) Passed,nvl(r.fail,0) Fail,nvl(r.skipped,0) Skipped,nvl(r.pending,0) Pending,
nvl(r.defect,0) Defect,f.objid,f.feature2project,f.objid feature2BoardData,b.objid BoardData2board,s.objid boarddata2sprint,b.groupuser 
from table_feature f,table_sceneriocount c,table_board b,table_sprint s,table_boardresult r 
where r.objid=b.objid and 
f.feature2project=s.sprint2projectboard and s.sprint2projectboard=b.board2project 
and f.feature2board =b.objid and f.objid=c.sceneriocount2feature and f.objid=r.boardresult2feature
-- Unable to render VIEW DDL for object TESTDB.TABLE_BOARDRESULT with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_BOARDRESULT
AS select distinct s.name Name,f.name feature,b.name BoardName,r.matrixname MatrixName,r.testcount TestCount,
decode(f.objid, r.objid, r.executed,0) Executed,decode(f.objid, r.objid, r.passed,0) Passed,decode(f.objid, r.objid, r.fail,0) Fail,
decode(f.objid, r.objid, r.skipped,0) Skipped,decode(f.objid, r.objid, r.pending,0) pending,decode(f.objid, r.objid, r.defect,0) defect
,b.groupcode,b.objid,b.objid BoardResult2Board,s.objid sprintresult2sprint,f.objid boardresult2feature,
s.sprint2projectboard,r.featurerun2testrun sprintresult2testrun,r.testresult2testmatrix sprintresult2testmatrix,b.groupuser 
from table_feature f, table_board b, table_sprint s,table_featuretestresult r,table_testmatrix m 
where f.feature2board =b.objid and b.groupcode !='Done' and f.objid=r.objid
and m.objid=r.testresult2testmatrix and b.groupcode=m.groupcode 
and b.board2project=s.sprint2projectboard
-- Unable to render VIEW DDL for object TESTDB.TABLE_BUGSCENERIO with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_BUGSCENERIO
AS select distinct s.name Name,s.runname RunName,s.description Description,s.stepdetail StepDetail,s.exampledata ExampleData,s.isautomated IsAutomated,s.name featurename,s.objid,b.objid BugScenerio2Bug,b.groupuser from table_testscenerio s,table_sceneriorun r,table_bug b where b.bug2sceneriorun=r.objid and r.sceneriorun2testscenerio=s.objid
-- Unable to render VIEW DDL for object TESTDB.TABLE_EPICTESTCOUNT with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_EPICTESTCOUNT
AS select distinct e.name Name,p.name ProjectName,f.matrixname MatrixName,sum(f.sceneriocount) ScenerioCount,f.envcount EnvCount,sum(f.testcount) TestCount,e.objid EpicTestCount2Epic,e.objid,p.objid EpicTestCount2project,e.groupuser from table_project p, table_epic e,table_featuretestcount f where p.objid=e.epic2project and p.objid=featuretestcount2project and e.objid=f.featuretestcount2epic group by  p.name, e.name,f.matrixname,f.envcount,p.objid,e.objid,e.groupuser
-- Unable to render VIEW DDL for object TESTDB.TABLE_FEATURERUN with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_FEATURERUN
AS select distinct f.name Name,r.name RunName,p.name ProjectName,m.name MatrixName,f.description Note,r.duedate Duedate,f.objid, r.objid featurerun2testrun,f.objid FeatureRun2Feature,m.matrixmap2testmatrix FeatureRun2TestMatrix,f.groupuser from table_feature f, table_project p,table_testrun r, table_scenerio s, table_matrixmap m,table_testmatrix x,table_board b where f.feature2project=p.objid and p.project2product=r.testrun2product and f.feature2board=b.objid and b.groupcode=x.groupcode and x.objid=m.matrixmap2testmatrix and f.objid=s.scenerio2feature and upper(s.isactive)=upper('yes') and s.objid=m.matrixmap2scenerio and r.testrun2testmatrix=m.matrixmap2testmatrix
-- Unable to render VIEW DDL for object TESTDB.TABLE_FEATURETESTCOUNT with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_FEATURETESTCOUNT
AS select distinct b.name Name,p.name ProjectName,t.name MatrixName,b.sceneriocount ScenerioCount,t.testcount EnvCount,b.sceneriocount*t.testcount TestCount,b.objid FeatureTestCount2Feature,b.feature2epic FeatureTestCount2epic ,b.objid,p.objid FeatureTestCount2Project,s.groupuser from table_sceneriocount b, table_project p,table_scenerio s, table_testcount t where p.objid=b.feature2project and b.objid=s.scenerio2feature and s.objid=t.testcount2scenerio group by b.name,b.objid,b.sceneriocount,p.objid,p.name,t.name,t.testcount,s.groupuser,b.feature2epic
-- Unable to render VIEW DDL for object TESTDB.TABLE_FEATURETESTRESULT with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_FEATURETESTRESULT
AS select distinct f.name Name,t.matrixname MatrixName,sum(t.testcount) TestCount,sum(t.executed) Executed,sum(t.passed) Passed,sum(t.fail) Fail,sum(t.skipped) Skipped,sum(t.pending) Pending,sum(t.defect) Defect,r.featurerun2testrun Featurerun2TestRun,f.objid,t.testresult2testmatrix,f.objid FeatureTestResult2FeatureRun,f.groupuser from table_scenerio s, table_feature f, table_testresult t,table_featurerun r where f.objid=s.scenerio2feature and s.objid=t.objid and r.featurerun2feature=f.objid group by f.name,t.matrixname,f.objid,t.testresult2testmatrix,r.featurerun2testrun,f.groupuser
-- Unable to render VIEW DDL for object TESTDB.TABLE_IMAGES with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_IMAGES
AS select distinct c.cloudname||','||c.ostype||','||c.region||','||c.imageid||','|| c.artifact Name,c.objid, c.objid Images2CloudImage,co.groupuser from table_cloudimage c,table_company co where c.objid is not null
-- Unable to render VIEW DDL for object TESTDB.TABLE_JOBRUN with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_JOBRUN
AS select distinct f.name Name,f.objid page,GETArtifacts(e.testenv2testmatrix) browsers,r.dbenv env,' ' datasetextension,'Runid '|| f.FEATURERUN2TESTRUN||','||'FeatureId '|| f.FEATURERUN2FEATURE||','||'MatrixId '|| f.FEATURERUN2TESTMATRIX overrideattributes,' ' groupbythread,r.appurl baseurl,j.jenkinurl jenkinurl,' ' serviceurl,decode(j.usertoken, null,j.username||':'||j.password,j.username||':'||j.usertoken) token,k.joburi joburi,k.jobtoken jobtoken,k.runtype runtype,'unit' action,'1' threads,'100' timeout,f.objid, r.objid JobRun2TestRun,f.groupuser from table_featurerun f,table_testrun r,table_testenv e,table_testmatrix x,table_jenkins j,table_jenkinsjob k where e.testenv2testmatrix=f.featurerun2testmatrix and r.objid=f.featurerun2testrun and r.testrun2testmatrix=e.testenv2testmatrix and x.objid=e.testenv2testmatrix and x.testmatrix2jenkins=j.objid and k.jenkinsjob2feature=f.objid
-- Unable to render VIEW DDL for object TESTDB.TABLE_MATRIXLIST with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_MATRIXLIST
AS select distinct m.name Name,s.name Scenerio,nvl(mm.isactive,0) IsActive,m.objid MatrixMap2TestMatrix,s.objid MatrixMap2Scenerio,mm.objid, s.groupuser from table_scenerio s, table_matrixmap mm, table_testmatrix m,table_project p,table_feature f where p.project2product=m.testmatrix2product and p.objid=f.feature2project and f.objid=s.scenerio2feature and s.objid=mm.matrixmap2scenerio(+) and mm.objid(+) is null and not exists (select *from table_matrixmap m2 where s.objid=m2.matrixmap2scenerio and m.objid=m2.matrixmap2testmatrix and m2.objid is not null) union  select distinct m.name Name,s.name scenerio,nvl(mm.isactive,0) IsActive,m.objid MatrixMap2TestMatrix,s.objid MatrixMap2Scenerio,mm.objid, s.groupuser from table_scenerio s, table_matrixmap mm, table_testmatrix m,table_project p,table_feature f  where p.project2product=m.testmatrix2product  and p.objid=f.feature2project  and f.objid=s.scenerio2feature and s.objid=mm.matrixmap2scenerio and m.objid=mm.matrixmap2testmatrix(+) and mm.objid (+) is not null
-- Unable to render VIEW DDL for object TESTDB.TABLE_MYBUG with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_MYBUG
AS select distinct b.name Name,b.note Note,b.status Status,b.createdby CreatedBy,b.creationdate CreationDate,b.type Type,b.priority Priority,b.Severity Severity,b.Bug2ScenerioRun Bug2ScenerioRun,b.Bug2AssignTo Bug2AssignTo,u.loginname,u.name ||' '||u.lastname assignto, b.objid,b.groupuser from table_testuser u,table_bug b where b.bug2assignto=u.objid
-- Unable to render VIEW DDL for object TESTDB.TABLE_MYCONTACT with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_MYCONTACT
AS select distinct c.name Name,c.lastname LastName,c.company Company,c.address Address,c.country Country,c.officephone OfficePhone,c.mobile Mobile,c.fax Fax,c.email Email,c.agentid AgentId,c.contactstage ContactStage,c.objid,t.loginname, c.objid MyContact2Testuser,c.groupuser from table_contact c,table_testuser t where t.groupuser=c.groupuser and t.shortid=c.agentid and (sysdate-c.gendate) < 40
-- Unable to render VIEW DDL for object TESTDB.TABLE_MYLEAD with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_MYLEAD
AS select distinct l.name Name,l.lastname LastName,l.company Company,l.address Address,l.country Country,l.state State,l.city City,l.zipcode ZipCode,l.officephone OfficePhone,l.mobile Mobile,l.fax Fax,l.email Email,l.url url,l.OtherContact OtherContact,l.leadstage LeadStage,l.agentid AgentId,l.leadid LeadId,l.Lead2Campaign Lead2Campaign,l.Lead2AssignedTo Lead2AssignedTo,u.loginname,u.name ||' '||u.lastname AssignedTo, l.objid,l.groupuser from table_testuser u,table_lead l where (l.Lead2AssignedTo=u.objid or l.agentid=u.shortid) and l.gendate-sysdate <45
-- Unable to render VIEW DDL for object TESTDB.TABLE_MYPROFILE with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_MYPROFILE
AS select distinct p.name Name,p.lastname LastName,p.loginname LoginName,p.password Password,p.verifypassword VerifyPassword,p.status Status,p.usertype UserType,p.email Email,p.shortid ShortId,p.TestUser2Privilegegroup TestUser2Privilegegroup,p.objid,p.TestUser2Company TestUser2Company,p.groupuser from table_testuser p,table_company c where c.objid=p.testuser2company
-- Unable to render VIEW DDL for object TESTDB.TABLE_MYTASKS with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_MYTASKS
AS select distinct t.name Name,t.description Description,t.startdate StartDate,t.duedate DueDate,t.storypoint StoryPoint,t.estimatedhr EstimatedHr,t.TaskStatusCode TaskStatusCode,t.Tasks2Feature Tasks2Feature,t.Tasks2AssignTo Tasks2AssignTo,u.loginname,u.name ||' '||u.lastname assignto, t.objid,t.objid MyTasks2Tasks,t.groupuser from table_testuser u,table_tasks t where t.tasks2assignto=u.objid
-- Unable to render VIEW DDL for object TESTDB.TABLE_MYTRAINING with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_MYTRAINING
AS select distinct t.name Name,t.startdate StartDate,t.enddate EndDate,t.course Course,t.location Location,
t.fees Fees,t.lastdate LastDate,t.starttime StartTime,t.type Type,t.objid, t.objid MyTraining2Training,c.groupuser 
from table_training t,table_company c where  t.lastdate >sysdate and  sysdate+1 <t.lastdate
-- Unable to render VIEW DDL for object TESTDB.TABLE_PRODUCTTESTCOUNT with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_PRODUCTTESTCOUNT
AS select distinct p.name Name,pp.matrixname MatrixName,sum(pp.sceneriocount) ScenerioCount,pp.envcount EnvCount,sum(pp.testcount) TestCount,p.objid ProductTestCount2Product,p.objid,p.groupuser from table_projecttestcount pp,table_product p where p.objid=pp.projecttestcount2product group by p.objid, p.name,pp.matrixname,pp.envcount,p.groupuser
-- Unable to render VIEW DDL for object TESTDB.TABLE_PROJECTBOARD with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_PROJECTBOARD
AS select distinct p.name Name,p.status Status,p.objid,p.objid ProjectBoard2Project,p.objid Backlog2Project,p.groupuser from table_project p where p.status not in ('Closed')
-- Unable to render VIEW DDL for object TESTDB.TABLE_PROJECTBOARDRESULT with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_PROJECTBOARDRESULT
AS select distinct pb.name Name,r.matrixname MatrixName,sum(r.testcount) TestCount,sum(r.executed) Executed,sum(r.passed) Passed,sum(r.fail) Fail,sum(r.skipped) Skipped,sum(r.pending) Pending,sum(r.defect) Defect,f.feature2project objid,f.feature2project BoardResult2ProjectBoard,r.groupuser from table_featuretestresult r, table_projectboard pb,table_feature f where pb.projectboard2project=f.feature2project and f.objid=r.objid group by pb.name,r.matrixname ,f.feature2project,r.groupuser order by pb.name
-- Unable to render VIEW DDL for object TESTDB.TABLE_PROJECTTESTCOUNT with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_PROJECTTESTCOUNT
AS select distinct pp.name Name,p.name ProductName,f.matrixname MatrixName,sum(f.sceneriocount) ScenerioCount,f.envcount EnvCount,sum(f.testcount) TestCount,pp.objid ProjectTestCount2Project,p.objid,p.objid ProjectTestCount2Product,pp.groupuser from table_product p, table_project pp,table_featuretestcount f where p.objid=pp.project2product and pp.objid=featuretestcount2project group by  p.name, pp.name,f.matrixname,f.envcount,p.objid,pp.objid,pp.groupuser
-- Unable to render VIEW DDL for object TESTDB.TABLE_RELEASETESTCOUNT with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_RELEASETESTCOUNT
AS select distinct r.name Name,pp.matrixname MatrixName,sum(pp.sceneriocount) ScenerioCount,pp.envcount EnvCount,sum(pp.testcount) TestCount,r.objid ReleaseTestCount2Release,r.objid,r.groupuser from table_projecttestcount pp,table_project p,table_release r where r.objid=p.project2release and p.project2product =pp.projecttestcount2product group by r.objid, r.name,pp.matrixname,pp.envcount,r.groupuser
-- Unable to render VIEW DDL for object TESTDB.TABLE_SCENERIOCOUNT with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_SCENERIOCOUNT
AS select distinct f.name Name,count(s.objid) ScenerioCount,f.objid,f.objid ScenerioCount2Feature,f.feature2project,f.feature2epic,s.groupuser from table_feature f,table_scenerio s where f.objid=s.scenerio2feature group by f.name,f.objid,f.feature2project,f.feature2epic,s.groupuser
-- Unable to render VIEW DDL for object TESTDB.TABLE_SPRINTBOARD with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_SPRINTBOARD
AS select distinct b.name Name,s.name Sprintname,b.boardindex BoardIndex,b.objid,s.objid sprintboard2sprint,b.groupuser from table_board b,table_sprint s where s.sprint2projectboard=b.board2project order by b.boardindex
-- Unable to render VIEW DDL for object TESTDB.TABLE_SPRINTRESULT with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_SPRINTRESULT
AS select distinct s.name Name,sum(r.testcount) TestCount,sum(r.executed) Executed,sum(r.passed) Passed,sum(r.fail) Fail,sum(r.skipped) Skipped,sum(r.pending) Pending,sum(r.defect) Defect,s.objid,s.objid sprintresult2sprint,s.sprint2projectboard,f.groupuser from table_feature f,table_sprint s,table_featuretestresult r where r.objid=f.objid and f.feature2project=s.sprint2projectboard group by s.name,s.objid,s.sprint2projectboard,f.groupuser
-- Unable to render VIEW DDL for object TESTDB.TABLE_TESTCOUNT with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_TESTCOUNT
AS select distinct t.name Name,s.name ScenerioName,count(e.objid) TestCount,t.objid testcount2testmatrix,s.objid,s.objid testcount2scenerio,s.groupuser 
from table_testenv e, table_testmatrix t,table_matrixmap m, table_scenerio s where t.objid=e.testenv2testmatrix(+) 
and t.objid=m.matrixmap2testmatrix and m.matrixmap2scenerio=s.objid and m.isactive=1 
group by s.objid,t.objid,t.name,s.name,s.groupuser
-- Unable to render VIEW DDL for object TESTDB.TABLE_TESTRESULT with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_TESTRESULT
AS select distinct ts.name Name,tc.name MatrixName,tc.testcount TestCount,sr.executed ,
sr.passed, sr.failed fail,sr.Skipped,
sr.inprogress pending,sr.defect ,ts.objid,tr.groupuser,ts.objid TestResult2Scenerio,
tr.testrun2testmatrix testresult2testmatrix,tr.objid testresult2testrun 
from table_testcount tc,table_testrun tr, table_scenerio ts,table_testscenerioresult sr
where tr.testrun2testmatrix=tc.testcount2testmatrix and tc.testcount2scenerio=ts.objid 
 and tr.objid=sr.testscenerioresult2testrun
and sr.objid=ts.objid and sr.executed>0
union select distinct tc.scenerioname Name,tc.name MatrixName,tc.testcount TestCount,0 executed,0 passed, 0 Fail,0 Skipped,0 Pending,0 Defect,tc.objid,tc.groupuser,
tc.objid TestResult2Scenerio,tc.testcount2testmatrix testresult2testmatrix,null testresult2testrun 
from table_testcount tc 
where not exists (select * from table_testrun tr, table_scenerio ts,table_sceneriorun sr,table_testenv e 
where nvl(tr.testrun2testmatrix,tc.testcount2testmatrix)=tc.testcount2testmatrix 
and tc.testcount2scenerio=ts.objid and tr.testrun2testmatrix=e.testenv2testmatrix 
and e.objid=sr.sceneriorun2testenv and sr.sceneriorun2testscenerio=ts.objid)
-- Unable to render VIEW DDL for object TESTDB.TABLE_TESTRUNRESULT with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_TESTRUNRESULT
AS select distinct r.name Name,f.matrixname MatrixName,sum(f.testcount) TestCount,sum(f.executed) Executed,sum(f.passed) Passed,sum(f.fail) Fail,sum(f.skipped) Skipped,sum(f.pending) Pending,sum(f.defect) Defect,r.objid,r.objid TestRunResult2TestRun,r.groupuser from table_testrun r, table_featuretestresult f where f.featurerun2testrun=r.objid group by r.name,f.matrixname,r.objid,r.groupuser
-- Unable to render VIEW DDL for object TESTDB.TABLE_TESTSCENERIO with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_TESTSCENERIO
AS select distinct s.name Name,f.runname RunName,s.description Description,s.stepdetail StepDetail,s.exampledata ExampleData,s.isautomated IsAutomated,tc.testcount TestCount,tr.executed Executed,tr.passed Passed,tr.failed Failed,tr.inprogress InProgress,tr.defect Defect,f.featurerun2testrun ScenerioRun2TestRun,f.name featurename,f.duedate,s.objid,f.objid TestScenerio2FeatureRun,f.featurerun2testmatrix,f.groupuser,CASE  WHEN tr.executed = tc.testcount THEN 'Passed'  WHEN tr.defect>0 THEN 'Defect' WHEN tr.failed>0  THEN 'Failed' WHEN tr.inprogress>0  THEN 'In Progress' ELSE 'Not Started' END status from table_scenerio s,table_sceneriorun r,table_testscenerioresult tr,table_testcount tc, table_featurerun f where f.objid=s.scenerio2feature and tc.objid=s.objid and tc.testcount2testmatrix=f.featurerun2testmatrix and tr.objid=s.objid and tr.testscenerioresult2testrun=f.featurerun2testrun and tr.testscenerioresult2scenerio=s.objid and upper(s.isactive)=upper('yes') and s.objid=r.sceneriorun2testscenerio(+)
-- Unable to render VIEW DDL for object TESTDB.TABLE_TESTSCENERIORESULT with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_TESTSCENERIORESULT
AS select distinct ts.name Name,count(s.objid) Executed,sum(decode(s.status,'Passed',1,0)) Passed,
sum(decode(s.status,'Failed',1,0)) Failed,sum(decode(s.status,'Skipped',1,0)) Skipped,
sum(decode(s.status,'In Progress',1,0)) InProgress,sum(decode(s.status,'Defect',1,0)) defect,
ts.groupuser,ts.objid, ts.objid testscenerioresult2scenerio,f.featurerun2testrun  testscenerioresult2testrun 
from table_scenerio ts,table_featurerun f,table_sceneriorun s 
where ts.scenerio2feature=f.objid and f.featurerun2testrun=nvl(sceneriorun2testrun,featurerun2testrun) and ts.objid=s.sceneriorun2testscenerio(+) group by ts.objid, ts.name, ts.groupuser,f.featurerun2testrun
-- Unable to render VIEW DDL for object TESTDB.TABLE_TIMEENTRY with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_TIMEENTRY
AS select distinct u.name Name,u.lastname LastName,u.loginname LoginName,w.name Week,w.startdate StartDate,w.enddate EndDate,w.objid,u.objid TimeSheet2TestUser , u.groupuser from table_testuser u,table_week w,table_company c where u.testuser2company=c.objid and  w.startdate between sysdate -30 and sysdate+60 order by u.name, w.startdate
-- Unable to render VIEW DDL for object TESTDB.TABLE_TOTALTIME with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_TOTALTIME
AS select distinct u.loginname Name,sum(t.sunday)+sum(t.monday)+sum(t.tuesday)+sum(t.wednesday)+sum(t.thursday)+sum(t.friday)+sum(t.saturday) Total,w.objid, u.objid timesheet2testuser,w.objid timesheet2week,t.groupuser from table_testuser u, table_timesheet t,table_week w where w.objid=t.timesheet2week and t.timesheet2testuser=u.objid  group by u.objid,w.objid,u.loginname,t.groupuser
-- Unable to render VIEW DDL for object TESTDB.TABLE_WEEKSHEET with DBMS_METADATA attempting internal generator.
CREATE VIEW TABLE_WEEKSHEET
AS select distinct u.name Name,u.lastname LastName,u.loginname LoginName,w.name Week,w.startdate StartDate,w.enddate EndDate,nvl(t.total,0) TotalTime,u.objid TimeSheet2TestUser,w.objid,u.objid WeekSheet2TestUser , u.groupuser from table_testuser u,table_week w,table_company c,table_totaltime t where w.objid=t.objid(+) and nvl(t.timesheet2testuser,u.objid)=u.objid and u.testuser2company=c.objid and  w.startdate between sysdate -30 and sysdate+60 order by u.name, w.startdate
