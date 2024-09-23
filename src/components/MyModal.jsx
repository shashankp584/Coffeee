import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import ProfileComp from './ProfileComp';
import Assessment from './Assessment';
import ProjectWork from './ProjectWork';
import ScreeningInterview from './ScreeningInterview';
import { Heading, HeadingDescription } from './Styled';

const MyModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    console.log('Ok button clicked');
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    console.log('Cancel button clicked');
    setIsModalVisible(false);
  };
  const profile = 
  {
      name: 'Sxxxxxxxx Gxxxxxxx',
      lastSeen: '21-Aug-24',
      contact: '+91-xxxxxxx',
      email: 'xxxxx@xxxxx.com',
      exp: '3 yrs 5 mos',
      salary: '$24/hr',
      score: 92,
      imageUrl: 'https://media.istockphoto.com/id/513727339/photo/head-and-shoulders-mans-silhouette.jpg?s=612x612&w=0&k=20&c=aAVL1IT9GT4URtLjS98515G5e3Qc4c7Np2EvKXBywMQ='

  };
  const assessments = [
    {
      title:'Back End Developer - Node.js',
      skill: 'Node.js',
      duration: '1 Hr 30 Min',
      marks: '60',
      score: '45/60',
      videoSrc: '/path-to-nodejs-assessment-video.mp4',
      downloadLink:'#',
    },
    {
      title:'Front End Developer - React.js',
      skill: 'React.js',
      duration: '1 Hr 30 Min',
      marks: '60',
      score: '48/60',
      videoSrc: '/path-to-reactjs-assessment-video.mp4',
    }
  ];
  const project={
    title:'Design Calculator',
    skill:'React.js',
    duration:'1 Hr 30 Min',
    downloadLink:'#' 
  };
  const interview={
    title:'Node.js Screening Interview ',
    skill:'Node.js',
    duration:'1 Hr 30 Min',
  };

  
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Popup
      </Button>
      <Modal 
        title="" 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
        className='modal-container'
      >
        <ProfileComp profile={profile}/>
        <Heading>Assesment History - Live Recordings </Heading>
        <HeadingDescription>You will be able to view the complete recording of the candidate’s assessments. This way you can also check his approach to problem solving and not just depend on the final output.</HeadingDescription>
        {assessments.map((assessment, index) => (
        <Assessment 
          key={index}
          assessments={assessment}
        />
      ))}
      <Heading>Project Work </Heading>
        <HeadingDescription>This section has the complete recording of candidate’s approach to the project work.</HeadingDescription>
      <ProjectWork project={project}/>
      <Heading>Screening Interview </Heading>
        <HeadingDescription>Here you can see how the candidate answers some real interview questions. It will give you an insight into his communication skills, his ability to handle pressure and details of his past experiences. Makes the hiring decision real easy. </HeadingDescription>
      <ScreeningInterview interview={interview} />
      </Modal>
    </>
  );
};

export default MyModal;
