#!/bin/sh

#To change into unix format open the file in vi
# Then type :set ff=unix and save the file


export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.7.0_79.jdk/Contents/Home
export DATA_PATH=/Volumes/MAC/Projects/CloudTestSoftware/CloudApp/testrepo/data
export JAR_PATH=/Volumes/MAC/Projects/CloudTestSoftware/CloudApp/3rdparty/lib
export JSP_HOME=/Volumes/MAC/Projects/CloudTestSoftware/CloudApp/testrepo


export PATH=$JAVA_HOME/bin:$PATH

export SPRING_JARS=$JAR_PATH/org.springframework.beans-3.0.5.RELEASE.jar:$JAR_PATH/org.springframework.core-3.0.5.RELEASE.jar:$JAR_PATH/org.springframework.jdbc-3.0.5.RELEASE.jar:$JAR_PATH/org.springframework.transaction-3.0.5.RELEASE.jar

export JAVA_CLASSPATH=$SPRING_JARS:$JAR_PATH/servlet.jar:$JAR_PATH/serviceinfra.jar:$JAR_PATH/ojdbc6.jar:$JAR_PATH/dom4j-1.6.1.jar:$JAVA_HOME/bin:$JAVA_HOME/lib:$JAVA_HOME/lib/tools.jar:$JAR_PATH/xerces.jar:$JAR_PATH/tomcat-dbcp.jar:$JAR_PATH/commons-logging-1.1.jar

java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean ActionQuery -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                        
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Attachment -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                         
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean AttrPrivilege -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                      
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Attribute -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                          
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Billing -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                            
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Board -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                              
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean BookCourse -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                         
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Bug -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                                
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Calendar -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                           
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Campaign -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                           
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean CampaignGift -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                       
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean CampaignNote -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                       
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean CloudImage -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                         
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean CloudSetting -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                       
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean CodeAttribute -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                      
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Company -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                            
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Consultant -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                         
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Contact -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                            
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean ContactNote -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                        
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean CourseFeedback -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                     
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Customer -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                           
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean CustomerImage -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                      
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Deal -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                               
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Developer -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                          
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean EmailSetting -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                       
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Feature -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                            
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean GenericCode -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                        
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean GroupLicense -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                       
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean InstallLicense -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                     
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Jenkins -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                            
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean JenkinsJob -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                         
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Lead -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                               
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean LeadDoc -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                            
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean LeadNote -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                           
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean ListProperty -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                       
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean MatrixMap -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                          
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Member -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                             
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean MessageQueue -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                       
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Module -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                             
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean ModuleLicense -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                      
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Month -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                              
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Object -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                             
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean ObjectPrivilege -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                    
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean ObjectRule -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                         
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Opportunity -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                        
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean PrivilegeGroup -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                     
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Product -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                            
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Profile -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                            
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Project -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                            
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean QualifyGift -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                        
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Referral -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                           
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Release -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                            
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Resolution -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                         
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Resume -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                             
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Scenerio -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                           
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean ScenerioRun -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                        
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Sprint -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                             
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean StepRun -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                            
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Subscription -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                       
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean SummaryReport -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                      
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Support -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                            
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean SupportNote -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                        
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean SurveyQuestion -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                     
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean TaskNote -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                           
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Tasks -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                              
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean TestEnv -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                            
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean TestMatrix -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                         
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean TestRun -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                            
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean TestUser -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                           
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Timesheet -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                          
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Training -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                           
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean UserLicense -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml                                        
java -classpath $JAVA_CLASSPATH cms.service.gen.beangen -bean Week -beanpath $JSP_HOME/src  -app testrepo -inifile $DATA_PATH/context.xml 
                                    
