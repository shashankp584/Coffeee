import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import Profile from './Profile';
import './styles/MyModal.css'
import Assessment from './Assessment';
import ProjectWork from './ProjectWork';
import ScreeningInterview from './ScreeningInterview';

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
        Open Modal
      </Button>
      <Modal 
        title="" 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
        className='modal-container'
      >
        <Profile profile={profile}/>
        <h2 className='heading'>Assesment History-Live Recordings </h2>
        <p className='heading-description'>You will be able to view the complete recording of the candidate’s assessments. This way you can also check his approach to problem solving and not just depend on the final output.</p>
        {assessments.map((assessment, index) => (
        <Assessment 
          key={index}
          assessments={assessment}
        />
      ))}
      <h2 className='heading'>Project Work </h2>
        <p className='heading-description'>This section has the complete recording of candidate’s approach to the project work.</p>
      <ProjectWork project={project}/>
      <h2 className='heading'>Screening Interview </h2>
        <p className='heading-description'>Here you can see how the candidate answers some real interview questions. It will give you an insight into his communication skills, his ability to handle pressure and details of his past experiences. Makes the hiring decision real easy. </p>
      <ScreeningInterview interview={interview} />
      </Modal>
    </>
  );
};

export default MyModal;
